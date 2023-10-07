import { Film, People, SwapiEntity } from '@/models/entities';
import { v4 as uuidv4 } from 'uuid';

export function setKey(): string {
  return uuidv4();
} 
 
export function isPeople(entity: SwapiEntity): entity is People {
  return (entity as People).name !== undefined;
}

export function isFilm(entity: SwapiEntity): entity is Film {
  return (entity as Film).episodeId !== undefined;
}

export function formatSnakeCase(str: string): string {
  return str.split('_').map(word => capitalizeFirstLetter(word)).join(' ');
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function filterAndFormatData(data: Record<string, string>){
  return Object.entries(data)
    .filter(([key, value]) => {
      // Exclude specified keys and keys with empty values
      if (['url', 'homeworld', 'films', 'created', 'edited', 'vehicles', 'starships'].includes(key) || !value) {
        return false;
      }
      // Replace empty species value with "human"
      if (key === 'species' && !value) {
        return ['species', 'human'];
      }
      return true;
    })
    .map(([key, value]) => ({
      formattedKey: formatSnakeCase(key),
      value: key === 'species' ? 'human' : value,
    }));
};
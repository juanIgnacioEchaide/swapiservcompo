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
import { People, SwapiEntity } from '@/models/entities';
import { v4 as uuidv4 } from 'uuid';

export function setKey(): string {
  return uuidv4();
} 

export function generateConsecutiveNumbers(end: number): number[] {
  return Array.from({ length: end }, (_, index) => index + 1);
}
 
export function isPeople(entity: SwapiEntity): entity is People {
  return (entity as People).name !== undefined;
}
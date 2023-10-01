import { URI, apiRouteByDetails } from "./constants";
import { v4 as uuidv4 } from 'uuid';


export async function fetchPaginatedData(pageNum: number) {
  const response = await fetch(`https://api.example.com/data?page=${pageNum}`);
  const data = await response.json();

  return data;
}

export function setKey(): string {
  return uuidv4();
} 
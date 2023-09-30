import { URI, apiRouteByDetails } from "./constants";

export async function fetchPaginatedData(pageNum: number) {
  const response = await fetch(`https://api.example.com/data?page=${pageNum}`);
  const data = await response.json();
  
  return data;
}

  
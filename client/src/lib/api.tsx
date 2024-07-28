const initialUrl = "http://localhost:3000/goods/list";

export const fetchUrl = async (pageParam: number, type: string) => {
  const response = await fetch(`${initialUrl}?type=${type}&page=${pageParam}`);
  return response.json();
};

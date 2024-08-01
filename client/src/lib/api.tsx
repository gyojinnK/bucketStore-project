const initialUrl = "http://localhost:3000/goods/list";

export const fetchUrl = async (pageParam: number, type: string) => {
  const response = await fetch(`${initialUrl}?type=${type}&page=${pageParam}`);
  return response.json();
};

export const virtualPatchAPI = async (): Promise<boolean> => {
  console.log("START!");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("DONE!");
      resolve(true);
    }, 5000);
  });
};

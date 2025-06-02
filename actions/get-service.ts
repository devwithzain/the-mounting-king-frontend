const apiUrl = `https://api.themountingking.com/api/service`;
const getService = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getService;
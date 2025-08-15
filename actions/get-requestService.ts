const apiUrl = `https://api.themountingking.com/api/requestService`;
const getRequestService = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getRequestService;
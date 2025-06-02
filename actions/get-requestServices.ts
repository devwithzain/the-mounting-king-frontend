const apiUrl = `https://api.themountingking.com/api/requestServices`;
const getRequestServices = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getRequestServices;
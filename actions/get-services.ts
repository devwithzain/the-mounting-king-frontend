const apiUrl = `https://api.themountingking.com/api/services`;
const getServices = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getServices;
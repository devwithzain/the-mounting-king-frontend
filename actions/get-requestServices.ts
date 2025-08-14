const apiUrl = `https://themountingking.com/backend/api/requestServices`;
const getRequestServices = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getRequestServices;
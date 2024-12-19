const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/requestServices`;
const getRequestServices = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getRequestServices;
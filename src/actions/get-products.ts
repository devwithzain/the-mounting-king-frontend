const apiUrl = `https://themountingking.com/backend/api/products`;
const getProducts = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getProducts;
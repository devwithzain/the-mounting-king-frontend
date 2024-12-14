const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/product`;
const getProduct = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getProduct;
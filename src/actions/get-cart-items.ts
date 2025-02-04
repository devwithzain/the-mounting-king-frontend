import { getToken } from "@/utils/get-token";

const apiUrl = `https://themountingking.com/backend/api/cart`;
const getCartItems = async () => {
   const token = getToken();
   const response = await fetch(apiUrl, {
      headers: {
         'Authorization': `Bearer ${token}`,
      },
   });
   return response.json();
};

export default getCartItems;
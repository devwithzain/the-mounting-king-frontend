import { getToken } from "@/utils/get-token";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/cart`;
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
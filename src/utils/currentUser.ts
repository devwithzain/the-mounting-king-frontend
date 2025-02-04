import axios from 'axios';
export const getUserData = async (token: string | undefined | null) => {
   try {
      const response = await axios.get(`https://themountingking.com/backend/api/profile`, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return response.data.data;
   } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
   }
};
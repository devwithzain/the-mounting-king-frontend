import Cookies from 'js-cookie';

export const getToken = (tokenName: string) => {
   const token = Cookies.get(tokenName);
   try {
      return token;
   } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
   }
};

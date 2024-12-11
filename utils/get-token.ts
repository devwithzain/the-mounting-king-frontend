"use client";
import Cookies from 'js-cookie';

export const getToken = () => {
   const token = Cookies.get('authToken');
   try {
      return token;
   } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
   }
};

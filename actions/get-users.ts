const apiUrl = `https://api.themountingking.com/api/getAllUsers`;

const getUsers = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getUsers;
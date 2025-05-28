const apiUrl = `https://themountingking.com/backend/api/getAllUsers`;

const getUsers = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getUsers;
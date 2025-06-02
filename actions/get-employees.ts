const apiUrl = `https://api.themountingking.com/api/employees`;
const getEmployees = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getEmployees;
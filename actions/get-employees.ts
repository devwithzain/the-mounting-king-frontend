const apiUrl = `https://themountingking.com/backend/api/employees`;

const getEmployees = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getEmployees;
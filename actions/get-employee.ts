const apiUrl = `https://themountingking.com/backend/api/employee`;

const getEmployee = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getEmployee;
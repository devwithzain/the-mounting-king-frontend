const apiUrl = `https://themountingking.com/backend/api/employees`;

const getEmployee = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getEmployee;
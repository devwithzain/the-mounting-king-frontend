const apiUrl = `https://api.themountingking.com/api/employees`;

const getEmployee = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getEmployee;
const apiUrl = `https://themountingking.com/backend/api/bookings`;
const getBookings = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getBookings;
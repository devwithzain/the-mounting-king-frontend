const apiUrl = `https://api.themountingking.com/api/bookings`;
const getBookings = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getBookings;
export function getMonthName(monthNumber) {
  // const months = [
  //   'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  // ];
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Validate monthNumber
  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error('Invalid month number. Please provide a number between 1 and 12.');
  }

  // Get the month name from the months array
  return months[monthNumber - 1]; // Subtract 1 because arrays are zero-indexed
}

// // Example usage:
// const monthNumber = 3; // For March
// const monthName = getMonthName(monthNumber);
// console.log(monthName); // Output: March



export function getDateParts(dateString) {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Get the day and month from the Date object
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based, so add 1

  // Return the day and month as an object
  return { day, month };
}

// Example usage:
const dateParts = getDateParts('2022-03-18'); // Assuming the date string is in 'YYYY-MM-DD' format
console.log(`Day: ${dateParts.day}, Month: ${dateParts.month}`);

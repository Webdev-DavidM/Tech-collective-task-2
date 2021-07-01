export const daysUntil = (dateToCalculateTo) => {
   let todaysDate = new Date();
   let chosenDate = new Date(dateToCalculateTo);
   return parseInt(chosenDate - todaysDate) / (24 * 3600 * 1000);
};

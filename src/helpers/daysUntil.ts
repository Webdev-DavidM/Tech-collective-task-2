export const daysUntil = (dateToCalculateTo: string): number => {
   let todaysDate: number = new Date().valueOf();
   let chosenDate: number = new Date(dateToCalculateTo).valueOf();
   return (chosenDate - todaysDate) / (24 * 3600 * 1000);
};

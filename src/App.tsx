import React, { FC, useState, useEffect } from 'react';
import './App.css';
import DaysUntilItem from './components/DaysUntilItem';
import { data } from './data';
import { formatData } from './helpers/formatData';

const App: FC = () => {
   const [daysData, setDaysDates] = useState<string[]>([]);
   const [showDates, setShowDates] = useState<boolean>(false);

   useEffect(() => {
      let datesArray = formatData(data);
      setDaysDates(datesArray);
   }, []);

   const showDatesInfo = (): void => {
      setShowDates(true);
   };

   return (
      <div className='App'>
         <button onClick={showDatesInfo}>Show Dates</button>
         {showDates &&
            daysData.map((item: string, index: number) => {
               return <DaysUntilItem item={item} key={index} />;
            })}
      </div>
   );
};

export default App;

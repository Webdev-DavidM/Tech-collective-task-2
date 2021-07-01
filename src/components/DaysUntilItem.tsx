import React from 'react';
import { IDateInfoObj } from '../interfaces';

interface Props {
   item: IDateInfoObj;
}

const DaysUntilItem: React.FC<Props> = ({ item }) => {
   return <div>{item}</div>;
};

export default DaysUntilItem;

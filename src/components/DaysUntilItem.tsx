import React from 'react';
import { IDateInfoObj } from '../interfaces';

interface Props {
   item: IDateInfoObj;
}

export default function DaysUntilItem({ item }: Props) {
   return <div>{item}</div>;
}

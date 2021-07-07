import React from 'react';

interface Props {
   item: string;
}

const DaysUntilItem: React.FC<Props> = ({ item }) => {
   return <div>{item}</div>;
};

export default DaysUntilItem;

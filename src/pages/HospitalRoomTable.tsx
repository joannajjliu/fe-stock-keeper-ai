import React from 'react';
import { format } from 'date-fns';
import TwoColumnsTable from '../organisms/TwoColumnsTable';
import { hospitalRoomMockData } from '../data/hospitalRoomMockData';

const tableProps = {
  colOneTitle: 'Item',
  colTwoTitle: 'Quantity',
};

const HospitalRoomTable: React.FC = () => {
  const mockData = hospitalRoomMockData;
  const lastUpdated = mockData[0].updated;
  const lastUpdatedFormatted = new Date(lastUpdated);
  const lastImage = mockData[0].lastImageURL;
  const itemsObj = mockData[0].items;

  const itemsNormalized = [];
  for (const [key, value] of Object.entries(itemsObj)) {
    itemsNormalized.push({ name: key, count: value });
  }
  return (
    <div>
      <h1 class="page-title">Floor 1 - Diagnostic Imaging</h1>
      <img src={lastImage} className="img-fluid" alt="Responsive image"></img>
      <p className="subtitle">{format(lastUpdatedFormatted, 'dd MMMM yyyy HH:mm')}</p>
      <TwoColumnsTable {...tableProps} items={itemsNormalized} />
    </div>
  );
};

export default HospitalRoomTable;

import React from 'react';
import FiveColumnsTable from '../organisms/FiveColumnsTable';
import { hospitalStorageData } from '../data/hospitalStorageData';

const tableProps = {
  data: hospitalStorageData,
  colOneTitle: 'Floor',
  colTwoTitle: 'Unit',
  colThreeTitle: 'Category',
  colFourTitle: 'Status',
};

const Hospital: React.FC = () => (
  <div>
    <h1 className="page-title">Medical Supplies Inventory</h1>
    <FiveColumnsTable {...tableProps} />
  </div>
);

export default Hospital;

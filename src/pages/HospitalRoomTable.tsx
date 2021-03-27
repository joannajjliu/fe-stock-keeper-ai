import React from 'react';
import TwoColumnsTable from '../organisms/TwoColumnsTable';

const tableProps = {
  colOneTitle: 'Item',
  colTwoTitle: 'Quantity',
};
const HospitalRoomTable: React.FC = () => (
  <div>
    <TwoColumnsTable {...tableProps} />
  </div>
);

export default HospitalRoomTable;

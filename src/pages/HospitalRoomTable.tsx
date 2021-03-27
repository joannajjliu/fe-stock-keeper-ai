import React from 'react';
import TwoColumnsTable from '../organisms/TwoColumnsTable';

const tableProps = {
  colOneTitle: 'Item',
  colTwoTitle: 'Quantity',
};
const HospitalRoomTable: React.FC = () => <TwoColumnsTable {...tableProps} />;

export default HospitalRoomTable;

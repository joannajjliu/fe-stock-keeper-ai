import React, { useEffect, useState } from 'react';
import { getRoomData } from '../api/roomStorageApi';

const TwoColumnsTable: React.FC<any> = ({ colOneTitle, colTwoTitle, items }: any) => {
  const [roomData, setRoomData] = useState<any>({});

  useEffect(() => {
    getRoomData().then((data: any) => setRoomData(data));
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>{colOneTitle}</th>
            <th>{colTwoTitle}</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item: any, id: number) => (
              <tr key={id}>
                <td>{item.name}</td>
                <td>{parseInt(item.count)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TwoColumnsTable;

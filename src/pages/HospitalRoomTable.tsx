import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { getRoomData } from '../api/roomStorageApi';
import TwoColumnsTable from '../organisms/TwoColumnsTable';

const tableProps = {
  colOneTitle: 'Item',
  colTwoTitle: 'Quantity',
};

const HospitalRoomTable: React.FC = () => {
  const roomName = localStorage.getItem('room-name') || 'Hospital Room';
  const [roomData, setRoomData] = useState<any>(null);
  const [lastUpdated, setlastUpdated] = useState<any>(null);
  const [lastImage, setlastImage] = useState<string>('');
  const [itemsNormalized, setItemsNormalized] = useState<any>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getRoomData().then((data: any) => setRoomData(data));
    }, 1000); // runs every 1 second.
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (roomData) {
      const itemsNormalizedCopy = [];
      if (roomData && roomData.items && Object.entries(roomData.items).length) {
        for (const [key, value] of Object.entries(roomData.items)) {
          itemsNormalizedCopy.push({ name: key, count: value });
        }
      }
      roomData.lastImageURL && setlastImage(roomData.lastImageURL);
      roomData.updated && setlastUpdated(new Date(roomData.updated));
      setItemsNormalized(itemsNormalizedCopy);
    }
  }, [roomData]);

  return (
    <div>
      <h1 class="page-title">{roomName}</h1>
      {roomData ? (
        <>
          {lastImage && <img src={lastImage} className="img-fluid" alt="Responsive image"></img>}
          <p className="subtitle">{lastUpdated ? format(new Date(lastUpdated), 'dd MMMM yyyy HH:mm') : ''}</p>
          <TwoColumnsTable {...tableProps} items={itemsNormalized} />
        </>
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default HospitalRoomTable;

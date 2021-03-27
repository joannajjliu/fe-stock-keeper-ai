import React from 'react';
import { useHistory } from 'react-router-dom';

const FiveColumnsTable: React.FC<any> = ({ data, colOneTitle, colTwoTitle, colThreeTitle, colFourTitle }: any) => {
  const history = useHistory();

  function navigateToHospitalRoom(unit: string) {
    localStorage.setItem('room-name', unit);
    history.push('/hospital-room');
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>{colOneTitle}</th>
            <th>{colTwoTitle}</th>
            <th>{colThreeTitle}</th>
            <th>{colFourTitle}</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, id: number) => (
            <tr key={id}>
              <td>{row.floor}</td>
              <td>{row.unit}</td>
              <td>{row.category.join()}</td>
              <td>{row.status}</td>
              <td>
                <button
                  type="button"
                  className="btn stckkeeper-btn-blue"
                  onClick={() => navigateToHospitalRoom(row.unit)}
                >
                  More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FiveColumnsTable;

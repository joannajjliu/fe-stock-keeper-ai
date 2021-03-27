import React from 'react';

const FiveColumnsTable: React.FC<any> = ({ data, colOneTitle, colTwoTitle, colThreeTitle, colFourTitle }: any) => {
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
                <button />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FiveColumnsTable;

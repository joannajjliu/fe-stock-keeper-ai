import React from 'react';

const TwoColumnsTable: React.FC<any> = ({ colOneTitle, colTwoTitle, items }: any) => {
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

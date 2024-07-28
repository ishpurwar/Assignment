'use client';
import React from 'react';

export const DataTable: React.FC<{ data: any }> = ({ data }) => {
  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th>Month</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.month}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function WeatherPage() {
  const navigate = useNavigate();

  return (
    <div className="mt-40 flex flex-col items-end space-y-20">
      <table className="w-full border border-black">
        <thead className="bg-gray-200">
          <tr className="text-sm h-[32px]">
            <th>Date (mm/dd/yyyy)</th>
            <th>Temp (F)</th>
            <th className="hidden md:table-cell">Description</th>
            <th className="hidden md:table-cell">Main</th>
            <th className="hidden md:table-cell">Pressure</th>
            <th className="hidden md:table-cell">Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center h-20">
            <td>04/04/2004</td>
            <td>271.49</td>
            <td className="hidden md:table-cell">overcast clouds</td>
            <td className="hidden md:table-cell">Clouds</td>
            <td className="hidden md:table-cell">1034</td>
            <td className="hidden md:table-cell">45</td>
          </tr>
        </tbody>
      </table>
      <Button onClick={() => navigate('/')}>Back</Button>
    </div>
  );
}

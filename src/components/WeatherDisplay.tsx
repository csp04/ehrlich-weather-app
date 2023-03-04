import moment from 'moment';
import React from 'react';
import WeatherModel from '../models/weather-model';

interface WeatherDisplayProps {
  model: WeatherModel;
}

export default function WeatherDisplay({ model }: WeatherDisplayProps) {
  return (
    <table className="w-full border border-gray-400">
      <thead className="bg-white/20 backdrop-blur-sm">
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
          <td>{moment(model.dt * 1000).format('MM/DD/YYYY')}</td>
          <td>{model.main.temp}</td>
          <td className="hidden md:table-cell">
            {model.weather && model.weather.length > 0
              ? model.weather[0].description
              : ''}
          </td>
          <td className="hidden md:table-cell">
            {model.weather && model.weather.length > 0
              ? model.weather[0].main
              : ''}
          </td>
          <td className="hidden md:table-cell">{model.main.pressure}</td>
          <td className="hidden md:table-cell">{model.main.humidity}</td>
        </tr>
      </tbody>
    </table>
  );
}

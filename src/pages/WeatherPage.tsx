import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import weatherApi from '../api/weather-api';

import Button from '../components/Button';
import WeatherModel from '../models/weather-model';

export default function WeatherPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [model, setModel] = useState<WeatherModel | null>(null);

  useEffect(() => {
    const city = searchParams.get('city');

    if (!city) {
      navigate('/');
      return;
    }

    weatherApi.getWeather(city).then(setModel);
  }, [navigate, searchParams]);

  return (
    <div className="mt-40 flex flex-col items-end space-y-20">
      <table className="w-full border border-gray-400">
        <thead className="bg-gray-100">
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
          {model && (
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
          )}
        </tbody>
      </table>
      <Button onClick={() => navigate('/')}>Back</Button>
    </div>
  );
}

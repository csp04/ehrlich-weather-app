import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import weatherApi from '../api/weather-api';

import Button from '../components/Button';
import WeatherDisplay from '../components/WeatherDisplay';
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

  if (!model) return null;

  return (
    <div className="mt-40 flex flex-col items-end space-y-20 animate-fade-in">
      <WeatherDisplay model={model} />
      <Button onClick={() => navigate('/')}>Back</Button>
    </div>
  );
}

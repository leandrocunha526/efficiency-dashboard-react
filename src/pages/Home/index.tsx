import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import EfficiencyChart from '../../components/EfficiencyChart';
import { TemperatureData } from '../../interfaces/machine';
import axios from 'axios';

const Home: React.FC = () => {
  const [data, setData] = useState<TemperatureData[]>([]);

  const fetchTemperatureData = async () => {
    try {
      const response = await axios.get<TemperatureData[]>('http://localhost:3333/api/efficiency');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados de temperatura:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetchTemperatureData();
        setData(newData);
      } catch (error) {
        console.error('Erro ao buscar dados de temperatura:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Gráfico com base em registros de Eficiência da Máquina
      </Typography>
      <EfficiencyChart data={data} />
    </Container>
  );
};

export default Home;

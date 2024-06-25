import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import DataCard from '../../components/DataCard';
import EfficiencyChart from '../../components/EfficiencyChart';
import { TemperatureData } from '../../interfaces/machine';
import axios from 'axios';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Realtime: React.FC = () => {
  const [data, setData] = useState<TemperatureData[]>([]);
  const [latestData, setLatestData] = useState<TemperatureData | null>(null);

  const fetchTemperatureData = async () => {
    try {
      const response = await axios.get<TemperatureData>('http://localhost:3333/api/temperature');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados de temperatura:', error);
      throw error;
    }
  };

  const updateData = async () => {
    try {
      const newData = await fetchTemperatureData();
      console.log('Novos dados recebidos:', newData);

      // Verifica se já existe algum dado no estado
      if (data.length === 0 || newData.timestamp !== data[data.length - 1].timestamp) {
        setData(prevData => [...prevData, newData]);
        setLatestData(newData);
      }
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
    }
  };

  useEffect(() => {
    // Chama updateData uma vez no início
    updateData();

    // Configura o intervalo para atualizar a cada 30 segundos
    const interval = setInterval(updateData, 30000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Gráfico e informações em tempo real de Eficiência da Máquina
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Última atualização: {latestData?.timestamp ? new Date(latestData.timestamp).toLocaleString() : 'Carregando...'}
      </Typography>
      <Link href="https://openweathermap.org/city/3454783">Dados de temperatura de OpenWeather API para Patos de Minas</Link>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        A página é atualizada a cada 30 segundos automaticamente.
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <DataCard title="Temperatura (°C)" value={latestData ? Intl.NumberFormat("pt-BR", { maximumSignificantDigits: 1 }).format(latestData.temperature) : 'Carregando...'} />
        <DataCard title="Eficiência (%)" value={latestData ? latestData.efficiency : 'Carregando...'} />
      </div>
      <EfficiencyChart data={data} />
    </Container>
  );
};

export default Realtime;

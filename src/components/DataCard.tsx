import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface DataCardProps {
  title: string;
  value: any;
}

const DataCard: React.FC<DataCardProps> = ({ title, value }) => {
  return (
    <Card style={{ margin: '10px', width: '200px' }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{Intl.NumberFormat("pt-BR", {maximumSignificantDigits: 4}).format(value)}</Typography>
      </CardContent>
    </Card>
  );
};

export default DataCard;

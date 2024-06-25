import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@mui/material';
import Moment from 'react-moment';
import 'moment/locale/pt-br';

// Interface para tipar os dados recebidos da API
interface MachineEfficiency {
    id: number;
    temperature: number;
    efficiency: number;
    timestamp: string;
}

const MachineEfficiencyTable: React.FC = () => {
    const [data, setData] = useState<MachineEfficiency[]>([]);

    useEffect(() => {
        // Função para carregar dados da API usando Axios
        const fetchData = async () => {
            try {
                const response = await axios.get<MachineEfficiency[]>('http://localhost:3333/api/efficiency'); // URL da API
                setData(response.data); // Atualiza o estado com os dados recebidos da API
            } catch (error) {
                console.error('Erro ao carregar dados da API:', error);
            }
        };

        fetchData(); // Chama a função para carregar dados ao montar o componente
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3333/api/stats/${id}`); // URL da API
            setData(data.filter((item) => item.id !== id)); // Atualiza o estado removendo o item deletado
            alert('Item deletado com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar item:', error);
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Temperatura</TableCell>
                        <TableCell>Eficiência</TableCell>
                        <TableCell>Data/Hora</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 1 }).format(row.temperature)}°C</TableCell>
                            <TableCell>{Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 4 }).format(row.efficiency)}%</TableCell>
                            <TableCell><Moment format="DD/MM/YYYY HH:mm:ss">{row.timestamp}</Moment></TableCell>
                            <TableCell>
                                <Button variant="contained" sx={{ backgroundColor: '#f44336', color: 'white' }} onClick={() => handleDelete(row.id)}>Deletar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MachineEfficiencyTable;

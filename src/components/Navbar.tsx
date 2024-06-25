import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Navbar
                </Typography>
                <Button color="inherit" component={Link} to="/realtime">Tempo real</Button>
                <Button color="inherit" component={Link} to="/logs">Registros</Button>
                <Button color="inherit" component={Link} to="/">Gráfico do log</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

import React, { useState } from 'react';
import {
    Avatar,
    Button,
    TextField,
    Typography,
    Container,
    Box,
    Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Exemplo simples de validação (substituir depois)
        if (usuario === 'admin' && senha === '1234') {
            navigate('/dashboard');
        } else {
            alert('Usuário ou senha inválidos');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={6} sx={{ padding: 4, mt: 8 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Portal ACRO
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
                        <TextField
                            fullWidth
                            label="Usuário"
                            margin="normal"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Senha"
                            type="password"
                            margin="normal"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3 }}
                        >
                            Entrar
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default LoginPage;
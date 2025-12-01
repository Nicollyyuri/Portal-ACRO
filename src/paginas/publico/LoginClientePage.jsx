import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Link,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginClientePage = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erroLogin, setErroLogin] = useState(false);
    const [openForgot, setOpenForgot] = useState(false);
    const [email, setEmail] = useState('');

    // Handle login request
    const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:3030/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: usuario.toLowerCase().trim(),
                password: senha
            })
        });

        const data = await response.json();

        // ✅ FIX: backend returns { message: 'Login success', user: {...} }
        // So we should check for response.ok or data.user instead of data.success
        if (response.ok && data.user) {
            setErroLogin(false);
            navigate('/cliente/inicio');
        } else {
            setErroLogin(true);
        }
    } catch (error) {
        console.error(error);
        setErroLogin(true);
    }
    };
    // Handle forgot password
    const handleForgotPassword = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                alert('Email enviado com instruções para redefinir sua senha.');
                setOpenForgot(false);
                setEmail('');
            } else {
                alert('Erro ao enviar o email.');
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao enviar o email.');
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1f2f34 0%, #010300 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 2,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    width: '100%',
                    maxWidth: 480,
                    p: 4,
                    borderRadius: 4,
                    textAlign: 'center',
                }}
            >
                <Box
                    component="img"
                    src="/imagens/logo-acro.png"
                    alt="Logo ACRO"
                    sx={{ width: '70%', mb: 2 }}
                />

                <Typography variant="h5" gutterBottom>
                    Bem-vindo ao Portal do Cliente
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                    Acompanhe boletos, documentos e atualizações da sua unidade.
                </Typography>

                <Box component="form" onSubmit={handleLogin}>
                    <TextField
                        fullWidth
                        label="Usuário"
                        autoComplete="username"
                        inputProps={{ 'aria-label': 'usuário' }}
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        margin="normal"
                        required
                        error={erroLogin}
                    />
                    <TextField
                        fullWidth
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        inputProps={{ 'aria-label': 'senha' }}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        margin="normal"
                        required
                        error={erroLogin}
                        helperText={erroLogin ? 'Usuário ou senha inválidos' : ''}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, py: 1.5, fontSize: '1rem' }}
                    >
                        Entrar
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 4,
                        width: '100%'
                    }}
                >
                    <Link
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenForgot(true);
                        }}
                        underline="none"
                        color="text.secondary"
                        sx={{ fontSize: '0.9rem' }}
                    >
                        Esqueceu a senha?
                    </Link>
                </Box>
            </Paper>

            {/* Forgot Password Dialog */}
            <Dialog open={openForgot} onClose={() => setOpenForgot(false)}>
                <DialogTitle>Recuperar senha</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenForgot(false)}>Cancelar</Button>
                    <Button onClick={handleForgotPassword}>Enviar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default LoginClientePage;

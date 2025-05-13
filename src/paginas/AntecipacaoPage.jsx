import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import Layout from '../componentes/Layout';

const AntecipacaoPage = () => {
    return (
        <Layout title="Antecipação - ACRO">
            <Box p={2}>
                <Typography variant="h4" gutterBottom>Solicitar Antecipação</Typography>
                <Paper sx={{ p: 3, mt: 2 }}>
                    <TextField fullWidth label="Valor da Antecipação" margin="normal" />
                    <TextField fullWidth label="Motivo" margin="normal" multiline rows={4} />
                    <Button variant="contained" sx={{ mt: 2 }}>Enviar Solicitação</Button>
                </Paper>
            </Box>
        </Layout>
    );
};

export default AntecipacaoPage;
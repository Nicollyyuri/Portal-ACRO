import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import Layout from '../componentes/Layout';

const AssistenciaPage = () => {
    return (
        <Layout title="Assistência Técnica - ACRO">
            <Box p={2}>
                <Typography variant="h4" gutterBottom>Solicitação de Assistência</Typography>
                <Paper sx={{ p: 3, mt: 2 }}>
                    <TextField fullWidth label="Título do Problema" margin="normal" />
                    <TextField fullWidth label="Descrição" multiline rows={4} margin="normal" />
                    <Button variant="contained" sx={{ mt: 2 }}>Enviar</Button>
                </Paper>
            </Box>
        </Layout>
    );
};

export default AssistenciaPage;
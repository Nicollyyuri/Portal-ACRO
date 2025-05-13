import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import Layout from '../componentes/Layout';

const obras = [
    { id: 1, nome: 'Residencial Jardim das Flores', status: 'Em construção' },
    { id: 2, nome: 'Condomínio Sol Nascente', status: 'Finalizado' },
];

const ObrasPage = () => {
    return (
        <Layout title="Obras - ACRO">
            <Box p={2}>
                <Typography variant="h4" gutterBottom>Empreendimentos</Typography>
                <Grid container spacing={2}>
                    {obras.map((obra) => (
                        <Grid item xs={12} md={6} key={obra.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{obra.nome}</Typography>
                                    <Typography>Status: {obra.status}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
};

export default ObrasPage;
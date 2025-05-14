import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import Layout from '../componentes/Layout';

const DashboardPage = () => {
    return (
        <Layout title="Dashboard - ACRO">
            <Box p={2}>
                <Typography variant="h4" gutterBottom>
                    Visão Geral
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ minHeight: 120 }}>
                            <CardContent>
                                <Typography variant="h6">Total de Boletos</Typography>
                                <Typography variant="h4" color="primary">124</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ minHeight: 120 }}>
                            <CardContent>
                                <Typography variant="h6">Obras em Andamento</Typography>
                                <Typography variant="h4" color="primary">5</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ minHeight: 120 }}>
                            <CardContent>
                                <Typography variant="h6">Assistências Abertas</Typography>
                                <Typography variant="h4" color="primary">3</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ minHeight: 120 }}>
                            <CardContent>
                                <Typography variant="h6">Documentos Pendentes</Typography>
                                <Typography variant="h4" color="primary">8</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
};

export default DashboardPage;
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import Layout from '../componentes/Layout';

const documentos = [
    { id: 1, nome: 'Contrato de Compra e Venda', status: 'Assinado' },
    { id: 2, nome: 'Declaração de Quitação', status: 'Pendente' },
];

const DocumentosPage = () => {
    return (
        <Layout title="Documentos - ACRO">
            <Box p={2}>
                <Typography variant="h4" gutterBottom>Seus Documentos</Typography>
                <List>
                    {documentos.map((doc) => (
                        <ListItem key={doc.id} divider>
                            <ListItemText
                                primary={doc.nome}
                                secondary={"Status:" + doc.status}
                />
                            <Button variant="outlined" size="small">Download</Button>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Layout>
    );
};

export default DocumentosPage;
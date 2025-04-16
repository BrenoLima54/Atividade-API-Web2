import express from 'express';

const app = express();
const port = 3000;

const usuarios = [
  { nome: "Breno Lima", cidade: "Juazeiro do Norte" },
  { nome: "Claudio Crispim", cidade: "Crato" },
  { nome: "Francisca Natalia", cidade: "Crato" },
  { nome: "Francinilton Junior", cidade: "Crato" },
  { nome: "Alex Furtado", cidade: "Crato" },
  { nome: "Max Peterson", cidade: "Paris" },
  { nome: "Joelma Calypson", cidade: "Belem" },
  { nome: "Isaac Bandeira", cidade: "Juazeiro do Norte" },
  { nome: "Harley Macedo", cidade: "Juazeiro do Norte" },
  { nome: "Robson Fechine", cidade: "Crato" },
];

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

app.get('/usuario/todos', (req, res) => {
    try {
        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.get('/usuario/cidade/:cidade', (req, res) => {
    const cidadeParam = req.params.cidade.toLowerCase();
    console
    const filtrados = usuarios.filter(usuarios => usuarios.cidade.toLowerCase() === cidadeParam);
    res.json(filtrados);
});

app.get('/usuario/sorteado', (req, res) => {
    try {
        const indiceSorteado = Math.floor(Math.random() * usuarios.length);
        res.json(usuarios[indiceSorteado]);
    } catch (error) {
        console.error('Erro ao sortear usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;

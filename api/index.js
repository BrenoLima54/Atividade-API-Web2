const express = require("express");
const serverless = require("serverless-http");

const app = express();

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

app.get("/usuario/todos", (req, res) => {
  res.json(usuarios);
});

app.get("/usuario/cidade/:cidade", (req, res) => {
  const cidade = req.params.cidade.toLowerCase();
  const resultado = usuarios.filter((u) => u.cidade.toLowerCase() === cidade);
  res.json(resultado);
});

app.get("/usuario/sorteado", (req, res) => {
  const indexAleatorio = Math.floor(Math.random() * usuarios.length);
  res.json(usuarios[indexAleatorio]);
});

module.exports = serverless(app);

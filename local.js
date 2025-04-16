const app = require("./api/index");
const express = require("express");

if (typeof app.listen === "function") {
  app.listen(3000, () => {
    console.log("Rodando localmente na porta 3000");
  });
}

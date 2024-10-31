//llamado de libreria del api 
// "const" es para ello 
const express = require('express'); //modulo express
const app = express(); //llamado de la instancia

// declaro un puerto de salida
// tratar de usar puertos altos  depues del 3mil
const port = 3000;

app.listen(port, ()=>{}  )
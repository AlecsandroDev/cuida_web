// server.js
require('dotenv').config({ path: __dirname + '.env' });

const app = require("./app");

const PORT = process.env.PORT_SERVER;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));

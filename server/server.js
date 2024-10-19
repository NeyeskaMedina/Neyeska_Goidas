import express from "express";
import cors from "cors";
import routes from "./config/routes/routes.js";
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Servidor corriendo en puerto: '+ PORT)
});

app.use('/api/v1', routes);

app.listen(PORT, console.log(`¡Servidor corriendo en el puerto! ${PORT}`));

export default app;

import express from 'express';
import UserRoutes from './routes/UserRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', UserRoutes);

app.get("/", (req,res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
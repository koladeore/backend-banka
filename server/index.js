import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());


app.get('/', (req,res) => {
    res.status(200).send('The api is working');
})

dotenv.config();
const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})

export default app;

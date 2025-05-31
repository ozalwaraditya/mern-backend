import express from 'express';
import cors from 'cors';

const app = express();

const allowedOrigin = ['https://mern-frontend-six-tan.vercel.app', 'http://localhost:5173'];

app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is working...:)');
});

app.get('/api', (req, res) => {
  res.json({ success: true, message: '✅ Test route from Express is working!' });
});

export default app;
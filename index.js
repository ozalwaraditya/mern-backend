import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is working...:)"');
});

app.get('/api', (req, res) => {
  res.json({ success: true, message: '✅ Test route from Express is working!' });
});

if (process.argv[1].endsWith('index.js')) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on - ${PORT}`);
  });
}

export default app;
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db.js'; 
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();


app.use(cors()); 
app.use(express.json());


pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Connected to PostgreSQL at:', result.rows[0].now);
  }
});


app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

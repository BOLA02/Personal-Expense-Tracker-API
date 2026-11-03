import express from 'express'

import  transactionsRoutes from '../src/routes/transaction.routes'


const app = express();

app.use(express.json())

app.use('/api/transactions', transactionsRoutes);

export default app;

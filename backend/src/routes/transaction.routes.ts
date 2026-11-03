import { Router } from 'express';
import { createTransaction, getAllTransactions, deleteTransactions } from '../controller/transaction.controller';

const router = Router();


router.post('/', createTransaction);
router.get('/', getAllTransactions);
router.delete('/:id', deleteTransactions);

export default router;

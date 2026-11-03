import { type Request, type Response } from 'express';
import prisma from '../config/db';

export const createTransaction = async (req: Request, res: Response) => {
   try {
    const { amount, category } = req.body;

    const newTransaction = await prisma.transactionRecord.create({
      data: {
        amount,
        category
      },
    });

    res.status(201).json(newTransaction);
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ error: "Database failed!" });
  }
}  

export const getAllTransactions = async (req:Request, res:Response) =>{
    try{
        const getTransactions = await prisma.transactionRecord.findMany()

        return res.json(getTransactions);
    }catch(error){
        console.error(error)
         return res.status(500).json({ error: "Database failed!" });
    }}

export const deleteTransactions = async (req:Request, res:Response) =>{
        const {id} = req.params;

    try{
        const deleteTransactions =  await prisma.transactionRecord.delete({
  where: {
    id: Number(id),
    }});

   return res.status(200).json({ 
      message: "Transaction deleted successfully!", 
      data: deleteTransactions 
    });
    }catch(error){
        console.error(error)
        return res.status(500).json({ error: "Could not delete transaction o!" });
    }}

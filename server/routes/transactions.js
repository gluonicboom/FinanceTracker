import express from "express";
import pool from "../config/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
   console.log(req.body);
   console.log("POST /api/transactions was called");

  try {

    const { user_id, amount,type, description, category } = req.body;

    const newTransaction = await pool.query(
      `
      INSERT INTO transactions
      (user_id, amount,type, description, category)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [user_id, amount,type, description, category]
    );

    res.json(newTransaction.rows[0]);

  } catch (err) {

    console.log(err.message);

    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {

  try {

    const allTransactions = await pool.query(
      "SELECT * FROM transactions ORDER BY created_at DESC"
    );

    res.json(allTransactions.rows);

  } catch (err) {

    console.log(err.message);

    res.status(500).send("Server Error");
  }
});

export default router;
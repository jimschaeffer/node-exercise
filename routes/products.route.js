import express from "express";
import db from "../controllers/products.controller";

const router = express.Router();

// Read user data
router.get("/:id?", async (req, res, next) => {
    try {
      const { id } = req.params;
      let data;
      if (id) {
        data = await db.findOne(id);
      } else {
        data = await db.findAll();
      }
      res.json(data);
    } catch(err){
        next(err);
    }
});

// Create a new user
router.post("/", async (req, res, next) => {
    try {
        const { product } = req.params;
        const newUser = req.body;
        const data = await db.addOne(product);
        // get user data and respond
        res.json(data);
    } catch(err){
        next(err);
    }
});

// Update an existing user
router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const data = await db.updateOne(id, product);
        res.json(data);
    } catch(err){
        next(err);
    }
});

// Delete an existing user
router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await db.removeOne(id);
        res.json(data);
    } catch(err){
        next(err);
    }
});

export default router;
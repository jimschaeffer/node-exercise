import express from "express";
import db from "../mockdb";

const router = express.Router();

// Read user data
router.get("/:id?", async (req, res, next) => {
    try {
      const { id } = req.params;
      let data;
      if (id) {
        data = await db.getOne(id);
      } else {
        data = await db.getAll();
      }
      res.json(data);
    } catch(err){
        next(err);
    }
});

// Create a new user
router.post("/", async (req, res, next) => {
    try {
        const { id } = req.params;
        const newUser = req.body;
        const data = await db.add(newUser);
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
        const updatedUser = req.body;
        const data = await db.update(id, updatedUser);
        res.json(data);
    } catch(err){
        next(err);
    }
});

// Delete an existing user
router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await db.remove(id);
        res.json(data);
    } catch(err){
        next(err);
    }
});

export default router;
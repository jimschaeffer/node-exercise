import express from "express";
// TODO: import router from users.route
import userRouter from "./users.route";
import productRouter from "./products.route";

const router = express.Router();

// TODO: use the imported router to handle all routes matching "/users"
router.use("/users", userRouter);
router.use("/products", productRouter);

router.get("/test", (req, res) => {
  res.send("working");
});

export default router;
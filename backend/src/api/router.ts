import { Router } from "express";

const router = (() => {
  const router = Router();

  router.get("/test", (req, res) => {
    console.log("test /api");
    res.status(200).json({ message: "Hello World" });
  });

  return router;
})();

export default router;

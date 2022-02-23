import { Request, Response, Router } from "express";

const router = Router();

// TESTING ENDPOINT
router.get("/test", (req: Request, res: Response) =>
    res.send("This is test endpoint")
);

// router.use("/auth", require("./auth.routes"));
// router.use("/restaurant", require("./restaurant.routes"));
// router.use("/filter", require("./filter.routes"));
// router.use("/user", require("./user.routes"));
// router.use("/collection", require("./collection.routes"));

module.exports = router;

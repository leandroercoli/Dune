const { Router } = require("express");
const router = Router();

const { getUser } = require("../controllers/user");
const { validateToken } = require("../middleware/validate-token");

router.all("*", [validateToken]);
router.get("/:id", getUser);

module.exports = router;

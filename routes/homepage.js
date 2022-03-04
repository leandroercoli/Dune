const { Router } = require("express");
const router = Router();

const { getPlanets, getContacts } = require("../controllers/homepage");
const { validateToken } = require("../middleware/validate-token");

router.all("*", [validateToken]);
router.get("/planets", getPlanets);
router.get("/contacts/:id", getContacts);

module.exports = router;

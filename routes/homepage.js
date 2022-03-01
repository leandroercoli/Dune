const { Router } = require("express");
const router = Router();

const { getPlanets, getContacts } = require("../controllers/homepage");

router.get("/planets", getPlanets);
router.get("/contacts/:id", getContacts);

module.exports = router;

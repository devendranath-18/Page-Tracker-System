const express = require("express");
const router = express.Router();

const visitController = require("../controllers/visitController");


router.post("/visits", visitController.trackVisit);


router.get("/visits", visitController.getVisits);

module.exports = router;

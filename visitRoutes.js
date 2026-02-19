const router = require("express").Router();
const {
  trackVisit,
  getAnalytics,
} = require("../controllers/visitController");
const authMiddleware = require("../middleware/authMiddleware");t
router.post("/track", trackVisit);
router.get("/", authMiddleware, getAnalytics);

module.exports = router;

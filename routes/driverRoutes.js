const express = require("express");
const driverController = require("../controllers/driverController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", protect, driverController.getProfile);
router.put("/profile", protect, driverController.updateProfile);
router.get("/balance", protect, driverController.viewBalance);
router.get("/trip-requests", protect, driverController.handleTripRequests);

module.exports = router;

const Visit = require("../models/visit");
exports.trackVisit = async (req, res) => {
  try {
    const { page } = req.body;
    const ipAddress =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress;
    let visit = await Visit.findOne({
      where: { ipAddress, page },
    });
    if (visit) {
      visit.count += 1;
      visit.lastVisitedAt = new Date();
      await visit.save();
    } else {
      await Visit.create({
        ipAddress,
        page,
        count: 1,
        lastVisitedAt: new Date(),
      });
    }
    res.json({ message: "Visit tracked successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAnalytics = async (req, res) => {
  try {
    const data = await Visit.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

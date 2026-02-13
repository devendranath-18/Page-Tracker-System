const Visit = require("../models/visit");

exports.trackVisit = async (req, res) => {
  try {
    const ipAddress =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    const { page } = req.body;

    let visit = await Visit.findOne({
      where: { ipAddress, page },
    });

    if (visit) {
      visit.count += 1;
      visit.lastVisitedAt = new Date();
      await visit.save();
    } else {
      visit = await Visit.create({
        ipAddress,
        page,
        count: 1,
        lastVisitedAt: new Date(),
      });
    }

    res.json(visit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getVisits = async (req, res) => {
  const visits = await Visit.findAll();
  res.json(visits);
};

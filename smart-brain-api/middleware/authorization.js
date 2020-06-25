const redisClient = require("../controllers/signin").redisClient;

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json("Unauthorized");
  }
  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(401).json("Unauthorized");
    }

    // next - Execute the next action after auth.requireAuth method
    // app.get("/profile/:id", auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db) });
    return next();
  });
};

module.exports = {
  requireAuth: requireAuth,
};

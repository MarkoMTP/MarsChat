export default function mockAuth(req, res, next) {
  req.user = { id: "u1" }; // or whatever test user
  next();
}

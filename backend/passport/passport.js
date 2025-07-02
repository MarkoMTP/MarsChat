import prisma from "../prisma/prismaClient.js";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

if (!jwtOptions.secretOrKey) {
  throw new Error("JWT_SECRET not defined in environment variables");
}

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: jwtPayload.id },
      });

      if (user) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Unauthorized - User not found" });
      }
    } catch (err) {
      console.error("🔥 Error during authentication:", err);
      return done(err, false, { message: "Authentication failed" });
    }
  })
);

export default passport;

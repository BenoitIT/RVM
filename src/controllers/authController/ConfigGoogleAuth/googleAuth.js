import passport from "passport";
import dotenv from "dotenv";
import GoogleStrategy from "passport-google-oauth20";
import {
  hashPassword,
  signToken,
} from "../../../utilities/validations/handlingPasswordVerification";
import { payLoad } from "../../../utilities/BetterCodingPractice/tokenPayload";
import db from "../../../database/models";
import {
  generatePassword,
  generateRondomPhoneNumber,
} from "../../../utilities/BetterCodingPractice/generateRondoms";
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRETE,
      callbackURL: process.env.REDIRECT_URI,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = { id: profile.id, email: profile.emails[0].value };
        const existingUser = await db.Users.findOne({
          where: { email: user.email },
        });
        if (existingUser) {
          const token = await signToken(payLoad(user));
          done(null, { user, token });
        } else {
          const password = generatePassword();
          const hashedPassword = await hashPassword(password);
          const newClient = await db.Users.create({
            firstName: profile.name.givenName,
            Nationality: "Rwanda",
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            password: hashedPassword,
            phoneNumber: generateRondomPhoneNumber(),
            role: "client",
          });

          const token = await signToken(payLoad(newClient));
          done(null, { user: newClient, token });
        }
      } catch (err) {
        done(err, null);
      }
    }
  )
);

export const googleAuthMiddleware = passport.authenticate("google", {
  scope: ["email", "profile"],
});
export const googleAuthCallbackMiddleware = passport.authenticate("google", {
  session: false,
});

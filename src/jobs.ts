import Queue from "bull";

import { config } from "./config";
import { userSignUp } from "./modules/userSignUp";
import { userSignIn } from "./modules/userSignIn";

export const queue = new Queue("named", config.REDIS_HOST);

export const JOBS = {
  USER_SIGN_UP: "USER_SIGN_UP",
  USER_SIGN_IN: "USER_SIGN_IN",
};

export const jobs = {
  [JOBS.USER_SIGN_UP]: userSignUp,
  [JOBS.USER_SIGN_IN]: userSignIn,
};

import { queue, JOBS } from "../src/jobs";

(async () => {
  try {
    const job = await queue.add(JOBS.USER_SIGN_UP, {
      userId: "userId",
    });

    // eslint-disable-next-line
    console.log({
      job,
    });
  } catch (err) {
    console.log("err: ", err);
  }

  process.exit(0);
})();

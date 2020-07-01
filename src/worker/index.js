const CronJob = require("cron").CronJob;
const fetchGithub = require("./tasks/fetch-github");

const job = new CronJob(
  "59 * * * *",
  fetchGithub,
  null,
  true,
  "America/Los_Angeles"
);
job.start();

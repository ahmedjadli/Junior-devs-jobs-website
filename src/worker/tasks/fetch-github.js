const redis = require("redis");
const client = redis.createClient();
const axios = require("axios");
const baseURL = "https://jobs.github.com/positions.json";

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const fetchGithub = async () => {
  let allJobs = [],
    resultCount = 1,
    onPage = 0;

  //fatch all pages
  while (resultCount > 0) {
    let jobs = await axios.get(`${baseURL}?page=${onPage}`).then((res) => {
      return res.data;
    });

    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log(`got ${resultCount} jobs`);

    onPage++;
  }

  console.log(`total jobs is : ${allJobs.length}`);

  const jrJobs = allJobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();

    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("architect")
    )
      return false;
    return true;
  });

  console.log(`filtred to ${jrJobs.length}`);

  setAsync("github", JSON.stringify(jrJobs))
    .then(console.log)
    .catch(console.error);
};

fetchGithub();

module.exports = fetchGithub;

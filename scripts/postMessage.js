const axios = require("axios");
const url = require("url");
const API_URL = "https://chat.blueeast.com";

async function getRepoInfo(repositoryUrl) {
  if (repositoryUrl.startsWith("git@")) {
    repositoryUrl = `ssh://${repositoryUrl}`;
  }
  const parsedUrl = new url.URL(
    // without these replacements we will get a TypeError [ERR_INVALID_URL]
    repositoryUrl.replace(
      /\.([a-z])*:/i,
      rep => `${rep.substring(0, rep.length - 1)}/`
    )
  );
  const path = parsedUrl.pathname
    .substring(1) // remove leading "/"
    .replace(".git", "") // remove .git
    .replace(":", ""); // remove any colons from path (present in github for example)
  const URL = `https://${parsedUrl.host}/${path}`;
  return { path, URL };
}

async function success(_pluginConfig, context) {
  const {
    nextRelease,
    options,
    env: { GITHUB_ACTOR }
  } = context;

  let releaseNotes = nextRelease.notes;

  const repo = await getRepoInfo(options.repositoryUrl);

  let text = `A new version of [${repo.path}](${repo.URL}) has been released!\nCurrent version is *#${nextRelease.version}*
	Merged By: ${GITHUB_ACTOR}
	
	Release Notes:
		${releaseNotes}`;

  try {
    let response = await axios.post(`${API_URL}/api/v1/login`, {
      user: "bot-be",
      password: "Bot@Blueeast"
    });

    try {
      await axios.post(
        `${API_URL}/api/v1/chat.postMessage`,
        {
          roomId: "ifE99jvNc9BjZsg8w",
          channel: "mevris-releases-auto-updates",
          text
        },
        {
          headers: {
            "X-Auth-Token": response.data.data.authToken,
            "X-User-Id": response.data.data.userId
          }
        }
      );
    } catch (e) {
      console.log("Error while posting message => ", e.response.data);
    }
  } catch (e) {
    console.log("Error while login at Chatbot => ", e.response.data);
  }
}

module.exports = { success };

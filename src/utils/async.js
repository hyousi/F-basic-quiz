const env = "mock";
const port = env === "mock" ? "3000" : "8080";

function get(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => Promise.resolve(data));
}

function getUser(id) {
  return get(`http://localhost:${port}/users/${id}`);
}

function getEducations() {
  return get(`http://localhost:${port}/educations`);
}

export { getUser, getEducations };

const env = "mock";
const port = env === "mock" ? "3000" : "8080";

function getUser(id) {
  const url = `http://localhost:${port}/users/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => Promise.resolve(data));
}

export { getUser };

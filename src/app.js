import "./style/index.scss";
import renderHeader from "./components/Header";
import { getEducations, getUser } from "./utils/async";
import {
  renderDescSection,
  renderEducationSection,
} from "./components/Content";

async function main() {
  const root = document.getElementById("root");
  root.innerHTML = "<main class='main'></main>";

  const user = await getUser(1);
  const educations = await getEducations();

  document.getElementById("root").prepend(renderHeader(user));
  document.querySelector(".main").append(renderDescSection(user.description));
  document.querySelector(".main").append(renderEducationSection(educations));
}

// TODO: subscribe data
main();

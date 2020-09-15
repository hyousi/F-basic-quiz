import "./style/index.scss";
import renderHeader from "./components/Header";
import { getUser } from "./utils/async";

function main() {
  getUser(1).then((user) => {
    const { name, age, avatar } = user;
    const headerDOM = renderHeader(name, age, avatar);
    document.getElementById("root").append(headerDOM);
  });
}

main();

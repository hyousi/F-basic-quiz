function renderHeader(name, age, avatar) {
  const headerDOM = document.createElement("header");
  headerDOM.className = "header";

  const imageDOM = document.createElement("img");
  imageDOM.src = avatar;
  imageDOM.className = "rounded";

  const titleDOM = document.createElement("h2");
  titleDOM.innerText = `Hello, \nMy name is ${name} ${age}yo and this is my resume/cv`;

  const lineBreakDOM = document.createElement("div");
  lineBreakDOM.className = "line-break";

  headerDOM.append(imageDOM, titleDOM, lineBreakDOM);
  return headerDOM;
}

export default renderHeader;

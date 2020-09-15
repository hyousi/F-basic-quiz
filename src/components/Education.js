function renderEducation({ year, title, description }) {
  const educationDOM = document.createElement("li");
  educationDOM.className = "education";

  const yearDOM = document.createElement("p");
  yearDOM.className = "education-year";
  yearDOM.innerText = year;

  const wrapper = document.createElement("div");
  const titleDOM = document.createElement("p");
  titleDOM.className = "education-title";
  titleDOM.innerText = title;

  const descDOM = document.createElement("p");
  descDOM.className = "education-desc";
  descDOM.innerText = description;

  wrapper.append(titleDOM, descDOM);
  educationDOM.append(yearDOM, wrapper);

  return educationDOM;
}

export default renderEducation;

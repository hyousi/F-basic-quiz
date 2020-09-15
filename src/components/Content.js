import renderEducation from "./Education";

function renderSection(title) {
  const sectionDOM = document.createElement("section");
  sectionDOM.className = "section";

  const titleDOM = document.createElement("h3");
  titleDOM.className = "section-title";
  titleDOM.innerHTML = title;

  sectionDOM.append(titleDOM);
  return sectionDOM;
}

function renderDescSection(desc) {
  const descSection = renderSection("ABOUT ME");
  const descDOM = document.createElement("p");
  descDOM.innerHTML = desc;
  descSection.append(descDOM);

  return descSection;
}

function renderEducationSection(educations) {
  const educationSection = renderSection("Education");

  const educationListWrapper = document.createElement("ul");
  educations.forEach((education) => {
    const educationItem = renderEducation(education);
    educationListWrapper.append(educationItem);
  });
  educationSection.append(educationListWrapper);

  return educationSection;
}

export { renderDescSection, renderEducationSection };

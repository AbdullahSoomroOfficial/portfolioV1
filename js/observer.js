/**
 # IMPORTANT NOTE ==> DO NOT USE animate__bounceInUp or animate__fadeInUp or animate__fadeInUpBig  ANIMATION FROM ANIMATIONS.CSS LIBRARY. IF USING IntersectionObserver.
 # ANIMATIONS THAT ARE BOUNCY ARE CREATING PROBLEM WHEN USING IntersectionObserver.
 */

const skillsElements = document.querySelectorAll(".skill-item");
const projectsElements = document.querySelectorAll(".project");
const socialIconsElements = document.querySelectorAll(".social-icon");

//making an Array from NodeList to get index of elements
const skillsArray = Array.from(skillsElements);

const callbackForSkills = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (skillsArray.indexOf(entry.target) < 6) {
        entry.target.parentElement.classList.add("animate__slideInLeft");
      } else {
        entry.target.parentElement.classList.add("animate__slideInRight");
      }
      entry.target.parentElement.classList.remove("hidden");
      observerForSkills.unobserve(entry.target);
    }
  });
};

const callbackForProjects = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
      entry.target.classList.add("animate__fadeIn");
      observerForProjects.unobserve(entry.target);
    }
  });
};

const callbackForSocialIcons = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
      entry.target.classList.add("animate__wobble");
      observerForSocialIcons.unobserve(entry.target);
    }
  });
};

const options = {
  threshold: 0.4,
};

const observerForSkills = new IntersectionObserver(callbackForSkills, options);
const observerForProjects = new IntersectionObserver(
  callbackForProjects,
  options
);
const observerForSocialIcons = new IntersectionObserver(
  callbackForSocialIcons,
  options
);

// observe skills elements
skillsElements.forEach((elem) => {
  observerForSkills.observe(elem);
});
// observe projects elements
projectsElements.forEach((elem) => {
  observerForProjects.observe(elem);
});

// observe social icons elements
socialIconsElements.forEach((elem) => {
  observerForSocialIcons.observe(elem);
});

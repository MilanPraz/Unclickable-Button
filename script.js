let wrapper = document.querySelector("#wrapper");
let question = document.querySelector("#question");
let btnGroup = document.querySelector("#btn-group");
let yes = document.querySelector("#yes");
let no = document.querySelector("#no");

const wrapperRect = wrapper.getBoundingClientRect();
const nobtnRect = no.getBoundingClientRect();

yes.addEventListener("click", () => {
  question.style.opacity = 0.1;

  setTimeout(() => {
    question.style.opacity = 1;
    question.style.transition = "0.4s";
  }, 500);
  question.innerHTML = "Thank You Motu, You're So Sweet";
});

no.addEventListener("mouseenter", () => {
  console.log("btn ko width", nobtnRect.width);
  console.log("wrapper ko width", wrapperRect.width);
  const randomWidth = Math.floor(
    Math.random() * (wrapperRect.width - nobtnRect.width)
  );
  const randomHeight = Math.floor(
    Math.random() * (wrapperRect.height - nobtnRect.height)
  );

  console.log(randomWidth);
  console.log(randomHeight);
  no.style.opacity = 0.3;
  no.style.scale = 0.5;

  setTimeout(() => {
    no.style.opacity = 1;
    no.style.scale = 1;

    no.style.transition = "0.3s";

    no.style.right = `${randomWidth}px`;
    no.style.top = `${randomHeight}px`;
  }, 100);
});
no.addEventListener("click", () => {
  const randomWidth = Math.floor(
    Math.random() * (wrapperRect.width - nobtnRect.width)
  );
  const randomHeight = Math.floor(
    Math.random() * (wrapperRect.height - nobtnRect.height)
  );

  console.log(randomWidth);
  console.log(randomHeight);
  no.style.opacity = 0.3;
  no.style.scale = 0.5;

  setTimeout(() => {
    no.style.opacity = 1;
    no.style.scale = 1;

    no.style.transition = "0.3s";

    no.style.right = `${randomWidth}px`;
    no.style.top = `${randomHeight}px`;
  }, 100);
});

const url = "http://localhost:3000/recipies";
const template = document.querySelector(".job__template");
const ol = document.querySelector(".job__list");

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((recipies) => {
    updateUl(recipies);
  })
  .catch();

function updateUl(recipies) {
  console.log(recipies);

  recipies.forEach((recipie) => {
    // const { title, cookingTime } = recipie;

    const clone = template.content.cloneNode(true);

    const image = clone.querySelector("img");

    image.src = recipie.imageUrl;
    image.width = 400;

    const jobTitle = clone.querySelector(".title");
    jobTitle.textContent = recipie.title;

    const cookingtime = clone.querySelector(".cookingTime");
    cookingtime.textContent = recipie.cookingTime;

    ol.appendChild(clone);
  });
}

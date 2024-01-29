let container=document.querySelector(".container")
async function fetchPopularDish() {
    
  let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
  let result = await res.json();
  console.log(result.meals);
  result.meals.forEach((ele) => {
    let div = document.createElement("div");
    div.classList.add("foodCard");
    div.innerHTML = `
          <img src=${ele.strMealThumb} alt="">
            <div class="text">
                <h3>${ele.strMeal}</h3>
                <a href=${ele.strYoutube}>YoutubeLink</a>
            </div>
        `;
      container.appendChild(div);
      document.querySelector("span").style.display = "none";
  });
}

fetchPopularDish();
let inp = document.querySelector("input");

document.querySelector("button").addEventListener("click", async () => {
  console.log(inp.value);
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inp.value}`
  );
  let result = await res.json();
  console.log(result.meals[0]);
  let div = document.createElement("div");
  div.classList.add("searchedDish");
  div.innerHTML = `
        
    <img src=${result.meals[0].strMealThumb} alt="">
    <h1>${result.meals[0].strMeal}</h1>
    <p>${result.meals[0].strInstructions}</p>
   
        `;
    document.querySelector("h1").style.display="none"
    container.innerText = "";
    container.append(div);
});

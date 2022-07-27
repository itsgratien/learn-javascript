// document.getElementById('#');
// document.getElementByClassName();

// event
// onClick, onChange, onFocus, onKeyUp
// const fetchCountryBtn = document.getElementById("fetchCountryButton");

// const countries = ["Rwanda", "Uganda", "Kenya"];
// fetchCountryBtn.addEventListener("click", function () {
//   const ul = document.getElementById("ul");
//   const list = document.querySelectorAll("li");

//   if (list.length === countries.length) {
//     ul.innerHTML = "";
//     // return null;
//   } else {
//     countries.forEach(function (item, indexKey) {
//       // create Li element using JS
//       const li = document.createElement("li");
//       li.textContent = item;
//       ul.appendChild(li);
//     });
//   }
// });

// const clearBtn = document.getElementById("clearButton");

// clearBtn.addEventListener("click", function () {
//   //
//   const list = document.querySelectorAll("li");
//   const ul = document.getElementById("ul");
//   if (list.length > 0) {
//     ul.innerHTML = "";
//   }
// });

const fetchBtn = document.querySelector("button");

async function handleGetCountries() {
  try {
    const get = await fetch("https://restcountries.com/v2/all");
    const data = await get.json();

    if (data.length > 0) {
      const select = document.querySelector("select");

      data.forEach((item) => {
        const option = document.createElement("option");
        option.setAttribute("value", item.name);
        option.textContent = item.name;
        select.appendChild(option);
      });
    }
  } catch (error) {}
}
fetchBtn.addEventListener("click", handleGetCountries);

handleGetCountries();

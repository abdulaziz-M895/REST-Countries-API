/**
 * Fetches data from the JSON file and initializes the application.
 */
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    populateDataList(data);
    createCountryCards(data);
    filterByRegion();
    searchByName();
    countryDetails();
  });

/**
 * Populates the datalist with country names for the search functionality.
 * @param {Array} data - Array of country objects.
 */
function populateDataList(data) {
  const datalist = document.querySelector(".search_name datalist");
  data.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.name;
    datalist.appendChild(option);
  });
}

/**
 * Formats the population number with commas every three digits.
 * @param {number} population - The population number to format.
 * @returns {string} - Formatted population string.
 */
function formatPopulation(population) {
  let populationArray = Array.from(population.toString());
  for (let j = populationArray.length - 3; j > 0; j -= 3) {
    populationArray.splice(j, 0, ",");
  }
  return populationArray.join("");
}

/**
 * Creates country cards and appends them to the container.
 * @param {Array} data - Array of country objects.
 */
function createCountryCards(data) {
  const container = document.querySelector(".countries .container");

  data.forEach((country) => {
    const population = formatPopulation(country.population);

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.name = country.name;
    card.dataset.nativeName = country.nativeName;
    card.dataset.region = country.region;
    card.dataset.subregion = country.subregion;
    card.dataset.flag = country.flag;
    card.dataset.population = population;
    card.dataset.capital = country.capital;
    card.dataset.topLevelDomain = country.topLevelDomain[0];
    card.dataset.currencies = JSON.stringify(country.currencies);
    card.dataset.languages = JSON.stringify(country.languages);
    card.dataset.borders = JSON.stringify(country.borders);

    card.innerHTML = `
      <img src="${country.flag}" alt="${country.name}'s flag">
      <div class="content">
        <h2 class="country_name">${country.name}</h2>
        <ul class="details">
          <li class="population">Population: <span>${population}</span></li>
          <li class="region">Region: <span>${country.region}</span></li>
          <li class="capital">Capital: <span>${country.capital}</span></li>
        </ul>
      </div>`;

    container.append(card);
  });
}

/**
 * Filters country cards by region.
 */
function filterByRegion() {
  const regions = document.querySelectorAll(".region_list .region");
  const cards = document.querySelectorAll(".card");

  regions.forEach((region) => {
    region.addEventListener("click", function () {
      cards.forEach((card) => {
        if (
          region.dataset.region === "All" ||
          card.dataset.region === region.dataset.region
        ) {
          card.classList.remove("d-none");
        } else {
          card.classList.add("d-none");
        }
      });
    });
  });
}

/**
 * Filters country cards by name based on user input.
 */
function searchByName() {
  const inputName = document.getElementById("name");
  const cards = document.querySelectorAll(".card");

  inputName.addEventListener("input", () => {
    const inputValue = inputName.value.toLowerCase();

    cards.forEach((card) => {
      const countryName = card
        .querySelector(".country_name")
        .textContent.toLowerCase();
      if (countryName.includes(inputValue)) {
        card.classList.remove("d-none");
      } else {
        card.classList.add("d-none");
      }
    });
  });
}

/**
 * Displays detailed information about a country when its card is clicked.
 */
function countryDetails() {
  const cards = document.querySelectorAll(".card");
  const main = document.querySelector("main");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.dataset.name;
      const nativeName = card.dataset.nativeName;
      const region = card.dataset.region;
      const subregion = card.dataset.subregion;
      const flag = card.dataset.flag;
      const population = card.dataset.population;
      const capital = card.dataset.capital;
      const topLevelDomain = card.dataset.topLevelDomain;
      let currencies = undefined;
      let languages = undefined;
      let borders = undefined;
      if (card.dataset.currencies !== "undefined") {
        currencies = JSON.parse(card.dataset.currencies);
      }
      if (card.dataset.languages !== "undefined") {
        languages = JSON.parse(card.dataset.languages);
      }
      if (card.dataset.borders !== "undefined") {
        borders = JSON.parse(card.dataset.borders);
      }

      const article = document.createElement("article");
      article.classList.add("card", "details");
      article.innerHTML = `
      <div class="container">
        <button class="back">
          <i class="fa-solid fa-arrow-left-long"></i>
          Back
        </button>
        <img src="${flag}" alt="${name}'s flag" />
        <div class="content">
          <h2 class="country_name">${name}</h2>
          <div class="details-con">
            <ul class="details">
              <li>Native Name: <span>${nativeName}</span></li>
              <li>Population: <span>${population}</span></li>
              <li>Region: <span>${region}</span></li>
              <li>Sub Region: <span>${subregion}</span></li>
              <li>Capital: <span>${capital}</span></li>
            </ul>
            <ul class="details">
              <li>Top Level Domain: <span>${topLevelDomain}</span></li>
              <li class="currencies">Currencies: <span></span></li>
              <li class="languages">Languages: <span></span></li>
            </ul>
          </div>
          <h3 class="borders">Border Countries: </h3>
        </div>
      </div>
    `;

      main.classList.add("d-none");
      main.after(article);

      let currenciesSpan = document.querySelector(".currencies span");
      for (let i = 0; i < currencies.length; i++) {
        let currName = currencies[i].name;
        if (i < currencies.length - 1) {
          currName = currencies[i].name + ", ";
        }
        currenciesSpan.innerHTML += currName;
      }

      let languagesSpan = document.querySelector(".languages span");
      for (let i = 0; i < languages.length; i++) {
        let lanName = languages[i].name;
        if (i < languages.length - 1) {
          lanName = languages[i].name + ", ";
        }
        languagesSpan.innerHTML += lanName;
      }

      if (borders) {
        let bordersH = document.querySelector("h3.borders");
        for (let i = 0; i < borders.length; i++) {
          const borderName = borders[i];
          const borderSpan = document.createElement("span");
          borderSpan.innerHTML = borderName;
          bordersH.append(borderSpan);
        }
      }

      document.querySelector(".back").addEventListener("click", () => {
        article.remove();
        main.classList.remove("d-none");
      });
    });
  });
}

// Toggle the show-filter class when clicking the .filter element
document.querySelector(".filter").addEventListener("click", (e) => {
  const regionList = document.querySelector(".region_list");
  const icon = document.querySelector(".filter i");
  regionList.classList.toggle("show-filter");
  icon.classList.toggle("rotate");
  e.stopPropagation(); // Prevent event from bubbling up to the document
});

// Remove the show-filter class when clicking outside the .region_list
document.documentElement.addEventListener("click", (e) => {
  const regionList = document.querySelector(".region_list");
  const regions = document.querySelectorAll(".region_list .region");
  const icon = document.querySelector(".filter i");

  let clickInsideRegion = Array.from(regions).some(
    (region) => e.target === region
  );
  let clickInsideRegionList =
    e.target === regionList || regionList.contains(e.target);

  if (
    !clickInsideRegion &&
    !clickInsideRegionList &&
    !e.target.matches(".filter")
  ) {
    regionList.classList.remove("show-filter");
    icon.classList.remove("rotate");
  }
});

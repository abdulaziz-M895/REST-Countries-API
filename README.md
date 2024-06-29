# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./design/desktop-preview.jpg)

## Features

- **Search by Name**: Search for countries by their name using an input field.
- **Filter by Region**: Filter countries by different regions (Africa, Americas, Asia, Europe, Oceania).
- **Country Details**: View detailed information about a selected country, including its native name, population, region, sub-region, capital, top-level domain, currencies, languages, and border countries.

## How to Use

1. **Search by Name**: Type a country's name into the search input field to filter the list of countries.
2. **Filter by Region**: Click on a region in the region filter list to display only countries from that region.
3. **View Country Details**: Click on a country card to view detailed information about that country. Click the "Back" button to return to the main list.

## File Structure

- `index.html` - The main HTML file containing the structure of the application.
- `style.css` - The CSS file for styling the application.
- `script.js` - The JavaScript file containing the logic for fetching data, searching, filtering, and displaying country details.
- `data.json` - A JSON file containing country data.

## JavaScript Functions

### fetchCountryData

Fetches data from the `data.json` file and initializes the application.

### populateDataList

Populates the datalist with country names for the search functionality.

### formatPopulation

Formats the population number with commas every three digits.

### createCountryCards

Creates country cards and appends them to the container.

### filterByRegion

Filters country cards by region.

### searchByName

Filters country cards by name based on user input.

### countryDetails

Displays detailed information about a country when its card is clicked.

## Event Listeners

### Filter Toggle

Toggles the visibility of the region filter list when clicking the filter button.

### Click Outside Filter

Removes the visibility of the region filter list when clicking outside the list.

## Acknowledgments

- Country data provided by `data.json`.
- Icons by Font Awesome.

## Contact

If you have any questions or suggestions, please feel free to reach out.

Enjoy exploring the countries!

### Links

- Solution URL: [Take a look](https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-yvqwD3nfKh)
- Live Site URL: [Take a look](https://abdulaziz-m895.github.io/REST-Countries-API/)

## Author

- Website - [Abdulaziz Omran](https://abdulaziz-m895.github.io/Portfolio/)
- Frontend Mentor - [@abdulaziz-M895](https://www.frontendmentor.io/profile/abdulaziz-M895)
- LinkedIn - [@abdulaziz-omran](https://www.linkedin.com/in/abdulaziz-omran/)

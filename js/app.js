//variables
const brand = document.querySelector("#brand");
const year = document.querySelector("#year");
const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");
const result = document.querySelector("#result");

const max = new Date().getFullYear();
const min = max - 10;

const filteredData = {
  brand: "",
  year: "",
  minPrice: "",
  maxPrice: "",
  doors: "",
  transmission: "",
  color: "",
};

//eventos
document.addEventListener("DOMContentLoaded", () => {
  showCars(cars);

  setYears();
});

brand.addEventListener("change", (e) => {
  filteredData.brand = e.target.value;

  filterCar();
});

year.addEventListener("change", (e) => {
  filteredData.year = parseInt(e.target.value);

  filterCar();
});

minPrice.addEventListener("change", (e) => {
  filteredData.minPrice = e.target.value;

  filterCar();
});

maxPrice.addEventListener("change", (e) => {
  filteredData.maxPrice = e.target.value;

  filterCar();
});

doors.addEventListener("change", (e) => {
  filteredData.doors = parseInt(e.target.value);

  filterCar();
});

transmission.addEventListener("change", (e) => {
  filteredData.transmission = e.target.value;

  filterCar();
});

color.addEventListener("change", (e) => {
  filteredData.color = e.target.value;

  filterCar();
});
//funciones
function showCars(cars) {
  cleanHTML();

  cars.forEach((car) => {
    const { brand, model, year, doors, transmission, price, color } = car;
    const carHTML = document.createElement("p");

    carHTML.textContent = `
            ${brand} ${model} - ${year} - ${doors} Puertas - Transmisión: ${transmission} - Precio: ${price} - Color: ${color} 
        `;

    result.appendChild(carHTML);
  });
}

function cleanHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function setYears() {
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
}

function filterCar() {
  const result = cars
    .filter(filterBrand)
    .filter(filterYear)
    .filter(filterMinPrice)
    .filter(filterMaxPrice)
    .filter(filterDoors)
    .filter(filterTransmission)
    .filter(filterColor);

  cleanHTML();

  if (result.length) {
    showCars(result);
  } else {
    noResult();
  }
}

function noResult() {
  const noResult = document.createElement("div");
  noResult.classList.add("alert", "error");
  noResult.textContent =
    "No hay resultados, Intenta con otros  términos de búsqueda";
  result.appendChild(noResult);
}

function filterBrand(car) {
  const { brand } = filteredData;
  if (brand) {
    return car.brand === brand;
  }
  return car;
}

function filterYear(car) {
  const { year } = filteredData;
  if (year) {
    return car.year === year;
  }
  return car;
}

function filterMinPrice(car) {
  const { minPrice } = filteredData;
  if (minPrice) {
    return car.price >= minPrice;
  }
  return car;
}

function filterMaxPrice(car) {
  const { maxPrice } = filteredData;
  if (maxPrice) {
    return car.price <= maxPrice;
  }
  return car;
}

function filterDoors(car) {
  const { doors } = filteredData;
  if (doors) {
    return car.doors === doors;
  }
  return car;
}

function filterTransmission(car) {
  const { transmission } = filteredData;
  if (filteredData.transmission) {
    return car.transmission === transmission;
  }
  return car;
}

function filterColor(car) {
  const { color } = filteredData;
  if (color) {
    return car.color === color;
  }
  return car;
}

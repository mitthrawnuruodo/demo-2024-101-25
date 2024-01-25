const out = document.querySelector('ul#restaurants');

fetch("restaurants.json")
.then(response => response.json())
.then(data => listRestaurants(data.restaurants))
.catch(error => console.error("Something's wrong..."));

function listRestaurants (list) {
    //console.log(list);
    out.innerHTML = ""; // Empty list, just in case
    for (let restaurant of list) {
        //console.log(restaurant);
        let myNewLi = restaurantTemplate(restaurant);
        out.innerHTML += myNewLi;
    }
}

function restaurantTemplate (restaurant) {
    console.log(restaurant);
    return `
    <li>
        <strong>${restaurant.name}</strong>${
           (restaurant.branch)?` (${restaurant.branch})`:``
        }${
           (restaurant.url)?` <a href="${restaurant.url}">Link</a>`:``
        }        
    </li>`;
}
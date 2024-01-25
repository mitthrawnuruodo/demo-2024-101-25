const bigCats = {
    "felidae": [
        { "name": "Tiger", "latin": "Panthera tigris", "location": "Asia", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Tiger"},
        { "name": "Lion", "latin": "Panthera leo", "location": "(Sub-Saharan Africa, Gir Forest in India", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Lion"},
        { "name": "Jaguar", "latin": "Panthera onca", "location": "The Americas", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Jaguar"},
        { "name": "Leopard", "latin": "Panthera pardus", "location": "Asia, Africa", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Leopard"},
        { "name": "Snow leopard", "latin": "Panthera uncia", "location": "Mountains of Central and South Asia", "genus": "Panthera", "url": "https://en.wikipedia.org/wiki/Snow_leopard"},
        { "name": "Cheetah", "latin": "Acinonyx jubatus", "location": "Sub-Saharan Africa and Iran", "genus": "Acinonyx", "url": "https://en.wikipedia.org/wiki/Cheetah"},
        { "name": "Cougar", "latin": "Puma concolor", "location": "North and South America", "genus": "Puma", "url": "https://en.wikipedia.org/wiki/Cougar"}
    ]
};

//console.log(bigCats.felidae);

let listCats = (cats) => {
    //console.log(cats);
    let out = document.querySelector('ul#cats');
    out.innerHTML = "";
    if (cats.length === 0) {
      out.innerHTML = `<li>No cats in this selection</li>`;    
    } else {
      for (let cat of cats) {
        out.innerHTML += `<li><a href="${cat.url}" target="_blank">${cat.name}</a></li>`;
      } 
    }
}

listCats(bigCats.felidae);

const panthera = document.querySelector("input#panthera");
const puma = document.querySelector("input#puma");
const acinonyx = document.querySelector("input#acinonyx");

let filterAndRelist = () => {
    //console.log("Noe har skjedd...");
    let filterArray = [];
    if (panthera.checked) filterArray.push("panthera");
    if (puma.checked) filterArray.push("puma");
    if (acinonyx.checked) filterArray.push("acinonyx");
    console.log(filterArray);

    let filteredCats = bigCats.felidae.filter((cat) => {
        // Filter the big cat list with only those cats 
        // whose genus is found in the filterArray-list.
        return filterArray.includes(cat.genus.toLowerCase());
    });  

    listCats(filteredCats);
}

panthera.addEventListener('change', filterAndRelist);
puma.addEventListener('change', filterAndRelist);
acinonyx.addEventListener('change', filterAndRelist);

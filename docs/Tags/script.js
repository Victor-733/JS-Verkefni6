let imagesArray = [ // myndirnar og töggin þeirra
    {
        name: "Bob Ross",
        src: "img/bobRoss.jpg",
        tags: ["man", "nature"]
    },
    {
        name: "Boss Baby",
        src: "img/bossBaby.jpg",
        tags: ["child", "intelligent"]
    },
    {
        name: "Brummi",
        src: "img/brummi.jpg",
        tags: ["veichle"]
    },
    {
        name: "Car",
        src: "img/car.jpg",
        tags: ["veichle", "man"]
    },
    {
        name: "Catgirl",
        src: "img/catgirl.jpg",
        tags: ["woman"]
    },
    {
        name: "Corvax",
        src: "img/corvax.jpg",
        tags: ["man", "intelligent"]
    },
    {
        name: "Polnareff",
        src: "img/polnareff.jpg",
        tags: ["child"]
    },
    {
        name: "Trap",
        src: "img/trap.jpg",
        tags: ["man"]
    }
];

const gallery = document.getElementById("images");
const tags = document.getElementById("tags");

let tagsArray = [];

imagesArray.forEach(function(image) { // búa til mynd og setja hana í gallery
    const img = new Image();
    img.src = image.src;
    image.element = img;
    gallery.appendChild(img);
    // fara yfir tögin og athuga hvort að töggin séu í því og bæta því við listan ef ekki
    image.tags.forEach(function(tag) {
        if (!tagsArray.includes(tag)){
            tagsArray.push(tag);
        }
    });
});

function update(tagName) {
    imagesArray.forEach(function(image) {
        if (image.tags.includes(tagName) || tagName === undefined) {
            image.element.removeAttribute("hidden");
        } else {
            image.element.setAttribute("hidden", "");
        }
    });
}

function clicked(activeButton) { // fall sem að breytir útlitinu á takkanum þegar ýtt er á hann
    nav.childNodes.forEach(function(button) {
        button.classList.remove("active");
    });
    activeButton.classList.add("active");
}

const nav = document.getElementById("tags");

// show all
const showAllButton = document.createElement("button");
showAllButton.textContent = "Show All";
showAllButton.addEventListener("click", function(e) {
    clicked(showAllButton);
    update();
});
nav.appendChild(showAllButton);

tagsArray.forEach(function(tag) { // fall sem að býr til takkana og setur í nav í hmtl
    const button = document.createElement("button");
    button.textContent = tag;
    nav.appendChild(button);

    // bý til event listener sem að er með callback á update fallið sem keyrir með tag-nafninu sem var ýtt á
    button.addEventListener("click", function(e) {
        clicked(button);
        update(tag);
    })
});

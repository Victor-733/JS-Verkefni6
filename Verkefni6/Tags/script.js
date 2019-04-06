let imagesArray = [ // the images and the tags attached
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

imagesArray.forEach(function(image) { // make the image and append it to the gallery
    const img = new Image();
    img.src = image.src;
    image.element = img;
    gallery.appendChild(img);
    // check the tags and add them to a list for a complete tag list
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

const nav = document.getElementById("tags");

// show all
const showAllButton = document.createElement("button");
showAllButton.textContent = "Show All";
showAllButton.addEventListener("click", function() { update(); });
nav.appendChild(showAllButton);

tagsArray.forEach(function(tag) { // fall sem að býr til takkana og setur í nav í hmtl
    const button = document.createElement("button");
    button.textContent = tag;
    nav.appendChild(button);

    // bý til event listener sem að er með callback á update fallið sem keyrir með tag-nafninu sem var ýtt á
    button.addEventListener("click", function() { update(tag); })
});

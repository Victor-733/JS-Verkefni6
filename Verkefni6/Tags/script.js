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

let tagsArray = ["Show All"];

imagesArray.forEach(function(image) { // make the image and append it to the gallery
    const img = new Image();
    img.src = image.src;
    gallery.appendChild(img);
    // check the tags and add them to a list for a complete tag list
    image.tags.forEach(function(tag) {
        if (!tagsArray.includes(tag)){
            tagsArray.push(tag);
        }
    });
});

tagsArray.forEach(function(tag) { // fall sem að býr til takkana og setur í nav í hmtl
    button = document.createElement("button");
    nav = document.getElementById("tags");
    button.textContent = tag;
    nav.appendChild(button);

    let buttons = document.querySelector("button");// bý til event listener sem að er með callback á update fallið sem keyrir með tagnafninu sem var ýtt á
    buttons.children().forEach(button); {
        buttons.addEventListener("click", function() { update(tag) });
    }

    function update(tagName) {
        if(image.tags.includes(tagName)){
            image.removeAttribute("hidden");
        } else {
            image.setAttribute("hidden", "");
        }
    }
});


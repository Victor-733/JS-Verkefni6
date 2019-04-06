let people = [
    {                                              
        name: 'Konni',                               
        skor: 21,
    },
    {
        name: 'Sponni',
        skor: 24,
    },
    {
        name: 'Lonni',
        skor: 44,
    },
    {
        name: 'Monni',
        skor: 12,
    },
    {
        name: 'Superman',
        skor: 99,
    }
];

let rows = [];
let min = document.getElementById('value-min'); // getElementById(), ekki $('#id')
let max = document.getElementById('value-max');
let list = document.getElementById('container');

function makeRows() {
    people.forEach(function(person) {
        let row = document.createElement('li');
        let rowName = document.createElement('td'); // createElement(), ekki $('<tr></tr>')
        let rowskor = document.createElement('td');
        rowName.textContent = person.name; // textContent, ekki .text
        rowskor.textContent = person.skor;
        row.appendChild(rowName); // appendChild() herna, ekki row.append()
        row.appendChild(rowskor);

        rows.push({ // bæti öllu í row
            person: person,
            element: row
        })
    });
}

function appendRows() {
    let ul = document.createElement('ul');
    rows.forEach(function(row) {
        ul.appendChild(row.element);
    });
    list.appendChild(ul);
}

function update(min, max) {
    rows.forEach(function(row) {
        if (row.person.skor >= min && row.person.skor <= max) {
        row.element.removeAttribute("hidden");
        } else {
        row.element.setAttribute("hidden", "");
        }
    });
}

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 60],
    handles: 2,
    connect: true,
    range: {
        'min': 0,
        'max': 100
    },
    format: {
        to: function(value){return Math.floor(value);},
        from: function(value){return value;}
    },
    margin: 10
});

slider.noUiSlider.on("update", function() {
    const values = slider.noUiSlider.get();
    min.value = values[0];
    max.value = values[1];
    update(min.value, max.value);
});

makeRows();

appendRows();
update(min.value, max.value);

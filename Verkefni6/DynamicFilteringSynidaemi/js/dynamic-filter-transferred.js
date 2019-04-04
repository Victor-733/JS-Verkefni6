(function() {
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
    // breytti í getElementById()
    let rows = [];
    let min = document.getElementById('value-min'); // getElementById(), ekki $('#id')
    let max = document.getElementById('value-max');           
    let list = document.getElementById('container'); 

    function makeRows() {
        people.forEach(function(person) {
            let row = document.createElement('tr');
            let rowName = document.createElement('td'); // createElement(), ekki $('<tr></tr>')
            let rowskor = document.createElement('td');
            rowName.textContent = person.name; // textContent, ekki .text
            rowskor.textContent = person.skor;
            row.appendChild(rowName); // appendChild() herna, ekki row.append()
            row.appendChild(rowskor);

            rows.push({ // bæti ölli í row
                person: person,
                element: row
            })
        });

        console.log(rows);
    }

    function appendRows() {
        let tbody = document.createElement("tbody");
        rows.forEach(function(row) {
            tbody.appendChild(row.element);
        });
        table.appendChild(tbody);
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

    function init() {
        $('#slider').noUiSlider({ // þetta þarf að vera jQuery
            range: [0, 150], 
            start: [10, 30],
            handles: 2,
            margin: 20,
            connect: true,
            serialization: {to: [$(min), $(max)], resolution: 1} // min og max þaf að vera jQuery hérna
        }).change(function() {update(min.value, max.value); });

        makeRows();


        appendRows();
        update(min.value, max.value);
    }

    init();
}());
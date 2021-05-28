var podaci = [{
    "ime" : "Ulična utrka Bakua",
    "prvautrka" : "2016",
    "brojkrugova" : "51",
    "duljinastaze" : "6.003km",
    "duljinautrke" : "306.049km",
    "najbrzikrug" : "1:43.009-Charles Leclerc (2019)"
},
]

tablica(podaci)

function tablica(data) {
    var table = document.getElementById('Table')

    for(var i = 0; i < data.length; i++) {
        var row = 
        `<tr>
            <td>${data[i].ime}</td>
            <td>${data[i].prvautrka}</td>
        </tr>`
        table.innerHTML += row
    }
}

tablica2(podaci)

function tablica2(data) {
    var table = document.getElementById('Table2')

    for(var i = 0; i < data.length; i++) {
        var row = 
        `<tr>
            <td>${data[i].brojkrugova}</td>
            <td>${data[i].duljinastaze}</td>
        </tr>`
        table.innerHTML += row
    }
}  

tablica3(podaci)

function tablica3(data) {
    var table = document.getElementById('Table3')

    for(var i = 0; i < data.length; i++) {
        var row = 
        `<tr>
            <td>${data[i].duljinautrke}</td>
            <td>${data[i].najbrzikrug}</td>
        </tr>`
        table.innerHTML += row
    }
}  

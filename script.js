var map = L.map('map').setView([-23.70,-46.40],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map);

fetch("data/dados.json")
.then(res => res.json())
.then(data => {

data.forEach(p => {

L.marker([p.lat,p.lng])
.addTo(map)
.bindPopup(
"<b>"+p.tipo+"</b><br>"+p.tamanho
);

});

});
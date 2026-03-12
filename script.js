var map = L.map('map').setView([-23.70,-46.40],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map);

L.marker([-23.688879,-46.435607])
.addTo(map)
.bindPopup("Boca de Leão");

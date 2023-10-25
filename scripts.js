var map = L.map('map').setView([39.85530262565797, -100.15385919146922], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var taylorIcon1 = L.icon({
    iconUrl: 'images/taylorIcon1.png',

    iconSize:     [100, 100],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});
var taylorIcon2 = L.icon({
    iconUrl: 'images/taylorIcon2.png',

    iconSize:     [100, 100],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});
var taylorIcon3 = L.icon({
    iconUrl: 'images/taylorIcon3.png',

    iconSize:     [100, 100],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});
var taylorIcon4 = L.icon({
    iconUrl: 'images/taylorIcon4.png',

    iconSize:     [100, 100],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});

// Chicago IL
var markerChi = L.marker([41.87827194644949, -87.63153938135392], {icon: taylorIcon1}).addTo(map);
markerChi.bindPopup("<b>Chicago, IL</b><br><img src='images/taylorswiftchicago.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: Soldier Field</li><li><b>Attendance</b>: 200,000</li></ul>").openPopup();
// Glendale AZ
var markerGlen = L.marker([33.549531782747, -112.18720820327023], {icon: taylorIcon2}).addTo(map);
markerGlen.bindPopup("<b>Glendale, AZ</b><br><img src='images/glendale.jpg' width='200px' height='150px'><br><ul><li><b>Venue</b>: State Farm Stadium</li><li><b>Attendance</b>: 146,000</li></ul>").openPopup();
// Las Vegas NV
var markerLas = L.marker([36.17312485044287, -115.13793603599639], {icon: taylorIcon3}).addTo(map);
markerLas.bindPopup("<b>Las Vegas, NV</b><br><img src='images/lasvegas.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: Allegiant Stadium</li><li><b>Attendance</b>: 138,000</li></ul>").openPopup();
// Arlington TX
var markerArl = L.marker([32.73639702784739, -97.10796271078786], {icon: taylorIcon4}).addTo(map);
markerArl.bindPopup("<b>Arlington, TX</b><br><img src='images/arlington.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: AT&T Stadium</li><li><b>Attendance</b>: 210,607</li></ul>").openPopup();
// Tampa FL
var markerTam = L.marker([27.945869138703575, -82.45498329070419], {icon: taylorIcon1}).addTo(map);
markerTam.bindPopup("<b>Tampa, FL</b><br><img src='images/tampa.jpg' width='200px' height='150px'><br><ul><li><b>Venue</b>: Raymond James Stadium</li><li><b>Attendance</b>: 206,459</li></ul>").openPopup();
// Houston TX
var markerHou = L.marker([29.759560844395132, -95.37388959889316], {icon: taylorIcon2}).addTo(map);
markerHou.bindPopup("<b>Houston, TX</b><br><img src='images/houston.jpg' width='200px' height='150px'><br><ul><li><b>Venue</b>: NRG Stadium</li><li><b>Attendance</b>: 188,070</li></ul>").openPopup();
// Atlanta GA
var markerAtl = L.marker([33.74899013737837, -84.38924680634196], {icon: taylorIcon3}).addTo(map);
markerAtl.bindPopup("<b>Atlanta, GA</b><br><img src='images/atlanta.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: Mercedes-Benz Stadium</li><li><b>Attendance</b>: 196,107</li></ul>").openPopup();
// Nashville TN
var markerNas = L.marker([36.16734386014169, -86.77981177659514], {icon: taylorIcon4}).addTo(map);
markerNas.bindPopup("<b>Nashville, TN</b><br><img src='images/nashville.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: Nissan Stadium</li><li><b>Attendance</b>: 212,000</li></ul>").openPopup();
// Philadelphia PA
var markerPhi = L.marker([39.95209338362733, -75.15725988169734], {icon: taylorIcon1}).addTo(map);
markerPhi.bindPopup("<b>Philadelphia, PA</b><br><img src='images/philadelphia.avif' width='200px' height='150px'><br><ul><li><b>Venue</b>: Lincoln Financial Field</li><li><b>Attendance</b>: 203,436</li></ul>").openPopup();
// Foxborough MA
var markerFox = L.marker([42.06585406082266, -71.24861215303103], {icon: taylorIcon2}).addTo(map);
markerFox.bindPopup("<b>Foxborough, MA</b><br><img src='images/foxborough.jpg' width='200px' height='150px'><br><ul><li><b>Venue</b>: Gillette Stadium</li><li><b>Attendance</b>: 200,000</li></ul>").openPopup();
// East Rutherford NJ
var markerEas = L.marker([40.835422259011565, -74.09784174088597], {icon: taylorIcon3}).addTo(map);
markerEas.bindPopup("<b>East Rutherford, NJ</b><br><img src='images/eastrutherford.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: MetLife Stadium</li><li><b>Attendance</b>: 217,625</li></ul>").openPopup();
// Detroit MI
var markerDet = L.marker([42.33229213453565, -83.0504668548479], {icon: taylorIcon4}).addTo(map);
markerDet.bindPopup("<b>Detroit, MI</b><br><img src='images/detroit.jpg' width='200px' height='150px'><br><ul><li><b>Venue</b>: Ford Field</li><li><b>Attendance</b>: 118,661</li></ul>").openPopup();
// Pittsburgh PA
var markerPit = L.marker([40.4429698830244, -79.99638553090548], {icon: taylorIcon1}).addTo(map);
markerPit.bindPopup("<b>Pittsburgh, PA</b><br><img src='images/pittsburgh.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: Acrisure Stadium</li><li><b>Attendance</b>: 400,000</li></ul>").openPopup();
// Minneapolis MN
var markerMin = L.marker([44.97722503593291, -93.26285508742433], {icon: taylorIcon2}).addTo(map);
markerMin.bindPopup("<b>Minneapolis, MN</b><br><img src='images/minneapolis.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: U.S. Bank Stadium</li><li><b>Attendance</b>: 120,000</li></ul>").openPopup();
// Cincinnati OH
var markerCin = L.marker([39.103195405002495, -84.49784375963156], {icon: taylorIcon3}).addTo(map);
markerCin.bindPopup("<b>Cincinnati, OH</b><br><img src='images/cincinnati.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: Paycor Stadium</li><li><b>Attendance</b>: 130,000</li></ul>").openPopup();
// Kansas City MO
var markerKan = L.marker([39.10424422716427, -94.57440339424308], {icon: taylorIcon4}).addTo(map);
markerKan.bindPopup("<b>Kansas City, MO</b><br><img src='images/kansascity.jpg' width='200px' height='150px'><br><ul><li><b>Venue</b>: GEHA Field at Arrowhead Stadium</li><li><b>Attendance</b>: 105,000</li></ul>").openPopup();
// Denver CO
var markerDen = L.marker([39.738354746370874, -104.98627494787459], {icon: taylorIcon1}).addTo(map);
markerDen.bindPopup("<b>Denver, CO</b><br><img src='images/denver.jpg' width='200px' height='150px'><br><ul><li><b>Venue</b>: Empower Field at Mile High</li><li><b>Attendance</b>: 70,000</li></ul>").openPopup();
// Seattle WA
var markerSea = L.marker([47.6056756868278, -122.33459262072664], {icon: taylorIcon2}).addTo(map);
markerSea.bindPopup("<b>Seattle, WA</b><br><img src='images/seattle.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: Lumen Field</li><li><b>Attendance</b>: 72,171</li></ul>").openPopup();
// Santa Clara CA
var markerSan = L.marker([37.3538766402237, -121.95576126369147], {icon: taylorIcon3}).addTo(map);
markerSan.bindPopup("<b>Santa Clara, CA</b><br><img src='images/santaclara.jpg' width='200px' height='150px'><br><ul><li><b>Venue</b>: Levi's Stadium</li><li><b>Attendance</b>: 60,000</li></ul>").openPopup();
// Los Angeles CA
var markerLos = L.marker([34.05304191543873, -118.24837197643518], {icon: taylorIcon4}).addTo(map);
markerLos.bindPopup("<b>Los Angeles, CA</b><br><img src='images/losangeles.webp' width='200px' height='150px'><br><ul><li><b>Venue</b>: SoFi Stadium</li><li><b>Attendance</b>: 70,240</li></ul>").openPopup();

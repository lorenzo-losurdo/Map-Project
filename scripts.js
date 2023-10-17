var map = L.map('map').setView([39.85530262565797, -100.15385919146922], 4); // Latitude, Longitude, and Zoom Level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Chicago IL
var markerChi = L.marker([41.87827194644949, -87.63153938135392]).addTo(map);
markerChi.bindPopup("<b>Chicago, IL</b><br><img src='images/taylorswiftchicago.webp' width='200px' height='150px'><br><ul><li>Soldier Field</li><li>Huge Crowd</li></ul>").openPopup();
// Glendale AZ
var markerGlen = L.marker([33.549531782747, -112.18720820327023]).addTo(map);
markerGlen.bindPopup("<b>Glendale, AZ</b><br>I am a popup.").openPopup();
// Las Vegas NV
var markerLas = L.marker([36.17312485044287, -115.13793603599639]).addTo(map);
markerLas.bindPopup("<b>Las Vegas, NV</b><br>I am a popup.").openPopup();
// Arlington TX
var markerArl = L.marker([32.73639702784739, -97.10796271078786]).addTo(map);
markerArl.bindPopup("<b>Arlington, TX</b><br>I am a popup.").openPopup();
// Tampa FL
var markerTam = L.marker([27.945869138703575, -82.45498329070419]).addTo(map);
markerTam.bindPopup("<b>Tampa, FL</b><br>I am a popup.").openPopup();
// Houston TX
var markerHou = L.marker([29.759560844395132, -95.37388959889316]).addTo(map);
markerHou.bindPopup("<b>Houston, TX</b><br>I am a popup.").openPopup();
// Atlanta GA
var markerAtl = L.marker([33.74899013737837, -84.38924680634196]).addTo(map);
markerAtl.bindPopup("<b>Atlanta, GA</b><br>I am a popup.").openPopup();
// Nashville TN
var markerNas = L.marker([36.16734386014169, -86.77981177659514]).addTo(map);
markerNas.bindPopup("<b>Nashville, TN</b><br>I am a popup.").openPopup();
// Philadelphia PA
var markerPhi = L.marker([39.95209338362733, -75.15725988169734]).addTo(map);
markerPhi.bindPopup("<b>Philadelphia, PA</b><br>I am a popup.").openPopup();
// Foxborough MA
var markerFox = L.marker([42.06585406082266, -71.24861215303103]).addTo(map);
markerFox.bindPopup("<b>Foxborough, MA</b><br>I am a popup.").openPopup();
// East Rutherford NJ
var markerEas = L.marker([40.835422259011565, -74.09784174088597]).addTo(map);
markerEas.bindPopup("<b>East Rutherford, NJ</b><br>I am a popup.").openPopup();
// Detroit MI
var markerDet = L.marker([42.33229213453565, -83.0504668548479]).addTo(map);
markerDet.bindPopup("<b>Detroit, MI</b><br>I am a popup.").openPopup();
// Pittsburgh PA
var markerPit = L.marker([40.4429698830244, -79.99638553090548]).addTo(map);
markerPit.bindPopup("<b>Pittsburgh, PA</b><br>I am a popup.").openPopup();
// Minneapolis MN
var markerMin = L.marker([44.97722503593291, -93.26285508742433]).addTo(map);
markerMin.bindPopup("<b>Minneapolis, MN</b><br>I am a popup.").openPopup();
// Cincinnati OH
var markerCin = L.marker([39.103195405002495, -84.49784375963156]).addTo(map);
markerCin.bindPopup("<b>Cincinnati, OH</b><br>I am a popup.").openPopup();
// Kansas City MO
var markerKan = L.marker([39.10424422716427, -94.57440339424308]).addTo(map);
markerKan.bindPopup("<b>Kansas City, MO</b><br>I am a popup.").openPopup();
// Denver CO
var markerDen = L.marker([39.738354746370874, -104.98627494787459]).addTo(map);
markerDen.bindPopup("<b>Denver, CO</b><br>I am a popup.").openPopup();
// Seattle WA
var markerSea = L.marker([47.6056756868278, -122.33459262072664]).addTo(map);
markerSea.bindPopup("<b>Seattle, WA</b><br>I am a popup.").openPopup();
// Santa Clara CA
var markerSan = L.marker([37.3538766402237, -121.95576126369147]).addTo(map);
markerSan.bindPopup("<b>Santa Clara, CA</b><br>I am a popup.").openPopup();
// Los Angeles CA
var markerLos = L.marker([34.05304191543873, -118.24837197643518]).addTo(map);
markerLos.bindPopup("<b>Los Angeles, CA</b><br>I am a popup.").openPopup();


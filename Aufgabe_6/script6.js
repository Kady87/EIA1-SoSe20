"use strict";
//Gesamtemission Europa
var europa = 4965.7 + 4616.4 + 4705.8 + 4615.2 + 4541.5 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4209.3;
//Gesamtemission Nordamerika
var nordamerika = 6600.4 + 6139.9 + 6375.8 + 6262.8 + 5998.9 + 6167 + 6268.9 + 6048.7 + 5938.3 + 5920.5 + 6035.6;
//Gesamtemission Afrika
var afrika = 1028 + 1041.9 + 1072.1 + 1073.7 + 1107.1 + 1134.4 + 1167.1 + 1174.5 + 1192.1 + 1207 + 1235.5;
//Gesamtemission Asien
var asien = 12954.7 + 13246.6 + 13986.8 + 14860.1 + 15308.8 + 15660.2 + 15787.7 + 15877 + 15984 + 16274.3 + 16274.1;
//Gesamtemission Südamerika
var suedamerika = 1132.6 + 1093.1 + 1164.2 + 1215.5 + 1262 + 1308.9 + 1331.3 + 1321.7 + 1294.7 + 1279.2 + 1261.5;
//Gesamtemission Australien
var australien = 1993 + 1875.7 + 1939.1 + 2035.2 + 2063.2 + 2014.7 + 2027.6 + 1986.8 + 1997.4 + 2001.3 + 2100.5;
//Gesamtemission Welt
var welt = europa + nordamerika + afrika + asien + suedamerika + australien;
window.addEventListener("load", function () {
    //Berechnung Europa
    var EUWelt = (europa / welt) * 100;
    var EU2008 = 4965.7;
    var EU2018 = 4209.3;
    var EUveraenderung = (EU2018 - EU2008);
    var EUveraenderungprozent = (EUveraenderung / EU2008) * 100;
    document.querySelector(".europa").addEventListener("click", clickEU);
    function clickEU() {
        document.querySelector("#h1").innerHTML = "Carbon Dioxide Emissions in Europe";
        document.querySelector("#emission2018").innerHTML = europa;
        document.querySelector("#Welt").innerHTML = EUWelt.toFixed(2) + "%";
        document.querySelector("#prozent").innerHTML = EUveraenderungprozent.toFixed(2) + "%";
        document.querySelector("#veraenderung").innerHTML = EUveraenderung.toFixed(2);
        document.querySelector(".chart").setAttribute("style", `height:${EUWelt} + px`);
        console.log('Die Emission von Europa ist:' + europa + 'kg CO2 ');
        console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit:' + EUWelt + '% ');
        console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um:' + EUveraenderungprozent + '% verändert');
        console.log('2018 im Vergleich zu 2008 sind das:' + EUveraenderung + 'kg CO2 ');
    }
    //Berechnung Nordamerika
    var NAWelt = (nordamerika / welt) * 100;
    var NA2008 = 6600.4;
    var NA2018 = 6035.6;
    var NAveraenderung = (NA2018 - NA2008);
    var NAveraenderungprozent = (NAveraenderung / NA2008) * 100;
    document.querySelector(".northamerica").addEventListener("click", clickNA);
    function clickNA() {
        document.getElementById("h1").innerHTML = "Carbon Dioxide Emissions in Northamerica";
        document.getElementById("emission2018").innerHTML = nordamerika;
        document.getElementById("Welt").innerHTML = NAWelt.toFixed(2) + "%";
        document.getElementById("prozent").innerHTML = NAveraenderungprozent.toFixed(2) + "%";
        document.getElementById("veraenderung").innerHTML = NAveraenderung.toFixed(2);
        document.querySelector('.chart').setAttribute('style', 'height:' + NAWelt + 'px');
        console.log('Die Emission von Nordamerika ist:' + nordamerika + 'kg CO2 ');
        console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit:' + NAWelt + '% ');
        console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um:' + NAveraenderungprozent + '% verändert');
        console.log('2018 im Vergleich zu 2008 sind das:' + NAveraenderung + 'kg CO2 ');
    }
    //Berechnung Afrika
    var AFWelt = (afrika / welt) * 100;
    var AF2008 = 1028;
    var AF2018 = 1235.5;
    var AFveraenderung = (AF2018 - AF2008);
    var AFveraenderungprozent = (AFveraenderung / AF2008) * 100;
    document.querySelector(".africa").addEventListener("click", clickAF);
    function clickAF() {
        document.getElementById("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
        document.getElementById("emission2018").innerHTML = afrika;
        document.getElementById("Welt").innerHTML = AFWelt.toFixed(2) + "%";
        document.getElementById("prozent").innerHTML = AFveraenderungprozent.toFixed(2) + "%";
        document.getElementById("veraenderung").innerHTML = AFveraenderung.toFixed(2);
        document.querySelector('.chart').setAttribute('style', 'height:' + AFWelt + 'px');
        console.log('Die Emission von Afrika ist:' + afrika + 'kg CO2 ');
        console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit:' + AFWelt + '% ');
        console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um:' + AFveraenderungprozent + '% verändert');
        console.log('2018 im Vergleich zu 2008 sind das:' + AFveraenderung + 'kg CO2 ');
    }
    //Berechnung Asien
    var ASWelt = (asien / welt) * 100;
    var AS2008 = 12954.7;
    var AS2018 = 16274.1;
    var ASveraenderung = (AS2018 - AS2008);
    var ASveraenderungprozent = (ASveraenderung / AS2008) * 100;
    document.querySelector(".asia").addEventListener("click", clickAS);
    function clickAS() {
        document.getElementById("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
        document.getElementById("emission2018").innerHTML = asien;
        document.getElementById("Welt").innerHTML = ASWelt.toFixed(2) + "%";
        document.getElementById("prozent").innerHTML = ASveraenderungprozent.toFixed(2) + "%";
        document.getElementById("veraenderung").innerHTML = ASveraenderung.toFixed(2);
        document.querySelector('.chart').setAttribute('style', 'height:' + ASWelt + 'px');
        console.log('Die Emission von Asien ist:' + asien + 'kg CO2 ');
        console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit:' + ASWelt + '% ');
        console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um:' + ASveraenderungprozent + '% verändert');
        console.log('2018 im Vergleich zu 2008 sind das:' + ASveraenderung + 'kg CO2 ');
    }
    //Berechnung Südamerika
    var SAWelt = (suedamerika / welt) * 100;
    var SA2008 = 1132.6;
    var SA2018 = 1261.5;
    var SAveraenderung = (SA2018 - SA2008);
    var SAveraenderungprozent = (SAveraenderung / SA2008) * 100;
    document.querySelector(".southamerica").addEventListener("click", clickSA);
    function clickSA() {
        document.getElementById("h1").innerHTML = "Carbon Dioxide Emissions in Southamerica";
        document.getElementById("emission2018").innerHTML = suedamerika;
        document.getElementById("Welt").innerHTML = SAWelt.toFixed(2) + "%";
        document.getElementById("prozent").innerHTML = SAveraenderungprozent.toFixed(2) + "%";
        document.getElementById("veraenderung").innerHTML = SAveraenderung.toFixed(2);
        document.querySelector('.chart').setAttribute('style', 'height:' + SAWelt + 'px');
        console.log('Die Emission von Südamerika ist:' + suedamerika + 'kg CO2 ');
        console.log('Relativ zur Gesamtemission der Welt verursacht Südamerika damit:' + SAWelt + '% ');
        console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um:' + SAveraenderungprozent + '% verändert');
        console.log('2018 im Vergleich zu 2008 sind das:' + SAveraenderung + 'kg CO2 ');
    }
    //Berechnung Australien
    var AUWelt = (australien / welt) * 100;
    var AU2008 = 1993;
    var AU2018 = 2100.5;
    var AUveraenderung = (AU2018 - AU2008);
    var AUveraenderungprozent = (AUveraenderung / AU2008) * 100;
    document.querySelector(".australia").addEventListener("click", clickAU);
    function clickAU() {
        document.getElementById("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
        document.getElementById("emission2018").innerHTML = australien;
        document.getElementById("Welt").innerHTML = AUWelt.toFixed(2) + "%";
        document.getElementById("prozent").innerHTML = AUveraenderungprozent.toFixed(2) + "%";
        document.getElementById("veraenderung").innerHTML = AUveraenderung.toFixed(2);
        document.querySelector('.chart').setAttribute('style', 'height:' + AUWelt + 'px');
        console.log('Die Emission von Australien ist:' + australien + 'kg CO2 ');
        console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit:' + AUWelt + '% ');
        console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um:' + AUveraenderungprozent + '% verändert');
        console.log('2018 im Vergleich zu 2008 sind das:' + AUveraenderung + 'kg CO2 ');
    }
});
//# sourceMappingURL=script6.js.map
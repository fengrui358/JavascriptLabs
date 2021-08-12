<template>
  <div>
    <div id="mapid"></div>
  </div>
</template>

<script>
import * as L from "leaflet";

const markerCenter = [51.5, -0.09];
function getRandomLocation() {
    return [
      markerCenter[0] + ((Math.random() > 0.5 ? 1 : -1) * Math.random()),
      markerCenter[1] + ((Math.random() > 0.5 ? 1 : -1) * Math.random()),
    ];
}

function testImg(count, mymap) {
  for (let index = 0; index < count; index++) {
    
    L.marker(getRandomLocation())
      .addTo(mymap)
      .bindPopup(`<b>Hello world!</b><br />I am ${index + 1} markerpopup.`)
      .bindTooltip("my tooltip text", { permanent: true })
      .openTooltip();
  }
}

function testPngIcon(count, mymap) {
    var myIcon = L.icon({
    iconUrl: 'images/test_icon.png',
    iconSize: [30, 30],
    iconAnchor: [22, 54],
    popupAnchor: [-3, -76],
    // shadowUrl: '../assets/test_icon.png',
    shadowSize: [30, 30],
    shadowAnchor: [22, 44]
    });
    
    for (let index = 0; index < count; index++) {
        L.marker(getRandomLocation(), {icon: myIcon}).addTo(mymap).bindPopup(`<b>Hello world!</b><br />I am ${index + 1} markerpopup.`)
      .bindTooltip("my tooltip text", { permanent: true })
      .openTooltip();
    }
}

function testDivIcon(count, mymap) {
  var myIcon = L.divIcon({ className: "my-div-icon" });
  // you can set .my-div-icon styles in CSS
  for (let index = 0; index < count; index++) {
    L.marker(getRandomLocation(), { icon: myIcon }).addTo(mymap).bindPopup(`<b>Hello world!</b><br />I am ${index + 1} markerpopup.`)
      .bindTooltip("my tooltip text", { permanent: true })
      .openTooltip();
  }
}

export default {
  mounted() {
    const mexicoCenter = [31.633506, -106.420955];
    console.log(mexicoCenter);

    var mymap = L.map("mapid").setView([51.505, -0.09], 13);
    mymap.on("zoomend", (s) => console.log(s));
    mymap.eachLayer(function (layer) {
      console.log("layer:", layer);
    });
    const panes = mymap.getPanes();
    console.log("panes:", panes);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(mymap);

    // mexico map
    // L.tileLayer(
    //   "http://10.15.11.220:15888/gis/map/image/mexico_tile/{z}/{x}/{y}",
    //   {
    //     maxZoom: 18,
    //     attribution:
    //       'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    //       'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     id: "mapbox/streets-v11",
    //     tileSize: 512,
    //     zoomOffset: -1,
    //   }
    // ).addTo(mymap);

    // 测试 marker 性能
    testImg(1, mymap);
    testDivIcon(500, mymap);
    testPngIcon(1, mymap);

    L.circle([51.508, -0.11], 500, {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
    })
      .addTo(mymap)
      .bindPopup("I am a circle.");

    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ])
      .addTo(mymap)
      .bindPopup("I am a polygon.");

    var popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
    }

    mymap.on("click", onMapClick);
  },
};
</script>

<style scoped>
#mapid {
  height: 800px;
  width: 1200px;
  /* width: 180px; */
}
</style>

<style>
.my-div-icon {
  width: 30px !important;
  height: 30px !important;
  border-radius: 15px;
  background-color: red;
}
</style>
import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://127.0.0.1:8080/geoserver/AF18-51/wms',
        params: {'LAYERS': 'AF18-51:border', 'TILED': true},
        serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        transition: 0,
      }),
    }),
  ],
  view: new View({
    center: [10340785, 7560243],
    zoom: 10
  })
});

import React from 'react'
import ReactDOM from 'react-dom'
import L from 'leaflet'
import E from 'esri-leaflet'

import 'leaflet/dist/leaflet.css'

const styleMap = {
  display: 'flex',
  width: '1000px',
  height: '400px',
}

class TestMap extends React.Component {
  initialState = () => {
    let initialMapProperties = {
      minZoom: 2,
      maxZoom: 5,
      attributionControl: false,
    }

    let map = L.map(ReactDOM.findDOMNode(this.mapNode), initialMapProperties)
    map.setView(new L.LatLng(40.015, -105.2705), 3)

    E.basemapLayer('Imagery').addTo(map)
    E.basemapLayer('ImageryLabels').addTo(map)

    let state = {
      // Define map with defaults
      map: map,
    }
    return state
  }

  componentDidMount() {
    this.setState(this.initialState(), this.mapSetup)
  }

  mapSetup() {
    console.log(
      'mapSetup does nothing now (trying to isolate problem with labels basemap)'
    )
  }

  render() {
    return (
      <div
        style={styleMap}
        ref={mapNode => {
          this.mapNode = mapNode
        }}
      />
    )
  }
}

export default TestMap

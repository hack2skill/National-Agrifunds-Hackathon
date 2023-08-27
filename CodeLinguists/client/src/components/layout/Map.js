import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../../assets/css/map.css'
import LocationPin from './LocationPin'

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map"></h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD_kRF8f0_e6IsONJf2uW8oUhJdvptAEno' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )


export default Map
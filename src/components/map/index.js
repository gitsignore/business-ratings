import React from 'react';
import PigeonMap from 'pigeon-maps';
import PigeonMarker from 'pigeon-marker';
import PropTypes from 'prop-types';

const Map = ({ rating, handleShowMap }) => (
  <PigeonMap
    center={[rating.coordinates.latitude, rating.coordinates.longitude]}
    zoom={12}
  >
    <button
      className="btn btn-action s-circle float-right m-2"
      onClick={() => handleShowMap(rating)}
    >
      <i className="icon icon-cross" />
    </button>
    <PigeonMarker
      anchor={[rating.coordinates.latitude, rating.coordinates.longitude]}
      payload={1}
      onClick={({ event, anchor, payload }) => {}}
    />
  </PigeonMap>
);

Map.propTypes = {
  rating: PropTypes.object.isRequired,
  handleShowMap: PropTypes.func.isRequired
};

export default Map;

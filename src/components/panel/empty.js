import React from 'react';
import PropTypes from 'prop-types';

const Empty = ({ loadRatings }) => (
  <div className="empty" style={{ height: '100vh' }}>
    <p className="empty-title h6">You have no ratings</p>
    <p className="empty-subtitle">Click the button to load some fake ratings</p>
    <div className="empty-action">
      <button className="btn btn-primary btn-sm" onClick={loadRatings}>
        Load ratings
      </button>
    </div>
  </div>
);

Empty.propTypes = {
  loadRatings: PropTypes.func.isRequired
};

export default Empty;

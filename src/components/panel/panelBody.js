import React from 'react';
import PropTypes from 'prop-types';
import { scores } from '../../constants';

const PanelBody = ({ ratings, handleShowMap }) => (
  <div className="panel-body">
    {ratings.map((rating, key) => (
      <div
        key={`rating_${key}`}
        className="tile columns c-hand"
        onClick={() => handleShowMap(rating)}
      >
        <div className="tile-icon col-3 col-xl-4 col-xs-12">
          <div className="chip">
            <img src={rating.image} className="avatar avatar-sm" alt="" />
            {rating.userName}
          </div>
        </div>
        <div className="tile-content col-8 col-xl-6 col-md-11">
          <p className="tile-title text-bold">{rating.businessName}</p>
          <p className="tile-subtitle">{rating.comment}</p>
        </div>
        <div className="tile-action col-1">
          <span className="chip float-right" role="button" tabIndex="0">
            <span className={`text-${scores[rating.score].color}`}>
              {rating.score}
            </span>
            <span className="text-dark">&nbsp;/ 5</span>
          </span>
        </div>
      </div>
    ))}
  </div>
);

PanelBody.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      businessName: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      isEnable: PropTypes.bool.isRequired
    })
  ).isRequired,
  handleShowMap: PropTypes.func.isRequired
};

PanelBody.defaultProps = {
  ratings: []
};

export default PanelBody;

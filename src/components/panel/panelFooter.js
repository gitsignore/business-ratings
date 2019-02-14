import React from 'react';
import PropTypes from 'prop-types';
import RatingForm from './forms/ratingForm';

const PanelFooter = ({
  current,
  errors,
  showForm,
  handleShowForm,
  handleSubmit,
  handleChange
}) => (
  <div className="panel-footer">
    <div className="columns">
      {showForm && (
        <div className="column col-12 mb-2">
          <button
            className="btn btn-action s-circle float-right mb-2"
            type="button"
            onClick={handleShowForm}
          >
            <i className="icon icon-cross" />
          </button>
        </div>
      )}
    </div>
    {showForm && (
      <RatingForm
        current={current}
        errors={errors}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    )}
    {!showForm && (
      <button
        className="btn btn-primary btn-block"
        type="button"
        onClick={handleShowForm}
      >
        Add rating
      </button>
    )}
  </div>
);

PanelFooter.propTypes = {
  current: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  showForm: PropTypes.bool.isRequired,
  handleShowForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default PanelFooter;

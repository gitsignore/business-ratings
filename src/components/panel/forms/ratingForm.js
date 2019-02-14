import React from 'react';
import PropTypes from 'prop-types';
import ChipsNotation from '../chipsNotation';

const RatingForm = ({ current, errors, handleSubmit, handleChange }) => (
  <form className="form-horizontal" onSubmit={handleSubmit}>
    <div className={`form-group ${errors.businessName ? 'has-error' : ''}`}>
      <div className="col-3 col-sm-12">
        <label className="form-label" htmlFor="businessName">
          Business name
        </label>
      </div>
      <div className="col-8 col-sm-12">
        <input
          className="form-input"
          id="businessName"
          type="text"
          value={current.businessName}
          onChange={handleChange}
          placeholder="The business name"
          required=""
        />
        {errors.businessName && (
          <p className="form-input-hint">Required field.</p>
        )}
      </div>
    </div>
    <div className={`form-group ${errors.userName ? 'has-error' : ''}`}>
      <div className="col-3 col-sm-12">
        <label className="form-label" htmlFor="userName">
          User name
        </label>
      </div>
      <div className="col-8 col-sm-12">
        <input
          className="form-input"
          id="userName"
          type="text"
          value={current.userName}
          onChange={handleChange}
          placeholder="Your user name"
        />
        {errors.userName && <p className="form-input-hint">Required field.</p>}
      </div>
    </div>
    <div className={`form-group ${errors.comment ? 'has-error' : ''}`}>
      <div className="col-3 col-sm-12">
        <label className="form-label" htmlFor="comment">
          Comment
        </label>
      </div>
      <div className="col-8 col-sm-12">
        <textarea
          className="form-input"
          id="comment"
          value={current.comment}
          onChange={handleChange}
          placeholder="Add a comment here"
          rows="4"
        />
        {errors.comment && <p className="form-input-hint">Required field.</p>}
      </div>
    </div>
    <div className={`form-group ${errors.score ? 'has-error' : ''}`}>
      <div className="col-3 col-sm-12">
        <label className="form-label" htmlFor="score">
          Score
        </label>
      </div>
      <div className="col-8 col-sm-12">
        <ChipsNotation currentValue={current.score} action={handleChange} />
        {errors.score && <p className="form-input-hint">Required field.</p>}
      </div>
    </div>
    <button className="btn btn-success btn-block" type="submit">
      Submit
    </button>
  </form>
);

RatingForm.propTypes = {
  current: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default RatingForm;

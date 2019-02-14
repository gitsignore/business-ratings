import React from 'react';
import PropTypes from 'prop-types';
import ChipsNotation from './chipsNotation';

const PanelHeader = ({
  title,
  showFilters,
  filters,
  customDisplay,
  handleFilter
}) => (
  <div className="panel-header">
    <div className="col-12 col-mx-auto text-center m-1">
      <div className="panel-title h3">{title}</div>
    </div>
    {showFilters && (
      <div>
        <ChipsNotation currentValue={filters.score} action={handleFilter} />
        <div className="col-12 col-mx-auto text-center">
          <button
            className={`btn btn-${
              filters.order === 'ASC' ? 'primary' : 'link'
            } btn-action s-circle`}
            onClick={() =>
              handleFilter({ target: { id: 'order', value: 'ASC' } })
            }
          >
            <i className="icon icon-arrow-up" />
          </button>
          <button
            className={`btn btn-${
              filters.order === 'DESC' ? 'primary' : 'link'
            } btn-action s-circle`}
            onClick={() =>
              handleFilter({ target: { id: 'order', value: 'DESC' } })
            }
          >
            <i className="icon icon-arrow-down" />
          </button>
        </div>
        <div className="input-group has-icon-right mt-2">
          {customDisplay !== false ? (
            <span className="input-group-addon bg-primary">
              {customDisplay}&nbsp;/ 5
            </span>
          ) : (
            false
          )}
          <input
            id="search"
            className="form-input"
            type="text"
            placeholder="Search"
            onChange={handleFilter}
            value={filters.search}
          />
          <i
            className="form-icon icon icon-cross c-hand"
            role="button"
            tabIndex="0"
            onClick={() =>
              handleFilter({ target: { id: 'search', value: '' } })
            }
            onKeyPress={() =>
              handleFilter({ target: { id: 'search', value: '' } })
            }
          />
        </div>
      </div>
    )}
  </div>
);

PanelHeader.propTypes = {
  title: PropTypes.string,
  showFilters: PropTypes.bool,
  filters: PropTypes.object,
  customDisplay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleFilter: PropTypes.func.isRequired
};

PanelHeader.defaultProps = {
  title: 'Business Ratings',
  showFilters: false,
  filters: { search: '', score: [], order: null },
  customDisplay: ''
};

export default PanelHeader;

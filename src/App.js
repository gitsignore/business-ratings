import React, { Component } from 'react';
import PanelHeader from './components/panel/panelHeader';
import PanelBody from './components/panel/panelBody';
import PanelFooter from './components/panel/panelFooter';
import Empty from './components/panel/empty';
import Map from './components/map';
import RatingModel from './models/rating';
import { filterRatings, ratingAverage } from './helpers';
import { fakeRatings } from './constants';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      showMap: false,
      editForm: false,
      filters: { search: '', score: [], order: null },
      errors: {},
      current: new RatingModel(),
      ratings: [],
      coordinates: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowForm = this.handleShowForm.bind(this);
    this.handleShowMap = this.handleShowMap.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.loadFakeRatings = this.loadFakeRatings.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      const geolocation = navigator.geolocation;
      geolocation.getCurrentPosition(position =>
        this.setState({ coordinates: position.coords })
      );
    }
    const cachedRatings = localStorage.getItem('ratings');
    this.setState({ ratings: JSON.parse(cachedRatings) || [] });
  }

  loadFakeRatings = () => {
    localStorage.setItem('ratings', JSON.stringify(fakeRatings));
    this.setState({ ratings: fakeRatings });
  };

  handleShowForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
      showMap: false,
      current: new RatingModel(),
      editForm: false,
      errors: {}
    }));
  };

  checkErrors = () => {
    let errors = {};
    const { current } = this.state;
    Object.keys(current).map(key => {
      if ('score' === key && current[key] === null) {
        errors[key] = true;
      } else if (
        'isEnable' !== key &&
        (this[key] === null || current[key].length === 0)
      ) {
        errors[key] = true;
      }

      return errors;
    });

    return errors;
  };

  handleShowMap = rating => {
    this.setState(prevState => ({
      showMap: !prevState.showMap,
      current: rating
    }));
  };

  handleFilter = event => {
    const { id, value } = event.target;

    this.setState(prevState => {
      const { filters } = prevState;

      if (Array.isArray(filters[id])) {
        if (filters[id].includes(value)) {
          filters[id] = filters[id].filter(val => val !== value);
        } else {
          filters[id].push(value);
        }
      } else if (id === 'order' && value === filters.order) {
        filters.order = null;
      } else {
        filters[id] = value;
      }

      return { filters };
    });
  };

  handleChange = event => {
    const { id, value } = event.target;

    this.setState(prevState => {
      const { current } = prevState;
      const errors = { ...prevState.errors };
      delete errors[id];
      current[id] = value;

      return {
        current,
        errors
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(prevState => {
      const { ratings, current, coordinates } = prevState;
      if (current.validate()) {
        current.setRandomImage();
        current.isEnable = true;
        if (coordinates) {
          current.addCoordinates(coordinates.latitude, coordinates.longitude);
        }
        ratings.unshift(current);
        localStorage.setItem('ratings', JSON.stringify(ratings));

        return {
          showForm: !prevState.showForm,
          current: {},
          ratings
        };
      }

      return {
        errors: this.checkErrors()
      };
    });
  };

  render() {
    const {
      ratings,
      errors,
      current,
      showForm,
      showMap,
      filters,
      editForm
    } = this.state;
    const filteredRatings = filterRatings(ratings, filters);
    const average = ratingAverage(filteredRatings);

    return (
      <div className="App container" id="cards">
        <div className="columns">
          <div className="column col-5 col-xl-8 col-sm-10 col-xs-11 col-mx-auto">
            <div className="panel">
              <PanelHeader
                {...{
                  filters,
                  showFilters: !showForm,
                  customDisplay: average,
                  handleFilter: this.handleFilter
                }}
              />
              {!showForm && <div className="divider" />}
              {!showForm &&
                (ratings.length > 0 ? (
                  showMap ? (
                    <Map rating={current} handleShowMap={this.handleShowMap} />
                  ) : (
                    <PanelBody
                      {...{
                        ratings: filteredRatings,
                        handleShowMap: this.handleShowMap
                      }}
                    />
                  )
                ) : (
                  <Empty loadRatings={this.loadFakeRatings} />
                ))}
              <div className="divider" />
              <PanelFooter
                {...{
                  current,
                  errors,
                  showForm,
                  editForm,
                  handleShowForm: this.handleShowForm,
                  handleChange: this.handleChange,
                  handleSubmit: this.handleSubmit
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

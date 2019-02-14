import { randomInteger } from '../helpers';

class Rating {
  constructor(
    ...{
      userName = '',
      businessName = '',
      comment = '',
      isEnable = false,
      score = null,
      image = 'https://picturepan2.github.io/spectre/img/avatar-1.png',
      coordinates = { latitude: null, longitude: null }
    }
  ) {
    this.userName = userName;
    this.businessName = businessName;
    this.comment = comment;
    this.isEnable = isEnable;
    this.score = score;
    this.image = image;
    this.coordinates = coordinates;
  }

  validate() {
    return Object.keys(this).every(key => {
      if ('isEnable' === key || 'coordinates' === key) {
        return true;
      }

      if ('score' === key) {
        return this[key] !== null && this[key] >= 0 && this[key] <= 5;
      }

      return this[key] !== null && this[key].length > 0;
    });
  }

  addCoordinates(latitude, longitude) {
    this.coordinates.latitude = latitude;
    this.coordinates.longitude = longitude;
  }

  setRandomImage() {
    this.image = `https://picturepan2.github.io/spectre/img/avatar-${randomInteger()}.png`;
  }
}

export default Rating;

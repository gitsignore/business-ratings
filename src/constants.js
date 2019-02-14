const scores = [
  { color: 'error', value: 0 },
  { color: 'error', value: 1 },
  { color: 'warning', value: 2 },
  { color: 'primary', value: 3 },
  { color: 'success', value: 4 },
  { color: 'success', value: 5 }
];

const fakeRatings = [
  {
    userName: 'Maxime Signoret',
    businessName: 'S. Company',
    comment: 'Happy life company.',
    score: 5,
    image: 'https://picturepan2.github.io/spectre/img/avatar-1.png',
    coordinates: { latitude: 48.8337552, longitude: 2.2526615 },
    isEnable: true
  },
  {
    userName: 'Maxime Signoret',
    businessName: 'M. Company',
    comment: 'A legacy company with old school management.',
    score: 2,
    image: 'https://picturepan2.github.io/spectre/img/avatar-4.png',
    coordinates: { latitude: 48.8803754, longitude: 2.3247805 },
    isEnable: true
  },
  {
    userName: 'Chuck Norris',
    businessName: 'Chuck Norris Company',
    comment: 'No comment.',
    score: 4,
    image: 'https://picturepan2.github.io/spectre/img/avatar-2.png',
    coordinates: { latitude: 48.8337552, longitude: 2.2526615 },
    isEnable: false
  }
];

export { scores, fakeRatings };

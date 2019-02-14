const randomInteger = (max = 5) => Math.floor(Math.random() * max) + 1;

const filterRatings = (ratingsList, filters) => {
  const { search, score, order } = filters;

  let list = ratingsList.filter(
    rating =>
      rating.isEnable &&
      (rating.userName.toLowerCase().match(search.toLowerCase().trim()) ||
        rating.businessName.toLowerCase().match(search.toLowerCase().trim()) ||
        rating.comment.toLowerCase().match(search.toLowerCase().trim()))
  );

  if (order === 'DESC') {
    list = list.sort(descendingSort);
  }

  if (order === 'ASC') {
    list = list.sort(ascendingSort);
  }

  list = list.filter(rating =>
    score.length ? score.includes(rating.score) : true
  );

  return list;
};

const ascendingSort = (a, b) => {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
};

const descendingSort = (a, b) => {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }
  return 0;
};

const ratingAverage = ratingsList =>
  (ratingsList.length &&
    (
      ratingsList.reduce(
        (total, currentRating) => total + currentRating.score,
        0
      ) / ratingsList.length
    ).toFixed(1)) ||
  0;

export { randomInteger, filterRatings, ratingAverage };

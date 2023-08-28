const moviesController = {
  list: (req, res) => {
    res.render('movies');
  },

  movieId: (req, res) => {
    res.send(req.params.id);
    return res.render('moviesId');
  },
};

module.exports = moviesController;

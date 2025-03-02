const fs = require("fs");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkId = (req, res, next, val) => {
  const tour = tours.find((ele) => ele.id == val);
  if (!tour) {
    return res.status(404).json({
      status: 'Invalid Id',
    });
  }
  next();
};

exports.getAllTour = (req, res) => {
  res.status(200).json({
    status: 200,
    tours,
  });
};

exports.getTour = (req, res) => {
  const tour = tours.find((ele) => ele.id == req.params.id);
  res.status(200).json({
    status: 200,
    tour,
  });
};

exports.createTour = (req, res) => {
  res.send("post request");
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 200,
    data: {
      tour: "Updated Tour",
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};

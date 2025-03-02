const express = require('express');
const { getAllTour, createTour, updateTour, deleteTour, getTour, checkId } = require('../controllers/tourController');

const tourRouter = express.Router();

tourRouter.param('id', checkId);

tourRouter.route("/").get(getAllTour).post(createTour);
tourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = tourRouter;

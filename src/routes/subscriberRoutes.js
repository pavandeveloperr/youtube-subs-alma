const express = require("express");
const {
  getSubscribers,
  createSubscribers,
  deleteSubscriber,
  getSubscriberNames,
  getSubscriberById,
  UpdateSubscriber,
} = require("../controllers/subscriberController");

const router = express.Router();

// GET request to get all subscribers
router.route("/subscribers").get(getSubscribers);

// GET request for the path '/subscribers/names'
router.route("/subscribers/names").get(getSubscriberNames);

// GET request to get subscriber by Id
router.route("/subscribers/:id").get(getSubscriberById);

// POST request to add a subscriber
router.route("/subscribers").post(createSubscribers);

// DELETE request as per subscriber Id
router.route("/subscribers/:id").delete(deleteSubscriber);

// PATCH request to update subscriber as per Id
router.route("/subscribers/:id").patch(UpdateSubscriber);

module.exports = router;

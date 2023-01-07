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

// controller routes
router.route("/subscribers").get(getSubscribers);
router.route("/subscribers").post(createSubscribers);
router.route("/subscribers/:id").delete(deleteSubscriber);
router.route("/subscribers/:id").get(getSubscriberById);
router.route("/subscriber/names").get(getSubscriberNames);
router.route("/subscribers/:id").patch(UpdateSubscriber);

module.exports = router;

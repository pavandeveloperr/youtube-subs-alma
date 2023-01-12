const mongoose = require("mongoose");
const subscriber = require("../models/subscribers");

// GET all subscribers
exports.getSubscribers = async (req, res) => {
  try {
    // GET all subscribers from the db & exclude __v
    const subscribers = await subscriber
      .find({})
      .sort({ createdAt: -1 })
      .select("-__v");
    // returns response with list of subscribers & status 200 (OK)
    res.status(200).json(subscribers);
  } catch (error) {
    // if error occurs, returns status 400 with error message
    res.status(400).json({ error: error.message });
  }
};

// POST request to add new subscriber
exports.createSubscribers = async (req, res) => {
  // Add document to db
  const { name, subscribedChannel } = req.body;

  try {
    // creates subscriber and add to db with status 200 (OK)
    const subscribers = await subscriber.create({ name, subscribedChannel });
    res.status(200).json(subscribers);
  } catch (error) {
    // if error occurs, return status of 400 with error message
    res.status(400).json({ error: error.message });
  }
};

// DELETE a subscriber
exports.deleteSubscriber = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    // check for valid Id, if not valid returns status 404 with error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid id" });
    }

    const subscribers = await subscriber.findOneAndDelete({ _id: id });

    // if no subscriber found with given Id , return error with status 400
    if (!subscribers) {
      return res.status(400).json({ error: `No subscriber with this ${id}` });
    } else {
      // if success , return status 200 with success message
      res.status(200).json({ message: "successfully deleted subscriber" });
    }
  } catch (error) {
    // if error occurs, return status 400 with error
    return res.status(400).json({ error: error.message });
  }
};

// GET a single subscriber
exports.getSubscriberById = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    // check for valid Id, if not valid returns status 404 with error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid subscriber id" });
    }

    const subscribers = await subscriber.findById(id).select("-__v");

    // if no subscriber found with given Id , return error with status 400
    if (!subscribers) {
      return res
        .status(400)
        .json({ error: `No subscriber exists with this ${id} id` });
    } else {
      res.status(200).json(subscribers);
    }
  } catch (error) {
    // if error occurs, return status 400 with error
    return res.status(400).json({ error: error.message });
  }
};

// GET subscriber names by path '/subscribers/names'
exports.getSubscriberNames = async (req, res) => {
  try {
    // To retrieve a list of subscribers
    const subscribers = await subscriber
      .find()
      .select("-__v -_id -subscribedDate");

    // If successful, return a response with status 200 with list of subscribers
    res.status(200).json(subscribers);
  } catch (error) {
    // If error occurs, return a response with a status 404 with error message
    res.status(404).json({ error: error.message });
  }
};

// UPDATE a subscriber
exports.UpdateSubscriber = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    // check for valid Id, if not valid returns status 404 with error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid id" });
    }

    // update subscriber for particular id
    const subscribers = await subscriber.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      {
        new: true
      }
    );

    // if no subscriber found with given Id , return error with status 400
    if (!subscribers) {
      return res
        .status(400)
        .json({ error: `No subscriber exists with given ${id} id` });
    } else {
      res.status(200).json(subscribers);
    }
  } catch (error) {
    // if error occurs, return status 400 with error message
    return res.status(400).json({ error: error.message });
  }
};

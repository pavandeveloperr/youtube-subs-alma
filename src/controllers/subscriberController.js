const mongoose = require("mongoose");
const subscribers = require("../models/subscribers");
const subscriber = require("../models/subscribers")

// GET all subscribers
exports.getSubscribers = async (req, res) => {

    try {
        // GET all the subscribers from the db & exclude __v
        const subscribers = await subscriber.find({}).sort({createdAt: -1 }).select('-__v')
        // return the subscribers with a status code of 200   
        res.status(200).json(subscribers);
    } catch (error) {
        // if error occurs, returns status code of 500 with following mssg
        res.status(500).json({ error: "database invalid" })
    }
    
} 

// POST request to add new subscriber
exports.createSubscribers = async (req, res) => {
    // Add doc to db
    const {name, subscribedChannel} = req.body

    try {
        const subscribers = await subscriber.create({name , subscribedChannel})
        res.status(200).json(subscribers)
    } catch(error) {
        res.status(400).json({error: 'Error, cannot add the element'})
    }
}

// DELETE a subscriber
exports.deleteSubscriber = async (req, res) => {
    const { id } = req.params    

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id' })
    }

    const subscribers = await subscriber.findOneAndDelete({_id: id}) 

    if (!subscribers) {
        return res.status(404).json({ error: "No subscriber with that id" })
    }

    res.status(200).json({result: "successfully deleted subscriber"})
}

// GET a single subscriber 
exports.getSubscriberById = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const subscribers = await subscriber.findById(id).select('-__v')

    if(!subscribers) {
        return res.status(404).json({error: 'No subscriber exists with that id'})
    }

    res.status(200).json(subscribers)

}


// GET subscriber names
exports.getSubscriberNames = async (req, res) => {
    try {
      // To retrieve a list of subscribers
      const subscribers = await subscriber
        .find()
        .select("-__v -_id -subscribedDate");
  
      // If successful, send a response with a status code of 200 and the list of subscribers
      res.status(200).json(subscribers);
    } catch (err) {
      // If error occurs, send a response with a status code of 500 and an error message
      res.status(500).json({ error: "Invalid name URL" });
    }
};

// UPDATE a subscriber
exports.UpdateSubscriber = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const subscribers = await subscriber.findOneAndUpdate({_id: id}, {
        ...req.body 
    })

    if (!subscribers) {
        return res.status(404).json({error: 'Invalid id'})
    }
    
    res.status(200).json({result: "Updated successfully"})    
}
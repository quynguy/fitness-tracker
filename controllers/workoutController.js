const Workout = require('../models/workoutModel');
const mongoose = require('mongoose')

// all workouts
const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts)
}


// singular workout
const getWorkout = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No workout found'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: 'No workout found'})
    }

    res.status(200).json(workout)
}



// create new workout 
const createWorkout = async (req, res) => {
    const {title, load, reps, sets} = req.body

    // add document to db
    try {
        const workout = await Workout.create({title, load, reps, sets})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No workout found'})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if (!workout) {
        return res.status(404).json({error: 'No workout found'})
    }

    res.status(200).json(workout)
}


// update 
const updateWorkout = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No Workout found"})

    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({error: "No workout found"})

    }

    res.status(200).json(workout)
}


module.exports = { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}
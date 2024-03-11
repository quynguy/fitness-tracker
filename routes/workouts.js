const express = require('express');

const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

const router = express.Router();


// all workouts
router.get('/', getWorkouts);

// singluar workout
router.get('/:id', getWorkout);

// post workout
router.post('/', createWorkout);

// delete workout 
router.delete('/:id', deleteWorkout);

// update workout
router.patch('/:id', updateWorkout);


module.exports = router; 
$(document).ready(function() {

    $('.datepicker').datepicker();

    $('#workoutForm').submit(function(event) {
        event.preventDefault(); 
        
        var formData = {
            date: $('#date').val(),
            title: $('#title').val(),
            reps: $('#reps').val(),
            load: $('#load').val(),
            sets: $('#sets').val()
        };
        

        $.ajax({
            type: 'POST',
            url: '/api/workouts',
            data: formData,
            success: function(response) {
                console.log('Workout added successfully:', response);
            },
            error: function(xhr, status, error) {
                console.error('Error adding workout:', error);
            }
        });
    });
});

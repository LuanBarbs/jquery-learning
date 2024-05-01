// Primeiras aulas
// $(document).ready(function() {
   
//     console.log('We are ready!');
//     $('body').html('<strong>Hello World!</strong>');
// });

// Aula 4 e 5
// $(document).ready(function() {
//     $('#container >>> .non-solid').addClass('highlight');
// });

// Aula 6
$(document).ready(function () {
    // $('#container input:required').addClass('highlight');
    // $('#container input[placeholder=E-mail]').addClass('highlight');
    $('#container input[placeholder*=Name]').addClass('highlight');
});
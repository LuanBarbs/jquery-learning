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
// $(document).ready(function () {
//     // $('#container input:required').addClass('highlight');
//     // $('#container input[placeholder=E-mail]').addClass('highlight');
//     $('#container input[placeholder*=Name]').addClass('highlight');
// });

// Aula 7
// $(document).ready(function () {
//     // console.log($('#container').find('.hot'));
//     // console.log($('#container').find('.hot').children());
//     $('#container')
//     .find('.hot')
//     .children('.non-solid')
//     .addClass('highlight');
// });

// Aula 8
// $(document).ready(function() {
//     $('#container')
//     .find('.hot')
//     .children()
//     .first()  // || .last()
//     .next() // || .prev()
//     .addClass('highlight');
// });

// Aula 10
// $(document).ready(function() {
//     $('.box').on('click', '.box-button', function() {
//         $(this).parent().toggleClass('highlight');
//     });
// });

// Aula 12
// $(document).ready(function() {
//     $('#select-menu').on('change', function(){
//         let name = $('#select-menu option:selected').text();
//         let distance = $('#select-menu option:selected').val();
//         let price = $('#select-menu option:selected').data('price');
//         if(distance) {
//             $('#feedback-message').text('You are signing up for ' + name + ', which costs ' + price + ', to a distance of ' + distance + 'km.');
//         }
//         else {
//             $('#feedback-message').empty();
//         }
//     });
// });

// Aula 13
// $(document).ready(function() {
//     $('#input-name').on('keyup', function() {
//         let name = $(this).val();
//         $('#feedback-message').text('Please to meet you, ' + name);
//     });
//     $('a').on('click', function(event) {
//         event.preventDefault();
//         $('#feedback-message').text('That\'s fine!');
//     });
// });

// Aula 15
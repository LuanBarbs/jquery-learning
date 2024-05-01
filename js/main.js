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
var cart = 0;

function addItem(id, name, description, price, moreInfo) {
    let html = '';
    html += '<div class="item" data-id="' + id + '">';
        html += '<div class="name">' + name + '</div>';
        html += '<img src="assets/beach.jpeg" alt="Imagem de praia.">';
        html += '<div class="description">' + description + '</div>';
        html += '<div class="price">' + price + '</div>';
        html += '<button class="item-add">Add to cart</button>';
        html += '<button class="item-remove">Remove</button>';
        html += '<br>';
        html += '<a class="more-info-link" href="#">Mais informações</a>';
        html += '<div class="more-info">' + moreInfo + '</div>';
    html += '</div>';

    $('#container').prepend(html);
}

$(document).ready(function() {
    $('#container').on('click', '.item-remove', function() {
        $(this).parent().remove();
    });
    $('#container').on('click', '.more-info-link', function(event) {
        event.preventDefault();
        $(this).parent().find('.more-info').slideToggle('slow');
        $(this).animate({ "opacity": 0.5, "margin-left": 10 }, 150);
        $(this).animate({ "opacity": 1.0, "margin-left": 0 }, 150);
    });

    $.ajax('data/item.json', {
        dataType: 'json',
        contentType: 'application/json',
        cache: false
    })
        .done(function(response) {
            let itens = response.item;
            itens.forEach(function(item) {
                addItem(item.id, item.name, item.description, item.price, item.moreInfo);
            });
        })
        .fail(function(request, errorType, errorMessage) {
            console.log(errorMessage);
        })
        .always(function() {});

    $('#container').on('click', '.item-add', function() {
        let id = $(this).parent().data('id');
        $.ajax('data/addToCart.json', {
            type: 'post',
            data: { id: id },
            dataType: 'json',
            contentType: 'application/json'
        })
            .done(function(response) {
                if(response.message === 'sucesso') {
                    let price = response.price;
                    cart += price;
                    $('#cart-container').text('$' + cart);
                }
            })
    });

    $('#newsletter-checkbox').on('change', function() {
        if($(this).is(':checked')) {
            $('#newsletter-frequency').fadeIn();
        } else {
            $('#newsletter-frequency').fadeOut();
        }
    });
    $('#newsletter-checkbox').trigger('change');

    $('#cart-form').on('submit', function(event) {
        event.preventDefault();
        let data = { form: $(this).serialize(), price: cart };
        $.ajax($(this).attr('action'), {
            type: 'post',
            data: data
        })
            .done(function(response) {
                $('#feedback-message').text(response.message);
            });
    });
});
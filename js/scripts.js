//funcion donde se desarrolla todo el contenido de nuestro programa.
$(function(){
    'use strict';

    /*
    .########.##.....##.########.##....##.########..#######...######.
    .##.......##.....##.##.......###...##....##....##.....##.##....##
    .##.......##.....##.##.......####..##....##....##.....##.##......
    .######...##.....##.######...##.##.##....##....##.....##..######.
    .##........##...##..##.......##..####....##....##.....##.......##
    .##.........##.##...##.......##...###....##....##.....##.##....##
    .########....###....########.##....##....##.....#######...######.
    */


    $('#menu').on('click', function () {
        $('#navegacion').show();
    });


    //Eventos con el mouse
    // $('div.logo img').on('mouseenter', function () {
    //     console.log('Sobre el logo');
    // });

    // $('div.logo img').on('mouseleave', function () {
    //     console.log('Fuera del logo');
    // });
   

    //Al hacer click remueve el logo
    // $('div.logo img').on('click', function () {
    //     $(this).remove();
    // });
   
    //Ocultar un elemento
    /*$('main article:first').hide();*/

    //como crear un evento con Jquery
    /*$('div.logo img').on('click',function() {
        console.log('Has hecho click en el logo');
    });*/


    //append agrega al final el objeto clonado
    //prepend agrega al inicio el objeto clonado
    // var copia = $('main article:last').clone();
    // $('main').prepend(copia);

    //Otra manera de como hacer lo mismo
    // var copia = $('main article:last').clone();
    // $(copia).prependTo('main');
 
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var homeThat;
var indexVista = {
    init: function () {
        homeThat = this;
        console.log('Home Cargado');
        $('#btnNav').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens,
            onOpen: function (el) {}, // A function to be called when sideNav is opened
            onClose: function (el) {}, // A function to be called when sideNav is closed
        });
    }
};
indexVista.init();


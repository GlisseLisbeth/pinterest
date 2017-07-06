(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const btnNav = (textBtn, aditionalclass, iconClass)=>{
  const aBtn = $('<a class="btn btn-default  header__nav--btn '+aditionalclass+'" href="#">');
  const icon = $('<i class="'+iconClass+'">');
  const text = $('<p class="hidden-xs">'+textBtn+'</p>');
  return aBtn.append(icon, text);
}

const search = (searchClass, searchId)=>{
  const searchContainer = $('<div class="'+searchClass+'" id="'+searchId+'">');
  const searchIcon = $('<i class="icon-search">');
  const searchInp = $('<input type="text" class="form-control header__nav--btn" placeholder="Buscar">');

  return searchContainer.append(searchIcon, searchInp);
}

const header = (update)=>{
  const containerHeader = $('<header class="navbar navbar-default navbar-fixed-to header container-fluid bg-white">');
  const navHeader = $('<nav class="header__nav col-xs-12">');
  const btnSearch = btnNav('Buscar', 'visible-xs', 'icon-search');
  const searchToShow = search('form-group col-xs-12 hidden hidden-sm hidden-md hidden-lg', 'search-inp');

  navHeader.append(btnNav('Inicio', '', 'icon-pinterest'), btnSearch, search('form-group col-sm-10 hidden-xs', 'search-default'), btnNav('Usuario', '', 'icon-user'), btnNav('Categorías', '', 'icon-menu'), btnNav('Notificaciones', '', 'icon-comment'));

  containerHeader.append(navHeader, searchToShow);

  btnSearch.on('click', ()=>{
    searchToShow.toggleClass('hidden');
  })
  return containerHeader;
}

},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const suggestedName = (name)=>{
  const sugName = $('<a href="#" class="list-group-item"><i class="icon-plus"></i>'+name+'</a>');
  return sugName;
}

const createSaveModal = (update)=>{
  const modalContainer = $('<div class="modal fade" id="saveModal" role="dialog"></div>');
  const modalDialog = $('<div class="modal-dialog"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const modalContentImg = $('<div class="modal-content__img col-xs-6"></div>');
  const imgContainer = $('<div class="media"></div>');
  const pinImg = $('<img alt="" class="img-responsive">');
  const editContainer = $('<div></div>')
  const editName = $('<input type="text" class="form-control" id="board-name" placeholder="Dale un nombre a tu primer tablero">');
  modalContentImg.append(imgContainer.append(pinImg), editContainer.append(editName));
  const modalContentDescription = $('<div class="modal-content__description col-xs-6"></div>');
  const modalHeader = $('<div class="modal-header"></div>');
  const btnClose = $('<button type="button" class="close" data-dismiss="modal">&times;</button>');
  const title = $('<h4 class="modal-title">Crear tablero</h4>');
  modalHeader.append(btnClose, title);
  const modalBody = $('<div class="modal-body"></div>');
  const lblBoardName = $('<label for="board-name">NOMBRE:</label>');
  const inpBoardName = $('<input type="text" class="form-control" id="board-name" placeholder="Dale un nombre a tu primer tablero">');
  const subtitle = $('<p>Nombres sugeridos para tu tablero</p>');
  const listNames = $('<div class="list-group"></div>');
  listNames.append(suggestedName('Creativo'), suggestedName('Textos'), suggestedName('Gráficos'), suggestedName('Diseño'), suggestedName('Disposición'), suggestedName('Parques'));
  modalBody.append(lblBoardName, inpBoardName, subtitle, listNames);
  const modalFooter = $('<div class="modal-footer"></div>');
  const btnCancel = $('<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>');
  const btnCreate = $('<button type="button" class="btn btn-default" data-dismiss="modal">Crear</button>');
  modalFooter.append(btnCancel, btnCreate);
  modalContentDescription.append(modalHeader, modalBody, modalFooter);
  modalContent.append(modalContentImg, modalContentDescription);
  modalContainer.append(modalDialog.append(modalContent));

  $('#btn-save').on('click', ()=>{
    $.get("https://api.pinterest.com/v1/pins/523473156678884261/?access_token=ATLVkpU1AzU-WC0DWQStYpu4HiB_FM6Kk0cL9EhEItzOC6A2WgAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Ccreator%2Cimage%2Coriginal_link",(data)=>{
      console.log(data);
      state.pin = data.data.image.original.url;
      console.log(state.pin);
      pinImg.attr('src', state.pin);
    });
  })

  return modalContainer;
}

},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const getJSON = (url, cb) => { //url es la direccion de archivo json

  const xhr = new XMLHttpRequest(); //hace pedido reuest al servidrr

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) { //200-> error de protocolo http, ok
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const list = state.pins;

  wrapper.append(header(_=>{render(root)}));
  wrapper.append(createSaveModal(_=>{render(root)}));

  root.append(wrapper);
}
const state = {
    pins: null,
    id:null
}

$(_ => {
  getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AR1ezCPQvOjgIniGPFyboS_ooLgIFM42OdzL6V9EI3AfhAAp8AAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Ccreator%2Cimage%2Cmedia%2Cmetadata%2Coriginal_link',(err,json) =>{
    if (err) {return alert(err.message);}
    state.pins = json.data;
    console.log(json);
    console.log(state.pins);
    const root = $('#root');
  render(root);
  });
});

},{}]},{},[1])
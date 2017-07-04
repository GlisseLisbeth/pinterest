'use strict';

const getJSON = (url, cb) => {
  //url es la direccion de archivo json

  const xhr = new XMLHttpRequest(); //hace pedido reuest al servidrr

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      //200-> error de protocolo http, ok
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};
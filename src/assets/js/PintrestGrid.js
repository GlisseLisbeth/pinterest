'use strict';

const BoardItem = (pinterest,update) => {

  const colcontainer = $('<div class="col-md-3"></div>');
  const divcontentPin = $('<div class="contentPin"></div>');
  const figure = $('<div class="figPin"></div>');
  const a = $('<a data-toggle="modal" data-target="#myModal"></a>');
  const img = $('<img class="pinimg center" src="">');

  figure.append(a);
  a.append(img);

  const div = $('<div class="containerspan"></div>');
  const spancolection = $('<img class=" center" src="assets/icon/valentines-heart.png">');
  const spanLove = $('<img class=" center" src="assets/icon/pinball_gray.png">');
  const spanIntercambio = $('<img class=" center" src="assets/icon/data.png">');
  const pcolection = $('<p id= "pcolection" class="text-center text-uppercase"><strong>'+pinterest.pinterest_species.name+'</strong></p>');

  div.append(spancolection);
  div.append(spanLove);
  div.append(spanIntercambio);

  const divnmbre = $('<div class="containername col-md-12"></div>');

  //divnmbre.append(pcolection);

  colcontainer.append(divcontentPin);
  divcontentPin.append(figure);
  divcontentPin.append(div);
  divcontentPin.append(pcolection);
  colcontainer.append(divnmbre);
  divnmbre.append(PindexDetails());

  let doublePin = colcontainer.map((x)=>{ return x});
  a.on('click',function () {

    $('.pincolContainer').html("");
    $('.pdescription').html("");
    $('.altura').html("");
    $('.peso').html("");
    $('.categoria').html("");
    $('.habilidad').html("");
    $('.tipoPin1').html("");
    $('.tipoPin2').html("");

    $.get(pinterest.pinterest_species.url,(data) => {
      console.log(data);
      let pinterest = doublePoke.prevObject[0];
      let valor = data.flavor_text_entries[3].flavor_text;
      $('.pincolContainer').html(pinterest);
      $('.pdescription').html(valor);
      $('.altura').html(pinterest.pinterest_species.height);
      $('.peso').html(pinterest.pinterest_species.weight);
      $('.categoria').html(pinterest.pinterest_species.shape.name);
      $('.habilidad').html(pinterest.abilities.name);
      $('.tipoPin1').html(pinterest.types[0].type.name);
      $('.tipoPin2').html(pinterest.types[1].type.name);

     })
  });

return colcontainer;
}

const BoardGrid = (update) => {

  const section = $('<section id ="sectionPin"></section>');
  const container  = $('<div class="container"></div>');
  // buscador
  const rowbuscar = $('<div class="row"></div>');

  const colbuscar = $('<div class="col-md-12"></div>');
  const input = $('<input type="text" name="" value="">');
  rowbuscar.append(colbuscar);
  colbuscar.append(input);
  //grid de pinterests
  const rowgrid = $('<div class="row"></div>');
  const board = $('<div class="board"></div>');

  section.append(container);
  container.append(rowbuscar);
  container.append(rowgrid);
  rowgrid.append(board);
  // reRender(rowgrid,filterpinterest(state.pinterests,""));
  const list = state.pins;
  list.forEach((pin) => {
    board.append(itemBoard(pin));
  });

  return section;
}

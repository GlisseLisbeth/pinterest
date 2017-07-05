'use strict';

const BoardItem = (pinterest,update) => {

  const colcontainer = $('<div class="col-md-3"></div>');
  const divcontentPin = $('<div class="contentPin"></div>');
  const figure = $('<div class="figPin"></div>');
  const a = $('<a data-toggle="modal" data-target="#myModal"></a>');
  const img = $('<img class="pinimg center" src="'+elemento.image.original.url+'">');

  figure.append(a);
  a.append(img);

  const divnmbre = $('<div class="containername col-md-12"></div>');

  //divnmbre.append(pcolection);

  colcontainer.append(divcontentPin);
  divcontentPin.append(figure);
  colcontainer.append(divnmbre);
  divnmbre.append(PinDetails());

  let doublePin = colcontainer.map((x)=>{ return x});
  // a.on('click',function () {
  //
  //   $.get(,(data) => {
  //
  //
  //    })
  // });

return colcontainer;
}

const BoardGrid = (update) => {

  const section = $('<section id ="sectionPin"></section>');
  const container  = $('<div class="container"></div>');

  const rowgrid = $('<div class="row"></div>');
  const board = $('<div class="board"></div>');

  section.append(container);
  container.append(rowgrid);
  rowgrid.append(board);
  // reRender(rowgrid,filterpinterest(state.pinterests,""));
  const list = state.pins;
  list.forEach((pin) => {
    board.append(itemBoard(pin));
  });

  return section;
}

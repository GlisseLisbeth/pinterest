'use strict';

const BoardItem = (pinterest,ide,update) => {
  console.log(state.pin);
  const colcontainer = $('<div class="col-md-3"></div>');
  const divcontentPin = $('<div class="contentPin"></div>');
  const figure = $('<div class="figPin"></div>');
  const a = $('<a data-toggle="modal" data-target="#myModal"></a>');

  const img = $('<img class="pinimg center" src="'+pinterest.image.original.url+'">');

  figure.append(a);
  a.append(img);

  const divnmbre = $('<div class="containername col-md-12"></div>');

  //divnmbre.append(pcolection);

  colcontainer.append(divcontentPin);
  divcontentPin.append(figure);

  colcontainer.append(divnmbre);
  divnmbre.append(PinDetails(update));

  a.on('click',function () {
    $.get("https://api.pinterest.com/v1/pins/"+ide+"/?access_token=ATLVkpU1AzU-WC0DWQStYpu4HiB_FM6Kk0cL9EhEItzOC6A2WgAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Ccreator%2Cimage%2Coriginal_link",(data)=>{
      state.pin = data.data.image.original.url;
      $('#pinImage').attr('src',state.pin);
    });
  });

  state.pin = ide;
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
  const list = state.board;
  list.forEach((pin) => {
    console.log(pin.id);
    let ide = pin.id;
    board.append(BoardItem(pin,ide,update));
  });

  return section;
}

'use strict';

const BoardItem = (pinterest,update) => {
  console.log(pinterest);
  const figure = $('<div class="pin"></div>');
  const a = $('<a data-toggle="modal" data-target="#myModal"></a>');

  const img = $('<img class="pinimg center" src="'+pinterest.image.original.url+'">');
  const p = $('<p>'+pinterest.note+'</p>');

  figure.append(a);
  figure.append(p);
  a.append(img);


  let doublePin = figure.map((x)=>{ return x});
  // a.on('click',function () {
  //
  //   $.get(,(data) => {
  //
  //
  //    })
  // });


return figure;
}

const BoardGrid = (update) => {

  const section = $('<section id ="sectionPin"></section>');
  const container  = $('<div class="container-fluid" style="background:red"></div>');
  const rowgrid = $('<div class="row" style="background:yellow"></div>');
  const board = $('<div id="wrapper" class="board col-md-10 col-md-offset-1" col-xs-2 style="background:black"></div>');
  const columns = $('<div id="columns"></div>');
  section.append(container);
  container.append(rowgrid);
  rowgrid.append(board);
  board.append(columns);
  // reRender(rowgrid,filterpinterest(state.pinterests,""));
  const list = state.pins;
  list.forEach((pin) => {
    columns.append(BoardItem(pin));
  });

  return section;
}

'use strict';

const BoardItem = (pinterest, update) => {
  const gridItem = $('<div class="grid__item"></div>');
  const div = $('<div></div>');
  const sliderItem = $('<div class="slider__item"></div>');
  const a = $('<a data-toggle="modal" data-target="#myModal"></a>');
  const img = $('<img src="'+pinterest.image.original.url+'">');
  const name = $("<p> " + pinterest.note + "</p>");
  const user = $('<div class="meta"></div>');
  const imgUser = $('<img class="meta__brand" src="" alt="">');
  const nameUser = $('<span class="meta__title"></span>');
  const btnSave = $('<button class="btn-save"><i class="glyphicon glyphicon-pushpin"></i>Guardar</button>');
  const btnShare = $('<button class="btn-share"><i class="glyphicon glyphicon-share"></i></button>');

  if (pinterest.metadata.article != undefined) {
       var linkTitle = $("<p> " + pinterest.metadata.article.name + "</p>");
  }
  gridItem.append(div);
  div.append(sliderItem);
  sliderItem.append(a);
  a.append(img);
  gridItem.append(btnSave);
  gridItem.append(btnShare);
  gridItem.append(divImgDin);
  gridItem.append(user);
  gridItem.append(name);
  user.append(imgUser);
  user.append(nameUser);
  let doublePin = gridItem.map((x)=>{ return x});
  // a.on('click',function () {
  //
  //   $.get(,(data) => {
  //
  //
  //    })
  // });


return gridItem;
}

const BoardGrid = (update) => {

  const grid = $('<section class="grid"></div>');
  // reRender(rowgrid,filterpinterest(state.pinterests,""));
  const list = state.pins;
  list.forEach((pin) => {
    grid.append(BoardItem(pin));
  });
  return grid;
}

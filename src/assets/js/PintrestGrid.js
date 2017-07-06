'use strict';

const BoardItem = (pinterest, ide, update) => {
  const gridItem = $('<div class="grid__item"></div>');
  const div = $('<div></div>');
  const sliderItem = $('<div class="slider__item"></div>');
  const a = $('<a data-toggle="modal" data-target="#myModal"></a>');
  const img = $('<img src="'+pinterest.image.original.url+'">');
  const name = $("<p> " + pinterest.note + "</p>");
  const user = $('<div class="meta"></div>');
  const imgUser = $('<img class="meta__brand" src="" alt="">');
  const nameUser = $('<span class="meta__title"></span>');
  const btnSave = $('<button class="btn-save"><i class="icon-pin"></i>Guardar</button>');
  const btnShare = $('<button class="btn-share"><i class="icon-share"></i></button>');

  if (pinterest.metadata.article != undefined) {
       var linkTitle = $("<p> " + pinterest.metadata.article.name + "</p>");
  }
  gridItem.append(div);
  div.append(sliderItem);
  sliderItem.append(a);
  a.append(img);
  gridItem.append(btnSave);
  gridItem.append(btnShare);
  gridItem.append(user);
  gridItem.append(name);
  user.append(imgUser);
  user.append(nameUser);
  let doublePin = gridItem.map((x)=>{ return x});

  a.on('click',function () {
    $.get("https://api.pinterest.com/v1/pins/"+ide+"/?access_token=ATLVkpU1AzU-WC0DWQStYpu4HiB_FM6Kk0cL9EhEItzOC6A2WgAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Ccreator%2Cimage%2Coriginal_link",(data)=>{
      state.pin = data.data.image.original.url;
      $('#pinImage').attr('src',state.pin);
    });
  });

return gridItem;
}

const BoardGrid = (update) => {

  const grid = $('<section class="grid"></div>');
  // reRender(rowgrid,filterpinterest(state.pinterests,""));
  const list = state.board;
  list.forEach((pin) => {
    let ide = pin.id;
   grid.append(BoardItem(pin,ide,update));
  });
  return grid;
}

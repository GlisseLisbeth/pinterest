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

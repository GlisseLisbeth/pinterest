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

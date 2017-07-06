'use strict';

const suggestedName = (name)=>{
  const sugName = $('<a href="#" class="list-group-item"><i class="icon-plus"></i>'+name+'</a>');
  return sugName;
}

const createSaveModal = (update)=>{
  console.log(state.pin);
  const modalContainer = $('<div class="modal fade" id="saveModal" role="dialog"></div>');
  const modalDialog = $('<div class="modal-dialog"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const modalContentImg = $('<div class="modal-content__img col-xs-6"></div>');
  const imgContainer = $('<div class="media"></div>');
  const pinImg = $('<img alt="" src='+state.pin+'class="img-responsive"> ');
  const editContainer = $('<div></div>')
  const editName = $('<input type="text" class="form-control" id="board-name" readonly>');
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
  const btnCreate = $('<button type="button" class="btn btn-default" disabled>Crear</button>');
  modalFooter.append(btnCancel, btnCreate);
  modalContentDescription.append(modalHeader, modalBody, modalFooter);
  modalContent.append(modalContentImg, modalContentDescription);
  modalContainer.append(modalDialog.append(modalContent));

  inpBoardName.on('keyup', ()=>{
    if(inpBoardName.val() != ''){
      btnCreate.removeAttr('disabled');
      btnCreate.removeClass('btn-default');
      btnCreate.addClass('bg-primary');
    }
  });

  editName.on({
    focusin: ()=>{
      editName.removeAttr('readonly');
    },
    focusout: ()=>{
      editName.attr('readonly', 'readonly');
    }

  });
  
  return modalContainer;
}

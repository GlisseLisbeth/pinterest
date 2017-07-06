const PinDetails = (update) => {
  const modalfade = $('<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">  </div>');
  const modalDialog = $('<div class="modal-dialog" role="document"></div>');
  const modalDescription = $('<div class="modal-pindescription"></div>')
  const modalContent = $('<div class="modal-content"></div>');
  const modalHeader = $('<div class="modal-header"></div>');
  const modalBody = $('<div class="modal-body"></div>');

  modalfade.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(modalHeader);
  modalContent.append(modalBody);

  const buttonclose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
  const h4modalTitle = $('<h4 class="modal-title" id="myModalLabel"></h4>');
  const buttonSave = $('<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#saveModal" id="btn-save">Open Modal</button>');

  modalHeader.append(buttonclose);
  modalHeader.append(h4modalTitle);
  modalHeader.append(buttonSave);

  const containermodal = $('<div class="container container-modal"></div>');
  const row1 = $('<div class="row"></div>');
  containermodal.append(row1);
  const col1 = $('<div class="col-md-5 col-sm-5"></div>');
  row1.append(col1);
  const pincolContainer = $('<div class="pincolContainer"></div>');
  const img = $('<img id="pinImage" class="img-responsive " src="">');

  col1.append(pincolContainer);
  pincolContainer.append(img);
  modalBody.append(containermodal);

  buttonclose.click((e)=>{
    e.preventDefault();
    state.pin= null;
    $('#pinImage').attr('src',"");
  });

  return modalfade;
}

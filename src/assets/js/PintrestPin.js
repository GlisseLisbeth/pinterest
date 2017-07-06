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

  const buttonSave = $('<button type="button" class="btn bg-primary" data-toggle="modal" data-target="#saveModal" id="btn-save"><i class="icon-pin"></i>Guardar</button>');
  const buttonclose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

  modalHeader.append(buttonclose);
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

  buttonSave.on('click', ()=>{
    console.log('click save');
    $.get("https://api.pinterest.com/v1/pins/523473156678884261/?access_token=ATLVkpU1AzU-WC0DWQStYpu4HiB_FM6Kk0cL9EhEItzOC6A2WgAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Ccreator%2Cimage%2Coriginal_link",(data)=>{
      console.log(data);
      state.pin = data.data.image.original.url;
      console.log(state.pin);
      // pinImg.attr('src', state.pin);
    });
  })

  buttonclose.click((e)=>{
    e.preventDefault();
    state.pin= null;
    $('#pinImage').attr('src',"");
  });

  buttonSave.click((e)=>{
    e.preventDefault();
    $('#saveImg').attr('src',state.pin);
  });

  return modalfade;
}

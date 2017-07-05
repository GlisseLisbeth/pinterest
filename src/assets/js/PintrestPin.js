const PokedexDetails = () => {

const modalfade = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">  </div>');
const modalDialog = $('<div class="modal-dialog" role="document"></div>');
const modalDescription = $('<div class="modal-pokedescription"></div>')
const modalContent = $('<div class="modal-content"></div>');
const modalHeader = $('<div class="modal-header"></div>');
const modalBody = $('<div class="modal-body"></div>');

modalfade.append(modalDialog);
modalDialog.append(modalContent);
modalContent.append(modalHeader);
modalContent.append(modalBody);

const buttonclose = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
const h4modalTitle = $('<h4 class="modal-title" id="myModalLabel"></h4>');

modalHeader.append(buttonclose);
modalHeader.append(h4modalTitle);

const containermodal = $('<div class="container container-modal"></div>');
const row1 = $('<div class="row"></div>');
containermodal.append(row1);
const col1 = $('<div class="col-md-5 col-sm-5"></div>');
row1.append(col1);
const pokecolContainer = $('<div class="pokecolContainer"></div>');
col1.append(pokecolContainer);
const col2 = $('<div class="col-md-7 col-sm-7"></div>');
row1.append(col2);
const pokecolDescription = $('<div class=" row pokecolDescription"></div>');
col2.append(pokecolDescription);

const col3 = $('<div class="col-md-12"></div>');
const col4 = $('<div class="col-md-12"></div>');
const col5 = $('<div class="col-md-12"></div>');
pokecolDescription.append(col3);

const pdescription = $('<p class="descripcion"></p>');
const caracteristicas = $('<div class="caracteristicas"></div>');
col3.append(pdescription);
col3.append(caracteristicas);

const col6 = $('<div class="col-md-6"></div>');
const col7 = $('<div class="col-md-6"></div>');

caracteristicas.append(col7);

modalBody.append(containermodal);

return modalfade;
}

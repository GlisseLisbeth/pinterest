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
caracteristicas.append(col6);
const paltura = $('<p>Altura</p>');
const spanaltura = $('<span class="altura"></span>');
const ppeso = $('<p>Peso</p>');
const spanpeso = $('<span class="peso"></span>');
const psexo = $('<p>Sexo</p>');
const spansexo = $('<span class="sexo"></span>');
col6.append(paltura);
col6.append(spanaltura);
col6.append(ppeso);
col6.append(spanpeso);
col6.append(psexo);
col6.append(spansexo);

caracteristicas.append(col7);
const pcategoria = $('<p>Categoria</p>');
const spancategoria = $('<span class="categoria"></span>');
const phabilidad = $('<p>Habilidad</p>');
const spanhabilidad= $('<span class="habilidad"></span>');
col7.append(pcategoria);
col7.append(spancategoria);
col7.append(phabilidad);
col7.append(spanhabilidad);

pokecolDescription.append(col4);
const h4Tipo = $('<h4>Tipo</h4>');
const tipoPoke = $('<div class="tipoPoke"></div>');
col4.append(h4Tipo);
col4.append(tipoPoke);
const col8 = $('<div class="col-md-6"></div>');
const col9 = $('<div class="col-md-6"></div>');
tipoPoke.append(col8);
const spantipoPoke1 = $('<span class="tipoPoke1"></span>');
col8.append(spantipoPoke1);
tipoPoke.append(col9);
const spantipoPoke2 = $('<span class="tipoPoke2"></span>');
col9.append(spantipoPoke2);

pokecolDescription.append(col5);
const debilidadPoke = $('<div class="debilidadPoke"></div>');
col5.append(debilidadPoke);
const h4Debilidad= $('<h4>Debilidad</h4>');
const col10 = $('<div class="col-md-4"></div>');
const col11 = $('<div class="col-md-4"></div>');
const col12 = $('<div class="col-md-4"></div>');
const col13 = $('<div class="col-md-4"></div>');

debilidadPoke.append(h4Debilidad);
debilidadPoke.append(col10);
debilidadPoke.append(col11);
debilidadPoke.append(col12);
debilidadPoke.append(col13);

const spandebilidadPoke1 = $('<span class="debilidadPoke1"></span>');
const spandebilidadPoke2 = $('<span class="debilidadPoke2"></span>');
const spandebilidadPoke3 = $('<span class="debilidadPoke3"></span>');
const spandebilidadPoke4 = $('<span class="debilidadPoke4"></span>');
col10.append(spandebilidadPoke1);
col11.append(spandebilidadPoke2);
col12.append(spandebilidadPoke3);
col13.append(spandebilidadPoke4);

modalBody.append(containermodal);

return modalfade;
}

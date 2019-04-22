const Atm = require('./models/atm.js');
const SelectView = require('./views/select_view.js');
const AtmInfoView = require('./views/atm_info_view.js');


document.addEventListener('DOMContentLoaded', () => {


  const atmDropdown = new SelectView();
  atmDropdown.bindEvents();

  const atmInfoDisplay = new AtmInfoView();
  atmInfoDisplay.bindEvents();

  const atm = new Atm();
  atm.bindEvents();
  atm.getData();

});

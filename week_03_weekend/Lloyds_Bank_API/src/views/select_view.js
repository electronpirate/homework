const PubSub = require('../helpers/pub_sub.js');

class SelectView{

  constructor(){
    this.element = document.querySelector('select#atm-city');
  }

  bindEvents(){
    PubSub.subscribe('Atm:atm-data-loaded', (event) =>{
      const allAtms = event.detail;
      console.log(allAtms);
      this.populate(allAtms);
    });

    this.element.addEventListener('change', (event) => {
      const selectIndex = event.target.value;
      PubSub.publish('SelectView:change', selectIndex);
    });
  };

  populate(atmData){
    atmData.forEach((atm, index) => {
      const option = document.createElement('option');
      option.textContent = atm.Location.PostalAddress.TownName;
      console.log(atm.Location.PostalAddress.TownName);
      option.value = index;
      this.element.appendChild(option);

    })
  }

}

module.exports = SelectView;

const PubSub = require('../helpers/pub_sub.js');


class AtmInfoView {

  constructor(){

    this.container = document.querySelector('div#atm-info');
  }

  bindEvents(){

    PubSub.subscribe('Atm:selected-atm-ready',(event) => {
      const data = event.detail;
      this.render(data);
    });
  }

  render(atmDetailedData){
    const cityName = document.createElement('h3');
    cityName.textContent = `City: ${atmDetailedData.Location.PostalAddress.TownName}`;
    const streetName = document.createElement('p');
    streetName.textContent = `Street: ${atmDetailedData.Location.PostalAddress.AddressLine}`;


    // forEach loop to create vertical List

    this.container.innerHTML = '';
    this.container.appendChild(cityName);
    this.container.appendChild(streetName);
  }
}

module.exports = AtmInfoView;

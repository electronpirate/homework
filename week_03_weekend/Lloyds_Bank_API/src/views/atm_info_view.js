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
    var addr = atmDetailedData.Location.PostalAddress.AddressLine;
    addr = addr[0].substring(1, addr[0].length - 1);
    streetName.textContent = `Street: ${addr}`;
    const postCode = document.createElement('p');
    postCode.textContent = `Post Code: ${atmDetailedData.Location.PostalAddress.PostCode}`;
    const textLine = document.createElement('p');
    textLine.textContent = 'Service available:'
    const ul = document.createElement('ul');


    atmDetailedData.ATMServices.forEach((serv) => {
      const atmServices = document.createElement('li');
      atmServices.textContent = `${serv}`;
      ul.appendChild(atmServices);

    })




    // forEach loop to create vertical List

    this.container.innerHTML = '';
    this.container.appendChild(cityName);
    this.container.appendChild(streetName);
    this.container.appendChild(postCode);
    this.container.appendChild(textLine);
    this.container.appendChild(ul);
  }
}

module.exports = AtmInfoView;

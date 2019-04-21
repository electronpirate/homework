const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Atm{
  constructor(){
    this.data = [];
  }

  getData(){
    const url = 'https://api.lloydsbank.com/open-banking/v2.2/atms'
    const request = new RequestHelper(url);

    request.get()

    .then((data) => {
      this.data = data.data[0].Brand[0].ATM;
      console.log(this.data);
      PubSub.publish('Atm:atm-data-loaded', this.data);
    })
    .catch((message) =>{
      console.error(message);
    });
  }

  bindEvents(){
    PubSub.subscribe('SelectView:change', (event) => {
      const selectedCity = event.detail;
      this.publishAtmDetail(selectedCity);
    });
  };

  publishAtmDetail(atmIndex){
    const selectedAtm = this.data[atmIndex];
    PubSub.publish('Atm:selected-atm-ready', selectedAtm);
  };

};


module.exports = Atm;

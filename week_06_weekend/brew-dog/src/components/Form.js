import React from 'react';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      // first_brewed: '',
      // food_pairing: ''
      category: '',
      categoryOption: ''

      // selectedCategory: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.secondDropDown = this.secondDropDown.bind(this);
    this.getAllOptions = this.getAllOptions.bind(this);
    this.mapFilteredOptions = this.mapFilteredOptions.bind(this);

  }

  getAllOptions(category){
    return this.props.beers.map((beer) => {
      return beer[category];
    });
  }

  filterOptions(options){
    return options.filter((option, index) => {
      return options.indexOf(option) === index;
    });
  }

  mapFilteredOptions(filteredOptions){
    return filteredOptions.map((option, index) => {
      return <option value={option} key={index}>{option}</option>
    });
  }

  firstDropdown(){
    // will populate first dropdown with categories: name, first_brewed, food_pairing
    // if (this.props.beers.length === 0) return
    // console.log(Object.keys(this.props.beers[0]));
    const options = [];
    this.props.categories.forEach((category, index) => {
      options.push(<option value={category} key={index}>{category}</option>)
    })
    return options;

    }




  secondDropDown(){
    // return this.props.beers.map((beer, index) => {
    //
    //   return <option value={index} key={index}>{beer.name}</option>
    // })
    const allOptions = this.getAllOptions(this.state.category);
    const filtered = this.filterOptions(allOptions);
    const mapped = this.mapFilteredOptions(filtered);
    return mapped;
  }

  handleChange(event){
    // will update the second dropdown depending on the category in the first one
    this.setState({category: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const category = this.state.category;
    const categoryOption = this.state.categoryOption;
    const filterCriteria = {category, categoryOption};
    console.log(filterCriteria);
    this.props.updateFilterCriteria(filterCriteria);
  }








  render() {

    return (
      <>
      <div className='cointainer-div'>
      <form className='beer-form' onSubmit={this.handleSubmit}>
      <select onChange={this.handleChange}>{this.firstDropdown()}</select>
      <select>{this.secondDropDown()}</select>
      <input type='submit' className='button' value='view beers' />
      </form>


      </div>
      </>
    );
  }
};


export default Form;

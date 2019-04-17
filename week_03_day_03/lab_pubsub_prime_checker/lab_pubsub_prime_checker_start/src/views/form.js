class FormView{
  bindEvents(){
    // reaching to DOM (index.html) to get id of element
    const form = document.querySelector('#number')
    // adding event listener to check if user enters data
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // storing a variable that the user submitted
      const inputNumber = event.target.text.value;
    })
  }
}

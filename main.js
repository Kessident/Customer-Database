// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';
  const customer = document.querySelector('.customers');
  let header = document.createElement("h1");
  header.innerHTML = "INTERNAL COMPANY DIRECTORY";
  customer.appendChild(header);



  fetch("https://randomuser.me/api/?results=12").then(function(response){
    if (response.status !== 200){
      console.log(response.status);
      return;
    }
    response.json().then(function(data){
      let customers = data.results;
      console.log(data);
      for (let i = 0; i < customers.length; i ++){
        let newCustomer = customers[i];
        let newCard = document.createElement("div");
        newCard.classList.add("customer");

        let pic = document.createElement("img");
        pic.src = newCustomer.picture.large;
        newCard.appendChild(pic);

        let name = document.createElement("h2");
        name.innerHTML = newCustomer.name.first + newCustomer.name.last;
        newCard.appendChild(name);

        let email = document.createElement("p");
        email.classList.add("email");
        email.innerHTML = newCustomer.email;
        newCard.appendChild(email);

        let street = document.createElement("p");
        street.innerHTML = newCustomer.location.street;
        newCard.appendChild(street);

        let location = document.createElement("p");
        location.innerHTML = newCustomer.location.city + newCustomer.location.state + newCustomer.location.postcode;
        newCard.appendChild(location);

        let cellNum = document.createElement("p");
        cellNum.innerHTML = newCustomer.cell;
        newCard.appendChild(cellNum);




        customer.appendChild(newCard);
      }
    });
  });


  // Your Code Goes Here

})();

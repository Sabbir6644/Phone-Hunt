const inputResult = () => {
     const inputField = document.getElementById('input_field');
     const inputValue = inputField.value;
     loadPhone(inputValue)
}

const loadPhone = async (input) => {
     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`);
     // "input"
     const data = await res.json();
     //console.log(data);
     const phones = data.data;
     displayPhone(phones);


}
const displayPhone = phones =>{
     const phoneContainer = document.getElementById('phone-Container');
     phoneContainer.textContent = ''
     phones.forEach(phone => {
          //console.log(phone);
          const div = document.createElement('div');
          div.classList = `card bg-base-100 shadow-xl`;
          div.innerHTML = `
          <figure><img src="${phone.image}" alt="Phone Image" /></figure>
               <div class="card-body">
                 <h2 class="text-3xl text-center">${phone.phone_name}</h2>
                 <p class= "text-2xl text-center">${phone.slug}</p>
                 <div class="card-actions justify-center">
                   <button class="btn btn-primary">Show Details</button>
                 </div>
               </div>
          ` 
          phoneContainer.appendChild(div);
     });
}









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
                   <button onclick= "handleDetailes('${phone.slug}')" class="btn btn-primary">Show Details</button>
                 </div>
               </div>
          ` 
          phoneContainer.appendChild(div);
     });
}

const handleDetailes = async(id) => {
     const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
     const data = await res.json();
     const phone = data.data;
      showModal(phone);

}
const showModal = (phone)=>{
     console.log(phone);
     show_detail_modal.showModal()
     const modalContainer= document.getElementById('modalContainer');
     modalContainer.textContent = ''
     const div = document.createElement('div');
     div.innerHTML = `
     <div class="flex justify-center">
          <img src="${phone.image}" alt="">
     </div>
    <h3 class="font-bold text-lg mt-2">${phone.name}</h3>
    <p><span class="font-bold text-lg">Storage:</span> ${phone.name}</p>
    <p><span class="font-bold text-lg">Display Size:</span> ${phone?.mainFeatures?.displaySize}</p>
    <p><span class="font-bold text-lg">Chipset:</span> ${phone?.mainFeatures?.chipSet}</p>
    <p><span class="font-bold text-lg">Memory:</span> ${phone?.mainFeatures?.memory}</p>
    <p><span class="font-bold text-lg">Slug:</span> ${phone?.slug}</p>
    <p><span class="font-bold text-lg">Release Date:</span> ${phone?.releaseDate}</p>
    <p><span class="font-bold text-lg">Brand:</span> ${phone?.brand}</p>
    <p><span class="font-bold text-lg">GPS:</span> ${phone?.others?.GPS ||'No GPS Available'}</p>
    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
     `
     modalContainer.appendChild(div);
}







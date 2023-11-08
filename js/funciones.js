const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const close = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{

    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{

    nav.classList.remove("visible");
}) 

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_nq7cpr8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
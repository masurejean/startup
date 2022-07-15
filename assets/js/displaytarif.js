import { services } from "../js/services.js";

// todo  affichage

let txt = "";

services.map(element => {
    /* console.log(element); */
    txt +="<div class= 'service " + element.titre + "'>"+
    "<div class='titre'><p>"+element.titre+"</p></div>"+
    "<div class= 'stockage'><p><span>"+element.stokcage+"</span> storage</p></div>"+
    "<div class='mail'><p><span>"+element.mail+"</span> mails</p></div>"+
    "<div class= 'domaine'><p><span>"+element.domaine+"</span> Domains</p></div>"+
    "<div class= 'support'><p><span>"+element.support+"</span> support</p></div>"+
    "<div class= 'prix'><p><span>"+element.prix+"</span> per month</p></div>"+
    "<div class = 'signup'><button>sign up </button></div>"+
    "</div>";
    
});
 let allPrice = document.getElementById("allPrice");
    allPrice.innerHTML = txt;

 
    

    
  
    
 
    










 

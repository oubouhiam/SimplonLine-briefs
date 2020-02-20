var slide = new Array("../media/background/back.jpg", "../media/background/backdrone.jpg", "../media/background/backfilm.jpg", "../media/background/backcamera.jpg" );
  var numero = 0;
  var s=0;
window.onload=function (){
        setInterval(ChangeSlide,3000);      
    }
var r=0;
  function ChangeSlide() {
     s=1;
     numero +=s;
      if (numero < 0){
          numero = slide.length -1 ;
          s++;
      }
      if (numero > slide.length -1){
          numero = 0;
          s=0;
      }
      document.getElementById("slide").src = slide[numero];
  }
  function inscrir(){
    var nom =document.getElementById("nom").value,
        prenom =document.getElementById("prenom").value,
        email =document.getElementById("email").value,
        confirmation =document.getElementById("confirmation").value,
        motedepasse =document.getElementById("motedepasse").value;
    var exp =  new RegExp(/^[A-Za-z-0-9-_.]+@[A-Za-z]{4,7}.[A-Za-z]{2,3}$/);

    if(nom == "" || prenom == "" || motedepasse == "" || email == "" || confirmation == ""){

               alert("vous devez entrer tous champs obligatoire");
               console.log("nom");

    }else{

        if(exp.test(email) == false){
            alert("vous devez respécter la forme de email");
            console.log("email")
        }else{
            alert("Merci!");
        }
    }
}
function reserve(){
    var nom =document.getElementById("nom").value,
        prenom =document.getElementById("prenom").value,
        email =document.getElementById("email").value,
        tele =document.getElementById("tele").value,
        adresse =document.getElementById("adresse").value,
        zipcode =document.getElementById("zipcode").value,
        date1 =document.getElementById("date1").value,
        date2 =document.getElementById("date2").value;
    var confermalert=document.getElementById("confermalert");
    var affichage=document.getElementById("affichage");
    var backtrans=document.getElementById("backtrans");
    var exp =  new RegExp(/^[A-Za-z-0-9-_.]+@[A-Za-z]{4,7}.[A-Za-z]{2,3}$/);
 
    if(nom == "" || prenom == "" || tele == "" || email == "" || adresse == "" || zipcode == "" || date1 == "" || date2 == "" ){

               alert("vous devez entrer tous champs obligatoire");
               console.log("nom");

    }else{

        if(exp.test(email) == false){
            alert("vous devez respécter la forme de email");
            console.log("email")
        }else{
            confermalert.style.display="block";
            fenetre.style.display="none";
            affichage.innerHTML=" <span style='color:black'> Le Prenom est : </span>" + prenom + "<br>" + "<span style='color:black'>Le Nom est :</span>" + nom + "<br>" + "<span style='color:black'>Email est : </span>" + email + "<br>" + "<span style='color:black'>telephone est :</span>" +tele +"<br>" +  "<span style='color:black'> Adresse est :</span>" + adresse + "<br>" + "<span style='color:black'> Zip Code est :</span>" + zipcode + "<br>" + "<span style='color:black'>De :</span>" + date1 + "<br>" + "<span style='color:black'>Jusqu'a :</span>" + date2 + "<br>";
        }
    }
}
function confirmé(){
    alert("bien confirmé")
    confermalert.style.display="none";
    backtrans.style.display="none";
}
var fenetre= document.getElementById("fenetre");
function confirmation(){
fenetre.style.display="block";
backtrans.style.display="block"
console.log("valid");
}
var fenetre=document.getElementById("fenetre");
function closes(){
    fenetre.style.display="none";
    confermalert.style.display="none";
    backtrans.style.display="none";
    console.log("valid");
}
function viders(){
    nom="";
    prenom="";
    email="";
    tele="";
    adresse="";
    zipcode="";
    date1="";
    date2="";
}


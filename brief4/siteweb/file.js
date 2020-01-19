function validation(){
    var nom =document.getElementById("Nom").value,
        prenom =document.getElementById("prenom").value,
        email =document.getElementById("email").value,
        telephone =document.getElementById("telephone").value,
        ville =document.getElementById("ville").value,
        sujet =document.getElementById("sujet").value,
        message =document.getElementById("message").value;
    var exp =  new RegExp(/^[A-Za-z-0-9-_.]+@[A-Za-z]{4,7}.[A-Za-z]{2,3}$/);

    if(nom == "" || prenom == "" || sujet == "" || email == "" || message == ""){

               alert("vous devez entrer tous champs obligatoire");

    }else{

        if(exp.test(email) == false){
            alert("vous devez respécter la forme de email");

        }else{
            alert("la forme bien valide");
        }

    }
}
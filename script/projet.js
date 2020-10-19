$( document ).ready(function() {

    document.getElementById("name").innerHTML=localStorage.getItem("name");
    document.getElementById("name2").innerHTML=localStorage.getItem("name")
    document.getElementById("name3").innerHTML=localStorage.getItem("name");;
    document.getElementById("author").innerHTML=localStorage.getItem("author");
    var disponible =localStorage.getItem("disponible");
    document.getElementById("disponible").innerHTML= disponible;
    document.getElementById("cour").innerHTML=localStorage.getItem("class");
    document.getElementById("description").innerHTML=localStorage.getItem("description");
    if(disponible==0){
        document.getElementById("bookingButton").style.display="none";
        document.getElementById("waitListButton").style.display="inline-block";
    }else{
        document.getElementById("bookingButton").style.display="inline-block";
        document.getElementById("waitListButton").style.display="none";
    }
});
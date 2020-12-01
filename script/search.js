var find="";
function search(){
	if(searchLoad()){
	var par= document.getElementById("par").innerHTML;
	var books = $( ".book" );
$( ".book" ).each(function(){
    //if statement here 
    // use $(this) to reference the current div in the loop
    //you can try something like...

var x = $(this).attr('id');
    if(x.includes(par)){
    	$(this).css = "display: block";
    }else{
    	$(this).remove();
    }


 });

}


}

function disponible() {
	if(find.includes("disponible")){
	find = find.replace("disponible","")
	document.getElementById("badgeDisponible").style.display = "none";
	filter(find);
  }else{
  find+="disponible ";
  document.getElementById("badgeDisponible").style.display = "block";
  filter(find);
  }
  }
  
  function francais() {
	if(find.includes("francais")){
	find = find.replace("francais","")
	document.getElementById("badgeFrancais").style.display = "none";
	filter(find);
  }else{
  find+="francais ";
  document.getElementById("badgeFrancais").style.display = "block";
  filter(find);
  }
  }
  
  function anglais() {
	if(find.includes("anglais")){
	find = find.replace("anglais","")
	document.getElementById("badgeAnglais").style.display = "none";
	filter(find);
  }else{
  find+="anglais ";
  document.getElementById("badgeAnglais").style.display = "block";
  filter(find);
  }
  }
  
  function filter(y){
  const selected = Array.from(document.getElementsByClassName(y));
	const books= Array.from(document.getElementsByClassName("book"));
   if(selected.length>0){
	var hide= books.filter(x => !selected.includes(x));
	var show= books.filter(z => selected.includes(z));
  for(i=0;i<hide.length;i++){
	if (hide[i].style.display !== "none") {
	 hide[i].style.display = "none";
	}
  }
  }else{
	  var show=document.getElementsByClassName("book");
  }
  for(i=0;i<show.length;i++){
	if (show[i].style.display === "none") {
	 show[i].style.display = "block";
	}
  }
  }
  function dropCour() {
	//assurer que la fleche s'ajuste
	$('#cour').css('border','none');
	var coursDropdown = document.getElementById("cours-dropdown");
	if(coursDropdown.classList.contains("fa-angle-right")){
	  coursDropdown.classList.remove("fa-angle-right");
	  coursDropdown.className += " fa-angle-down";
	} else {
	  coursDropdown.classList.remove("fa-angle-down");
	  coursDropdown.className += " fa-angle-right";
	}
  
	var x = document.getElementById("cours");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  } 
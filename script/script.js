var id1= {
  bookName:'Chimie Organique',
  author: 'Graham Solomon, Craig Fryhle',
  disponible: 0,
  class: 'CHM 1721',
  description:'La matière est présentée de façon simple et stimulante, et l&apos;accent est mis sur les habiletés essentielles à la réussite en chimie organique : résolution de problèmes, visualisation des structures et compréhension des mécanismes.',
  image:'images/folder.png',
  langue:'francais',
  format:'papier'
};
var id2= {
  bookName:'Projet 2 ',
  author: 'Ferdinand P. Beer, E. Russell Johnston Jr., David F. Mazurek',
  disponible: 18,
  class: 'GNG 1505, GNG 1105',
  description:'Projet d&apos;intelligence artificiel, et de devellopement industriel.',
  image:'images/folder.png',
  langue:'francais',
  format:'papier'
};
var id3= {
  bookName:'Calcul différentiel (I)',
  author: 'James Stewart',
  disponible: 15,
  class: 'MAT 1720, MAT 1320',
  description:'Une présentation claire ainsi qu&apos;un texte concis et rigoureux sur le plan mathématique. Une approche des mathématiques basée sur une méthode de résolution de problèmes favorisant une meilleure intégration des concepts.',
  image:'images/folder.png',
  langue:'francais',
  format:'papier'
};
var id4= {
  bookName:'Apprendre à programmer avec Python 3',
  author: 'Gérard Swinnen',
  disponible: 11,
  class: 'ITI 1120, ITI 1520',
  description:'Un livre incontournable pour acquérir l&apos;exigeante discipline qu&apos;est l&apos;art de la programmation ! Original et stimulant, cet ouvrage aborde au travers d&apos;exemples attrayants et concrets tous les fondamentaux de la programmation.',
  image:'images/folder.png',
  langue:'francais',
  format:'papier'
};
var id5= {
  bookName:'Algèbre linéaire et applications',
  author: 'David C. Lay, Michel Henri',
  disponible: 14,
  class: 'MAT 1741, MAT 1341',
  description:'Présente les concepts de base de l&apos;algèbre linéaire et les outils dont l&apos;étudiant aura besoin dans sa vie professionnelle. Propose une large sélection d&apos;applications, d&apos;exemples et d&apos;exercices permettant d&apos;aborder les difficultés réelles rencontrées.',
  image:'images/folder.png',
  langue:'francais',
  format:'numerique'
};
var id6= {
  bookName:'Calcul avancé',
  author: 'James Stewart',
  disponible: 14,
  class: 'MAT 1722, MAT 1322, MAT 2322, MAT 2722, MAT 2322',
  description:'Cette adaptation québécoise conçue pour s&apos;arrimer avec le niveau collégial est d&apos;une grande précision mathématique et d&apos;une grande rigueur scientifique et offerte en couleurs pour faciliter la lecture et l&apos;apprentissage des étudiants.',
  image:'images/folder.png',
  langue:'francais',
  format:'papier'
};
var id7= {
  bookName:'Mathématiques discrètes, édition révisée',
  author: 'Kenneth Rosen',
  disponible: 13,
  class: 'MAT 1748',
  description:'Encensé par les spécialistes de l&apos;informatique, cet ouvrage doit son succès à la clarté de ses exposés, à la diversité de ses exemples et de ses exercices ainsi qu&apos;à la richesse et au nombre des applications qui y sont traitées.',
  image:'images/folder.png',
  langue:'francais',
  format:'papier'
};
var id8= {
  bookName:'Caclul intégral II',
  author: 'James Stewart',
  disponible: 7,
  class: 'MAT 1720, MAT 1320, MAT 1722, MAT 1322',
  description:'En plus de conserver l&apos;approche et la rigueur scientifique de l&apos;ouvrage de James Stewart, elle présente une réorganisation, notamment en ce qui concerne les notions sur les suites et les séries, ainsi que des exercices et des problèmes supplémentaires.',
  image:'images/folder.png',
  langue:'francais',
  format:'numerique'
};
var id9= {
  bookName:'Calcul à plusieurs variables',
  author: 'James Stewart, Jean Guérin',
  disponible: 0,
  class: 'MAT 1720, MAT 1320, MAT 1722, MAT 1322',
  description:'L’art d’enseigner, disait l’écrivain Mark Van Doren, est l’art d’aider à découvrir. Et on peut dire que James Stewart possédait cet art. Il s’est en effet efforcé dans cet ouvrage d’aider les étudiants à découvrir le calcul à plusieurs variables, sa puissance pratique et son étonnante beauté.',
  image:'images/folder.png',
  langue:'francais',
  format:'papier'
};
var id10= {
  bookName:'Calcul différentiel',
  author: 'Marco Bélanger, Margot De Serres, Josée Bérubé',
  disponible: 0,
  class: 'MAT 1720, MAT 1320',
  description:'Calcul différentiel s&apos;inscrit également dans le prolongement des trois compétences disciplinaires explorées au secondaire : communiquer à l&apos;aide du langage mathématique, déployer un raisonnement mathématique et résoudre une situation problème.',
  image:'images/folder.png',
  langue:'francais',
  format:'papier'
};
var id11= {
  bookName:'Calcul différentiel, 8e éd.',
  author: 'Gilles Charron, Pierre Parent',
  disponible: 0,
  class: 'MAT 1720, MAT 1320',
  description:'Gilles Charron et Pierre Parent présentent la 8e édition de leur manuel. Son contenu a été révisé et sa structure adaptée à la réalité des élèves d’aujourd’hui. Ce classique propose une matière complète qui couvre tout le programme, toujours avec la même rigueur mathématique éprouvée et irréprochable.',
  image:'images/folder.png',
  langue: 'anglais',
  format:'papier'
};
var projetShelf= [id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11];

function select(bookId){
  var myProjet = Object.values(bookId);
    localStorage.setItem("name",myProjet[0]);
    localStorage.setItem("author",myProjet[1]);
    localStorage.setItem("disponible",myProjet[2]);
    localStorage.setItem("class",myProjet[3]);
    localStorage.setItem("description",myProjet[4]);
}

$(function() {
  if(localStorage.getItem("user")===""){
$('#compte').css('display', 'none');
$('#notification').css('display', 'none');
$('#message').css('display', 'none');
$('#login').css('display', 'inline-block');  
  }else{
$('#compte').css('display', 'inline-block');
$('#notification').css('display', 'inline-blocke');
$('#message').css('display', 'inline-block');
$('#login').css('display', 'none');  
  }
});

function logout(){
localStorage.setItem("user","");
$('#compte').css('display', 'none');
$('#notification').css('display', 'none');
$('#message').css('display', 'none');
$('#login').css('display', 'inline-block');
}

/*Added this function to act before the form submit actually goes trought.
Where setting a value for search in local storage. This way are search page knows what its looking for
Thats why we return true at the end. returning false would block it.
*/
$('#myform').submit(function() {
  localStorage.setItem("search", document.getElementById("form-field").value);
  //alert(document.getElementById("form-field").value);
   // alert("works") ;   return true; // return false to cancel form action
});

function searchLoad(){
	var livreStrings ="";
	var dispo =""
	for(i=0;i<projetShelf.length;i++){
		var livre = Object.values(projetShelf[i]);
		if(livre[2]>0){
			dispo="disponible ";
		}
		livreStrings+= '<div onclick="redirect(id'+(i+1)+')" id="'+livre[0]+'" class="card book '+dispo+livre[3]+' '+livre[6]+' '+livre[7]+'+"><img class="card-img-top" src="'+livre[5]+'"  alt="Book"><div class="card-body"><h3 class="card-title">'+livre[0]+'</h3><p class="card-text">'+livre[4].substring(0,35)+'</p></div></div>';
	}

	/*bookName:'Algèbre linéaire et applications',
  author: 'David C. Lay, Michel Henri',
  disponible: 14,
  class: 'MAT 1741, MAT 1341',
  description:'Présente les concepts de base de l&apos;algèbre linéaire et les outils dont l&apos;étudiant aura besoin dans sa vie professionnelle. Propose une large sélection d&apos;applications, d&apos;exemples et d&apos;exercices permettant d&apos;aborder les difficultés réelles rencontrées.',
  image:'images/algebre.jpg'*/
document.getElementById("projetShelf").innerHTML=livreStrings;
return true;
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
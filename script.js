var data = [
  {
    page:"home", 
    title:"Welcome to Kim & Park's family",
    img: "family",
  },
  {
    page:"jay",
    title:"This is Jay's page",
    name : "Jay",
    age : 35,
    gender : "Unknown",
    img : "jay"
  },
  {
    page:"sam",
    title: "This is Sam's page",
    name : "Samantha Park",
    age : 40,
    gender : "Female",
    img:"sam"
  },
  {
    page:"toni",
    title: "This is Toni's page",
    name : "Toni Kim",
    age : 20,
    gender : "Female",
    img:"toni"
  },
  {
    page:"thomas",
    title: "This is Thomas's page",
    name : "Thomas Kim",
    age : 12,
    gender : "Male",
    img:"thomas"
  },
  {
    page:"tracy",
    title: "This is Tracy's page",
    name : "Tracy Kim",
    age : 10,
    gender : "Female",
    img:"tracy"
  }

];

function myFunction(page,elem){
  let i;
  for(i=0;i<data.length;i++){
    if(data[i].page === page){
      document.getElementById("title").innerHTML = data[i].title;
      document.getElementById("myImg").src = "img/"+data[i].img+".JPG";
      if(data[i].page === "home"){
        document.getElementById("name").innerHTML = "";
        document.getElementById("age").innerHTML = "";
        document.getElementById("gender").innerHTML = "";
      }else{
        document.getElementById("name").innerHTML = "Name: " +data[i].name;
        document.getElementById("age").innerHTML = "Age: " +data[i].age;
        document.getElementById("gender").innerHTML = "Gender: " +data[i].gender;
      }
    }
  }
  var current = document.getElementsByClassName("active");
  // console.log(current);

  // If there's no active class
  if (current.length > 0) {
    current[0].className = current[0].className.replace("active", "");
  }
  
  elem.parentElement.className += "active";
}
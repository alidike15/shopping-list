let display = document.getElementById("list");
let forma = document.forms[0];

if(localStorage.getItem("prekes") != null){
//jei yra įrašytų prekių ir naršyklė buvo išjungta, išveda prekes į ekraną vėl įjungus naršyklę
    let visosprekes = JSON.parse(localStorage.getItem("prekes"));
    console.log(visosprekes);
    var prekes = visosprekes;
    display.innerHTML = `${visosprekes.join("<br/>")}`; 
}else{
    var prekes = [];
}

function add(){
//prideda daiktą į sąrašą
    let tekstas = forma["tekstas"].value;
    //sudedame prekes į masyvą
    prekes.push(tekstas);
    //įrašome prekes masyvą į local storage
    localStorage.setItem("prekes", JSON.stringify(prekes));
    //paimame prekes iš local storage
    let visosprekes = JSON.parse(localStorage.getItem("prekes"));
    //išvedame prekes į ekraną
    display.innerHTML = `${visosprekes.join("<br />")}`;
}

function isvalyti(){
//išvalo sąrašą
    //išvalome local storage
    localStorage.removeItem("prekes");
    //išvalome html elementą
    display.innerHTML = "";
    //atstatome formą
    forma.reset();
    //perkrauname puslapį
    location.reload();
}
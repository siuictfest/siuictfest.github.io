// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBnoouZ86Wd5AxKzXV-82QOsowa81zOBU8",
    authDomain: "siuictfest-17f81.firebaseapp.com",
    databaseURL: "https://siuictfest-17f81.firebaseio.com",
    projectId: "siuictfest-17f81",
    storageBucket: "siuictfest-17f81.appspot.com",
    messagingSenderId: "891213467504"
  };
  firebase.initializeApp(config);

var acmTeamData = firebase.database().ref('PROJECT');


document.getElementById('formid').addEventListener('submit',submitFrom);

function submitFrom(e){
    e.preventDefault();
    
    var teamName = getInputval('teamName');
    //Participant 1
    var name1 = getInputval('m1name');
    var roll1 = getInputval('m1roll');
    var dpt1 = getInputval('m1dpt');
    var email1 = getInputval('m1email');
    var phone1= getInputval('m1phone');
   
    var  data= {
        proejcetName:teamName,
        m1:{
            name:name1,
            roll:roll1,
            dpt:dpt1,
            emaill:email1,
            phone:phone1
        },
        status:"Pending"
    };
    
    console.log(data);
    SaveMessage(data);
    
       //Show alert 
    document.querySelector('.alert').style.display='block';
    
    //Hide alert after 3 seconds
    setTimeout(()=>{
        document.querySelector('.alert').style.display='none';
    
    },3000);
    
    document.getElementById('formid').reset();
  
}


//Function to get form values

function getInputval(id){
 return document.getElementById(id).value;
} 


//push data to firebase

function SaveMessage(data){
    var PushID=acmTeamData.push();
    PushID.set(data);
}




















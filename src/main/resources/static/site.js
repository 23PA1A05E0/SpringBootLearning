var john = true
function showNextUser(){
    if(john == true){
        document.getElementById("userName").innerHTML = "jane_doe"
        document.getElementById("designation").innerHTML = "Interior Designer"
        document.getElementById("userImage").src = "./img_jane_doe.png"
        john = false
    }
    else{
        document.getElementById("userName").innerHTML = "john_doe"
        document.getElementById("designation").innerHTML = "Architect & Engineer"
        document.getElementById("userImage").src = "./img_john_doe.png"
        john = true;
    }
}

function randomUser(){
    //https://randomuser.me/api call this api
    // Show userName, Designation in HTML 
    // If user is male show John_Doe img
    // If user is female show Jane_Doe img
    // Then show actual img of user coming from api

}
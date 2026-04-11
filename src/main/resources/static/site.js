var john = true
function showNextUser(){
    if(john == true){
        document.getElementById("userName").innerHTML = "jane_doe"
        document.getElementById("email").innerHTML = "Interior Designer"
        document.getElementById("userImage").src = "./img_jane_doe.png"
        john = false
    }
    else{
        document.getElementById("userName").innerHTML = "john_doe"
        document.getElementById("email").innerHTML = "Architect & Engineer"
        document.getElementById("userImage").src = "./img_john_doe.png"
        john = true;
    }
}


async function showRandomUser() {
    try {
        let res = await fetch("https://randomuser.me/api/");
        let data = await res.json();

        let user = data.results[0];

        document.getElementById("userName").innerHTML =
            user.name.first + " " + user.name.last;

        document.getElementById("email").innerHTML =
            user.email;

        document.getElementById("userImage").src =
            user.picture.large;

    } catch (error) {
        console.log("Error:", error);
    }
}

// function randomUser(){
//     //https://randomuser.me/api call this api
//     // Show userName, Designation in HTML 
//     // If user is male show John_Doe img
//     // If user is female show Jane_Doe img
//     // Then show actual img of user coming from api

// }
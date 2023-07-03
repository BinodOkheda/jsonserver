let name = document.getElementById("name");
let age = document.getElementById("age");
let place = document.getElementById("place");
let batch = document.getElementById("batch");
let profession = document.getElementById("profession")

let fromBtn = document.querySelector("form")


fromBtn.addEventListener("submit",(e)=>{
    e.preventDefault();

    let userObj={
        name:name.value,
        age:age.value,
        place:place.value,
        batch:batch.value,
        profession:profession.value
    }

    fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userObj)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        alert("user has been registered........")
    })
    .catch((err)=>console.log(err))
})
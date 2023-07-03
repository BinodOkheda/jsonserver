let email = document.getElementById("email");
let password = document.getElementById("password");
let formBtm = document.querySelector("form")


formBtm.addEventListener("submit",(e)=>{
    e.preventDefault();
    adminObj={
        email:email.value,
        password:password.value,
    }

    fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(adminObj)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        localStorage.setItem("token",data.token)
        alert("login successful......")
        window.location.href="../pages/data.html"
    })
})
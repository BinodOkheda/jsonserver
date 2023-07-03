let databtn = document.getElementById("data");
let reportbtn = document.getElementById("report")
let token = localStorage.getItem("token")

databtn.addEventListener("click",()=>{
    if(!token){
        alert("please login first.....")
    }else{
        window.location.href="../pages/data.html"
    }
})


reportbtn.addEventListener("click",()=>{
    if(!token){
        alert("please login first.....")
    }else{
        window.location.href="../pages/data.html"
    }
})
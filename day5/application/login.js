document.getElementById("loginBtn").onclick = function(){
    if(document.getElementById("id").value=="asdf"&&document.getElementById("pw").value=="1234"){
        window.location.href = "dash.html";
    }
    else{
        document.getElementById("alertdiv").innerHTML=
            '<div class="alert alert-danger" role="alert">'
                +"Wrong ID or password!"
            +"</div>"
    }
}
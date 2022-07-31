window.onload=function (){
    let expand = document.getElementById("more");

    expand.onclick = function(){
        let search = document.getElementById("search_container");
        if(expand.innerHTML=="More"){   
            search.style.display = "block";
            expand.innerHTML="Less";
        }
        else{
            search.style.display = "none";
            expand.innerHTML="More";
        }
        
    }

}
window.onload=function (){
    let expand = document.getElementById("media");

    expand.onclick = function(){
        let search = document.getElementsByClassName("hide");
        let select = document.getElementsByTagName("select");
        let option = document.getElementsByTagName("option");
        let nav = document.getElementsByTagName("nav");
        nav[0].style.flexWrap = "wrap";
        if(expand.innerHTML=="More"){ 
            for(let i=0; i<search.length; i++){
                for(let j=0; j<search[i].children.length; j++){  
                    search[i].children[j].style.display = "flex";  
                }
            }
            for(let i=0; i<select.length; i++){
                select[i].style.display = "flex";
            }
            for(let i=0; i<option.length; i++){ 
                option[i].style.display = "flex";
            }

            expand.innerHTML="Less";
        }
        else{
            for(let i=0; i<search.length; i++){
                for(let j=0; j<search[i].children.length; j++){  
                    search[i].children[j].style.display = "none";       
                }
            }

            expand.innerHTML="More";
        }
    }

}
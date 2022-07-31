window.onload=function (){

    var expand = document.getElementsByClassName("more");
    var div = document.createElement('div');
    div.id = 'new';
    div.innerHTML = 'More info';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.margin = '5px';
    for(let i=0; i<expand.length; i++){
        expand[i].onclick = function(ev){
            if(!document.getElementById("new")){
                let articolToExpand = expand[i].parentNode.parentNode;
                articolToExpand.appendChild(div);    
                expand[i].style.transform = "scaleY(-1)";
            }
            else{
                div.remove();
                expand[i].style.transform = "scaleY(1)";
            }
            ev.stopPropagation();
        }
    }

    this.localStorage.setItem("en", "Flights");
    this.localStorage.setItem("ro", "Zboruri");

    var selectLanguage = document.getElementById("language");
    document.getElementById("title").innerHTML = localStorage.getItem(selectLanguage.value);


    var cover = this.document.getElementById("cover");
    var coverCss = getComputedStyle(cover);
    var coverHeight = coverCss.getPropertyValue("height")
    cover.onclick = function(ev){
        alert(coverHeight);
    }
    var s_interv;
    var options = selectLanguage.options;
    window.addEventListener("keypress", function(ev){
        if(ev.key=="1" || ev.key=="2"){
            this.clearInterval(s_interv);
            var x = parseInt(ev.key)-1;
            selectLanguage.value = options[x].value;
            document.getElementById("title").innerHTML = localStorage.getItem(selectLanguage.value);
        }
        
        if(ev.key=="`"){
            var nrr = 0;
            s_interv = setInterval(function(){
                nrr++;
                var mod = nrr%2;
                selectLanguage.value = options[mod].value;
                document.getElementById("title").innerHTML = localStorage.getItem(selectLanguage.value);
            }, 1000)
        }

    })


    selectLanguage.addEventListener("change", function(ev){
        document.getElementById("title").innerHTML = localStorage.getItem(ev.target.value);
    })

    var s = document.querySelector("section");
    s.onclick = function(ev){
        alert("Pozitia curenta (Y) este: "+ev.pageY)
    }

    var flights = document.getElementsByClassName("flight");
    for(let i=0; i<flights.length; i++){
        flights[i].onclick = function(ev){
            alert("Pozitia curenta (X) este: "+ev.pageX);   
            ev.stopPropagation();
        }
    }


    var search_b = document.getElementById("search_button");
    search_b.onclick = function(ev){
        var from = document.getElementById("from");
        var to = document.getElementById("to");
        from.value = (from.value).toLowerCase();
        to.value = (to.value).toLowerCase();
    }



    var c_date = new Date();
    var tel = document.getElementById("tel");
    tel.onclick = function(ev){
        alert("Anul curent este "+c_date.getFullYear()+" si mie imi place numarul "+Math.floor(Math.random()*100))
    }

}
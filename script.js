/*for section page selection*/
let nav = document.querySelectorAll(".control"); /*declaration*/
nav.forEach(button => { /*gets all navs*/ 
    button.onclick = function(){ /*function when clicked*/
    document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active"); /*data-id from html*/
} 
});
    

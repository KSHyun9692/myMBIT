const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fateOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
    
        setTimeout(() => {
            main.style.display = "none";
        }, 450)
    }, 450)
}
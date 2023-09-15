// left: 420px;

var btnColor = document.getElementById("btnColor");
var ballColor = document.getElementById("ballColor");
var body = document.getElementById("body")

var theme = 0;

btnColor.addEventListener('click', function(){
    if(theme == 0){
        ballColor.style.cssText = (
            "transition: 0.3s;"      +
            "position: relative;"    +
            "left: 59.6%;"           +
            "background-color: black;"
        )
        btnColor.style.cssText = (
            "transition: 0.3s;"      +
            "background-color: white;"
        )
        body.style.cssText = (
            "transition: 0.3s;"      +
            "background-color: black;"
        )

        theme = 1;
    }
    else if(theme == 1){
        ballColor.style.cssText = (
            "transition: 0.3s;"      +
            "position: relative;"    +
            "left: 5%;"            +
            "background-color: white;"
        )
        btnColor.style.cssText = (
            "transition: 0.3s;"      +
            "background-color: black;"
        )
        body.style.cssText = (
            "transition: 0.3s;"      +
            "background-color: white;"
        )

        theme = 0;
    }
});
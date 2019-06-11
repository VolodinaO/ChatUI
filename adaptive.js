
function openMenu() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function closeMenu() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
function openDialogs() {
    document.getElementById("myDialogs").style.display = "block";
    document.getElementById("left").style.display = "none";
}

//       Дополнительно: сравнение с размером экрана, чтобы закрытие диалогов при нажатии на контакт
//       реагировало только для маленьких экранах
function closeDialogs() {
    function myFunction(x){
        if (x.matches) {
            document.getElementById("myDialogs").style.display = "none";
            document.getElementById("left").style.display = "block";
        } else {
            document.getElementById("myDialogs").style.display = "block";
            document.getElementById("left").style.display = "none";
        }
    }
    var x = window.matchMedia("(max-width: 769px)");
    myFunction(x);
    x.addListener(myFunction);
}
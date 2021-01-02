changeA = document.getElementById("imghow");

var link = 
"https://9to5google.com"

function change1() {
        window.open(link, "_blank");
}

changeA.onclick = () => {
    change1();
    window.open(link, "_blank");
};
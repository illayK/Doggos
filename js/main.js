document.getElementById("bars").addEventListener("click", clickBars);

function clickBars() {
    document.getElementById("checkBtn").style.display = inital;

    if (document.getElementsByClassName("img").style.display == intial) {
        document.getElementsByClassName("img").style.display = block;
        document.body.style.backgroundColor = "purple";
    } else {
        document.getElementsByClassName("img").style.display = inital;
        document.body.style.backgroundColor = inital;
    }
    
}

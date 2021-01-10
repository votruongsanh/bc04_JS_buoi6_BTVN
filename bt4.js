document.getElementById("btnInTagDiv").addEventListener("click", function () {
    var inTagDiv = themDiv();
    // console.log(inTagDiv);
    // document.getElementById("body__bacground").innerHTML = inTagDiv;
    var tam = "";
    for (var i = 0; i < inTagDiv.length; i++) {
        if (i % 2 == 0) {
            tam = inTagDiv[i].style.backgroundColor = "red";
        } else {
            return "abc";
        }
    }
    console.log(tam)
});

function themDiv() {
    var listDiv = [];
    for (var i = 0; i < 10; i++) {
        var newDiv = document.createElement("div");
        listDiv.push(newDiv);
    }
    return listDiv;
}
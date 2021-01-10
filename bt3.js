document.getElementById("tinhGiaiThua").addEventListener("click", function(){
    var giaiThua = document.getElementById("giaiThua").value;
    giaiThua = parseInt(giaiThua);
    var GT = 1;
    for (var i = 1; i <= giaiThua; i++){
        GT *= i;
    }
    document.getElementById("spanGiaiThua").innerHTML = "giai thừa là: " + GT;
});
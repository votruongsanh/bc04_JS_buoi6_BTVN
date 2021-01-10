document.getElementById("tinhTong").addEventListener("click", function(){
    var inputX = document.getElementById("inputX").value;
    var inputN = document.getElementById("inputN").value;
    inputX = parseInt(inputX);
    inputN = parseInt(inputN);

    var tong = 0;
    var luyThua = 1;
    for (var i = 0; i < inputN; i++){
        luyThua *= inputX;
        tong = tong + luyThua;
    }
    document.getElementById("spanTong").innerHTML = "tổng là: " + tong;
});
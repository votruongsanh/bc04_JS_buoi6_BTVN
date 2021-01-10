document.getElementById("btnTimN").addEventListener("click", function () {
    var tong = 0;
    var n = 0;
    while(tong < 10000){
        tong += n;
        n++;
    }
    document.getElementById("nguyenDuongNhoNhat").innerHTML = "số nguyên dương cần tìm là: " + n;
});
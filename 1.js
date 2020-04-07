function kt(){
    var k=0;
    if(document.getElementById("check1").checked)k++;
    if(document.getElementById("check2").checked)k++;
    if(document.getElementById("check3").checked)k++;
    if(document.getElementById("check4").checked)k++;
    if(document.getElementById("check5").checked)k++;
    if(document.getElementById("check6").checked)k++;
    if(document.getElementById("check7").checked)k++;
    if(document.getElementById("check8").checked)k++;
    if(document.getElementById("check9").checked)k++;
    if(document.getElementById("check10").checked)k++;
    if(k<10&&k>=5)
    alert("CHÚC MỪNG BẠN ĐẠT ĐƯỢC "+k+"/10. HÃY CỐ GẮNG ĐỂ HOÀN THIỆN HƠN NHÉ");
    else if(k==10) alert("Perfect! "+k+"/10");
    else alert(k+"/10 Hơi buồn! Hãy cố gắng lên nào!");
}
function doiborder(){
    if (document.getElementById("check1").checked) {
        document.getElementById("nut1").style.border =" 5px solid green";
        document.getElementById("nut1").style.padding="15px";
    }
    else {
        document.getElementById("nut1").style.border = "none";
        document.getElementById("nut1").style.padding = "20px";
    }
    if (document.getElementById("check2").checked) {
        document.getElementById("nut2").style.border =" 5px solid green";
        document.getElementById("nut2").style.padding="15px";
    }
    else {
        document.getElementById("nut2").style.border = "none";
        document.getElementById("nut2").style.padding = "20px";
    }
    if (document.getElementById("check3").checked) {
        document.getElementById("nut3").style.border = " 5px solid green";
        document.getElementById("nut3").style.padding = "15px";
    }
    else {
        document.getElementById("nut3").style.border = "none";
        document.getElementById("nut3").style.padding = "20px";
    }
    if (document.getElementById("check4").checked) {
        document.getElementById("nut4").style.border = " 5px solid green";
        document.getElementById("nut4").style.padding = "15px";
    }
    else {
        document.getElementById("nut4").style.border = "none";
        document.getElementById("nut4").style.padding = "20px";
    }
    if (document.getElementById("check5").checked) {
        document.getElementById("nut5").style.border = " 5px solid green";
        document.getElementById("nut5").style.padding = "15px";
    }
    else {
        document.getElementById("nut5").style.border = "none";
        document.getElementById("nut5").style.padding = "20px";
    }
    if (document.getElementById("check6").checked) {
        document.getElementById("nut6").style.border = " 5px solid green";
        document.getElementById("nut6").style.padding = "15px";
    }
    else {
        document.getElementById("nut6").style.border = "none";
        document.getElementById("nut6").style.padding = "20px";
    }
    if (document.getElementById("check7").checked) {
        document.getElementById("nut7").style.border = " 5px solid green";
        document.getElementById("nut7").style.padding = "15px";
    }
    else {
        document.getElementById("nut7").style.border = "none";
        document.getElementById("nut7").style.padding = "20px";
    }
    if (document.getElementById("check8").checked) {
        document.getElementById("nut8").style.border = " 5px solid green";
        document.getElementById("nut8").style.padding = "15px";
    }
    else {
        document.getElementById("nut8").style.border = "none";
        document.getElementById("nut8").style.padding = "20px";
    }
    if (document.getElementById("check9").checked) {
        document.getElementById("nut9").style.border = " 5px solid green";
        document.getElementById("nut9").style.padding = "15px";
    }
    else {
        document.getElementById("nut9").style.border = "none";
        document.getElementById("nut9").style.padding = "20px";
    }
    if (document.getElementById("check10").checked) {
        document.getElementById("nut10").style.border = " 5px solid green";
        document.getElementById("nut10").style.padding = "15px";
    }
    else {
        document.getElementById("nut10").style.border = "none";
        document.getElementById("nut10").style.padding = "20px";
    }
}
function loai_ngay(){
    var pass = document.getElementById("loai_ngay").value;
    var ten=document.getElementById("text_name").value;
    if (pass =="Ngày nghỉ"){
        document.getElementById("sign_in").style.display="none";
        document.getElementById("container").style.display="block";
        document.getElementById("hello").innerHTML = "Chào " +ten+" ! Chúc "+ten+" một ngày tốt lành!";
    }
    else{
        document.getElementById("sign_in").style.display = "none";
        document.getElementById("ngay_ban").style.display = "block";
        document.getElementById("hello").innerHTML = "Chào " + ten + " ! Chúc " + ten + " một ngày học tập vui vẻ!";
    }
}
function kt1() {
    var k = 0;
    if (document.getElementById("check11").checked) k++;
    if (document.getElementById("check12").checked) k++;
    if (document.getElementById("check13").checked) k++;
    if (document.getElementById("check14").checked) k++;
    if (document.getElementById("check15").checked) k++;
    if (k < 5 && k >= 3)
        alert("CHÚC MỪNG BẠN ĐẠT ĐƯỢC " + k + "/5. HÃY CỐ GẮNG ĐỂ HOÀN THIỆN HƠN NHÉ");
    else if (k == 5) alert("Perfect! " + k + "/5");
    else alert(k + "/5 Hơi buồn! Hãy cố gắng lên nào!");
}
function doiborder1() {
    if (document.getElementById("check11").checked) {
        document.getElementById("nut11").style.border = " 5px solid green";
        document.getElementById("nut11").style.padding = "15px";
    }
    else {
        document.getElementById("nut11").style.border = "none";
        document.getElementById("nut11").style.padding = "20px";
    }
    if (document.getElementById("check12").checked) {
        document.getElementById("nut12").style.border = " 5px solid green";
        document.getElementById("nut12").style.padding = "15px";
    }
    else {
        document.getElementById("nut12").style.border = "none";
        document.getElementById("nut12").style.padding = "20px";
    }
    if (document.getElementById("check13").checked) {
        document.getElementById("nut13").style.border = " 5px solid green";
        document.getElementById("nut13").style.padding = "15px";
    }
    else {
        document.getElementById("nut13").style.border = "none";
        document.getElementById("nut13").style.padding = "20px";
    }
    if (document.getElementById("check14").checked) {
        document.getElementById("nut14").style.border = " 5px solid green";
        document.getElementById("nut14").style.padding = "15px";
    }
    else {
        document.getElementById("nut14").style.border = "none";
        document.getElementById("nut14").style.padding = "20px";
    }
    if (document.getElementById("check15").checked) {
        document.getElementById("nut15").style.border = " 5px solid green";
        document.getElementById("nut15").style.padding = "15px";
    }
    else {
        document.getElementById("nut15").style.border = "none";
        document.getElementById("nut15").style.padding = "20px";
    }
}


function khoi1(a){
    if(a==0){
        document.getElementById("information1").style.display="block";
        document.getElementById("container").style.display="none";
    }
    else{
        document.getElementById("information1").style.display = "none";
        document.getElementById("container").style.display = "block";
    }
}
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
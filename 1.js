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
    alert("CHÚC MỪNG BẠN ĐẠT ĐƯỢC "+k+"/10. HÃY CỐ GẮNG ĐỂ HOÀN THIỆN HƠN NHÉ");
}
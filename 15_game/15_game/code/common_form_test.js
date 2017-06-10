// 全局变量a和b，分别获取用户框和密码框的value值
var a = document.getElementsByTagName("input")[0].val();
var b = document.getElementsByTagName("input")[1].val();


//若输入框为空，阻止表单的提交
function submitTest() {
   
    if (a=="") { //用户框value值为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
        return false;
    }
	if (b=="") { //密码框value值为空
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
        return false;
    }
    return true;
}
<?php
// // 告诉浏览器以什么字符集编码区解析代码
// header("content-type:text/html;charset:UTF-8");
// // include 在当前php页面嵌入一个子页面
// include("./header.html");
// // echo 输出
// echo "<div>主页</div>";
// include("./footer.html");


// include("./views/main/index.html")
// 在php定义全局变量的语法
// var_dump($_SERVER);
// 定义变量$path  通过url地址访问不同的页面  S_SERVER下的PATH_INFO就是url地址
// $path=$_SERVER["PATH_INFO"];
// echo $path   输出的是 /main/index
// 在php里拼接字符串用..和html里++是一样的
// include("./views.".$path.".html");

// 在php里的数组提供了一个方法 判断属性是否存在
// 如果PATH_INFO属性在$_SERVER存在 则返回true
// array_ket_exists("PATH_INFO",$_SERVER;)

// 默认目录名称
$dir="main";
// 默认文件名称
$filename="index";
if(array_key_exists("PATH_INFO",$_SERVER)){
    $path=$_SERVER["PATH_INFO"];
    // php里提供一个截取字符串的方法substr  去掉$path第一个斜杠
    $str=substr($path,1);
    // php里分割字符串的方法叫exolode 第一个参数是按谁分，第二个参数是要分割的对象
    $ret=explode("/",$str);
    if(count($ret)==2){
        $dir=$ret[0];
        $filename=$ret[1];
    }else{
        $dir="main";
        $filename="login";
    };
};
include("./views/".$dir."/".$filename.".html");
?>
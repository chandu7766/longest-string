function long(){
    const str1=document.getElementById("first")
    const str2=document.getElementById("second")
    console.log(str1);
    console.log(str2);

    const longest= Math.max(str1.length, str2.length);
    document.getElementById("result").innerHTML="The longest string is: "+longest;


}
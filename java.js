function long(){
    const str1=document.getElementById("first").value
    const str2=document.getElementById("second").value
    const longest= Math.max(str1.length, str2.length);
    if(str1.length>str2.length)
    document.getElementById("result").innerHTML="The longest string length is: "+longest+" that is str1 with value "+str1;
    if(str2.length>str1.length)
    document.getElementById("result").innerHTML="The longest string length is: "+longest+" that is str2 with value "+str2;


}
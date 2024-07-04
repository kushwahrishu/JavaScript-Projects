const input = document.getElementById("input");
function  reversString(str){
  return str.split("").reverse().join("");
}
function checkPalindrom(){
 const value = input.value
 const revers = reversString(value);
 if(value === revers){
   alert(`it's P A L I N D R O M E !😄
   `)
 }else{
   alert(`it's not P A L I N D R O M E ! 🙁 `)
 }
 input.value = "";
}
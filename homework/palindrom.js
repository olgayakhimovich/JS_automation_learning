function palyndrom(str){
    let result = "It is not palyndrom";
    const targetStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
    const reversedStr = targetStr.split('').reverse().join('');
 
     if(targetStr == reversedStr){
         result = "It is palyndrom"; 
     }
     return result;
 }
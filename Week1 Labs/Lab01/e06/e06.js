'use strict';
String.prototype.filter = function (bannedwords){
    temp = this;
   if(bannedwords.length){
       for(let word of bannedwords){
           temp = temp.replace(word,"***");
       }
   }
   return temp;
}


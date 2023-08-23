const text = prompt ("please enter somthing");

function slice (x) {
   let str =  x.slice (1 , -1);
   let myArray = str.split ('');


   if ( myArray < 3) {
        return "null";

   }
   else {
    return str; 
   }
}

let result = slice (text);
alert (result);
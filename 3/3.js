const number = prompt("please enter a number")

let n = 1;
while ( (2*n*n) + (2*n) + 1 < number ) {
   
    a = (((2*n)+1));
    b = (2*n*(n+1)); 
    d = (a^2) + (b^2); 
    c = (2*n*n) + (2*n) + 1;
    
    
    
    console.log (a,b,c);
      
        n++;
    


}
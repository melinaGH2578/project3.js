// const text = prompt("please enter string");
// // let myarray = text.split('');
// // let array = text.fill(1);
// let rep = myarray(2).fill(text);
// // var arr = Array(5).fill("foo");
// alert(rep);
const str = prompt('please enter somthing');
const rep = (str, n) =>
{
    let res = '   ';
    for (
        let i = 0;
        i < str.length;
        i++
    ) 
    {
       
        res += str[i].repeat(n);
    };
    return res;
};
console.log(rep(str, 2));
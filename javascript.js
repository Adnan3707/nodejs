//  Maximumn Number In an Array
function maxNumber(arr) {
    return Math.max(...arr);
}

// Given A Palindrome
function Palindrome(params) {
    params.split('').reverse().join('') === params ? console.log('yes') : console.log('no');
}

// console.log(Palindrome('tat'))

//  Return On Event Numbers

function evenOnly(arr){
    return arr.map((ele)=> ele % 2 === 0 ? ele : 'not even').filter((ele)=> ele !== 'not even');
}
// console.log(evenOnly([1,2,3,4,5,6,7,8,9,10]))

function factorial(num){
    if(num ==0 || num == 1){
        return 1
    }
    return num * factorial(num - 1)
}

// console.log(factorial(5))

function Prime(num){
    if(num<=1) return false;
    for(let i = 2; i< num;i++){
        if(num % i === 0) return false;
    }
    return true;
}
// console.log(Prime(6))

function sumAllNumbers(arr){
    return arr.reduce(function(first,second){ return first + second},0)
}
// console.log(sumAllNumbers([1,2,3,4,5,6,7,8,9,10]));


function countCharinStr(str){
    let char = {};
    for(string of str){
        char[string] = char[string] + 1 || 1 ;
    }
    return char;
}
// console.log(countCharinStr('hello world'))

function removDub(arr){
    return [...new Set(arr)]
}
// console.log(removDub([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]));

function remodubFilt(arr){
    return arr.filter(function(element,index){
  return arr.indexOf(element) === index
    })
}
// console.log(remodubFilt([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]));

function sortchar(str){
    let char = {};
    for(string of str) {
     char[string] = char[string] ? char[string] + 1 : 1
    }
    let arr = [];
    for(ele in char){
        console.log(ele)
      for(let i =0; i< char[ele] ;i++ ){
       arr.push(ele);
      }
    }
return arr.sort();
}
// console.log(sortchar('tree'));

//  Find MAx Difference

function MaxDiff(arr){
 let min = arr[0];
 let maxDiff = 0;
  for(let i =0;i<arr.length -1 ; i++){
    if(arr[i] < min){
    min = arr[i]    
    }else{
        maxDiff = Math.max(maxDiff,arr[i]-min)
    }
  }
    return maxDiff;
}
console.log(MaxDiff([7,1,5,3,6,4]))
//1.Do the below programs in anonymous function & IIFE


//a.Print odd numbers in an array :

var result = [];
var odd = function(arr)
{
    for (i = 0;i<arr.length;i++) 
    {
        if (arr[i]%2==1){
            
           result.push(arr[i])
        }
        
    }
    return result;
}
console.log(odd(arr=[1,2,3,4,5]));
//output:
//[ 1, 3, 5, 7 ]

//b.Convert all the strings to title caps in a string array :

var result = [];
var string = function(array){
    for (i = 0 ; i<array.length ; i++){

     result.push(array[i].toUpperCase()); 
     
    }
  return result;
}
console.log(string(array = ["donda","smit"]));

//Output:
//[ 'DONDA', 'SMIT' ]


//c.Sum of all numbers in an array

var result = [];
var sum = 0;
var num = function(array)
{
    for (i = 0 ; i<array.length ; i++)
    {
     sum = sum + array[i];
    }
    result.push(sum);
    return result ;
}
console.log(num(array = [1,2,3,4,5]));
//Output:
//[ 45 ]

//d.Return all the prime numbers in an array:

var result = [];
var k=0;
let prime = function(array) 
{
    for(i=0;i<array.length;i++)
    {
        if(array[i]===1)
        {
            continue;
        }
        else if(array[i]===2)
        {
            k=1;
            result.push(array[i]);
            // console.log(arr[i]);
        }
        k=0;
        for(j=2;j<i;j++)
        {
        // console.log("a")
            if(array[i]%j===0)
            {
                k=1;
                break;
            }
        }
        if(k===0 && array[i]!=2)
        {
            result.push(array[i])
            // console.log(arr[i]);
        }
    }
    if(k==1){
        return result;
    }
};
console.log(prime(arr = [1,2,3,4,5,6,7,8,9,10]));
//Output:
//[ 2, 3, 5, 7 ]

//e.Return all the palindromes in an array:


var reverse = 0;
var result = [];
var isPalindrome = function (num){
    var orgnum = num;
        
    while (num!=0){
        reverse= (reverse*10) + (num%10);
        num = parseInt(num/10);
    }   
    
    if (orgnum == reverse){
        
        
        result.push(reverse);
        return result;
    }  
    
    else
    {
      return  "is not palidrome number"  ;
    
    }
   
};
console.log(isPalindrome(number = [121]));
console.log(isPalindrome(number = [123]));

//Output:
//[ 121 ]
//is not palidrome number


//f.Return median of two sorted arrays of same size:

var sortnum = function (a,b){
     var merge = [...arr,...arr1].sort((a,b) => a-b)
     

var midnum = parseInt(merge.length/2);

        if (merge[midnum] % 2 ===0) 
        {
            return (merge[midnum] + merge[midnum-1]) /2
        }
    
return merge[midnum]
  
}
var arr=[1,3,5,7,9]
var arr1=[2,4,6,8,10]
console.log(sortnum(arr,arr1))
//Output:
//5.5


//g.Remove duplicates from an array:

var result= [];
var num = function (arr){
    
    for (i=0;i<arr.length;i++)
    {
        
        if (arr[i]==arr[i+1]) {
              
        }
        else 
        {   
            result.push(arr[i])
         
    
        }
    }
    console.log(result)
}
num(arr=[2,4,4,5,12,12,13])

//Output:
//[ 2, 4, 5, 12, 13 ]


//h.Rotate an array by k times\

var rotate =function (A,n,l=A.length) {
    
  return A.map((x,i,a) => A[(((n+i)%l) + l) % l])
}
console.log(rotate([1, 2, 7, 4, 5, 6, 7], 4));
//Output:
//[ 5, 6, 7, 1, 2, 7, 4 ]


//2.	Do the below programs in arrow functions.


//a.Print odd numbers in an array

var result = [];
var odd = (arr) =>
{
    for (i = 0;i<arr.length;i++) 
    {
        if (arr[i]%2==1){
            
           result.push(arr[i])
        }       
    }
    return result;
}
console.log(odd(arr=[11,12,13,14,15,16]));
//Output:
//[ 11, 13, 15 ]


//b.	Convert all the strings to title caps in a string array :
var result = [];
var string =(array)  =>  {
    for (i = 0 ; i<array.length ; i++){

     result.push(array[i].toUpperCase()); 
     
    }
  return result;
}
console.log(string(array = ["donda","smit"]));
//Output:
//[ 'DONDA', 'SMIT' ]


c.	Sum of all numbers in an array :

var result = [];
var sum = 0;
var num = (array) =>
{
    for (i = 0 ; i<array.length ; i++)
    {
     sum = sum + array[i];
    }
    result.push(sum);
    return result ;
}
console.log(num(array = [1,2,3,4,5]);

//d.Return all the prime numbers in an array
var result = [];
var k=0;
let prime =(array) => 
{
    for(i=0;i<array.length;i++)
    {
        if(array[i]===1)
        {
            continue;
        }
        else if(array[i]===2)
        {
            k=1;
            result.push(array[i]);
            // console.log(arr[i]);
        }
        k=0;
        for(j=2;j<i;j++)
        {
        // console.log("a")
            if(array[i]%j===0)
            {
                k=1;
                break;
            }
        }
        if(k===0 && array[i]!=2)
        {
            result.push(array[i])
            // console.log(arr[i]);
        }
    }
    if(k==1){
        return result;
    }
};
console.log(prime(arr = [1,2,3,4,5,6,7,8,9,10]));

// Output:
// [ 2, 3, 5, 7 ]


//e.Return all the palindromes in an array:

var reverse = 0;
var result = [];
var Palindrome =  (num) => {
    var orgnum = num;
        
    while (num!=0){
        reverse= (reverse*10) + (num%10);
        num = parseInt(num/10);
    }  
    if (orgnum == reverse) 
        result.push(reverse);
        return result;
    }  
    else
    {
       return  "is not palidrome number"  ;
    }
};
console.log(Palindrome(number = [121]));
console.log(isPalindrome(number = [123]));

//Output:
//[ 121 ]
//is not palidrome number




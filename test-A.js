//A1

function findOppositeNumber(n, firstNumber) {
	return (n / 2 + firstNumber) % n;
}
findOppositeNumber(10, 2)

//A2

function merge (s1, s2) {

    let a = s1.split("").filter(Boolean);
  
    let b = s2.split("");
  
    let mergedString = '';
  
  
    for(let i = 0; i < a.length || i < b.length; i++) {  
     if(i < a.length) 
       mergedString +=  a[i];
     if(i < b.length) 
       mergedString +=  b[i];
    }
  return mergedString;
  
  }
  console.log(merge('abc','123'));

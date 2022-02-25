//Nhóm 4- Hoàng Như
//A1

function findOppositeNumber(n, firstNumber) {
	return (n / 2 + firstNumber) % n;
}
findOppositeNumber(10, 2); // 7
findOppositeNumber(10, 6); // 1
//đối diện chính là phân nữa hình tròn [n/2] + cho vị trí số chọn để ra số đổi diện nó với giá trị n chắn 4<= n <=20
// % n là cho kết quả là số dư còn lại sau phép chia vị trí cho số được chọn. nếu thuộc nữa vòng tròn nhỏ thì vẫn kqa vẫn là số được chọn
// nếu thuộc nữa vòng tròn số lớn bên trái thì số dư sau % sẽ là vị trí của nó
//ví dụ findOppositeNumber(10, 6) nếu k có % n sẽ ra KQ = 11 lớn hơn số được chọn là 10. nên phải chia lại cho chính nó để coi như cắt 1 nữa hình tròn.
// số dư sau phép chia là vị trí.
//thay vì if thì em chọn % n


//A2

function merge2String (s1, s2) {
 
    let mergedString = '';
    
    for(let i = 0; i < s1.length || i < s2.length; i++) {  //điều kiện vòng lập kiểm tra xem i có nhỏ hơn a.length hay b.length không
     if(i < s1.length) //nếu i nhỏ hơn s1.length thì thêm a[i] vào chuỗi trước. sau đó kiểm tra qua s2
       mergedString +=  s1[i];
     if(i < s2.length) //nếu i nhỏ hơn s2.length thì thêm b[i] vào chuỗi. như vậy nó sẽ hiện sau s1[i1]
       mergedString +=  s2[i];
    }
  return mergedString; // số vòng lập phụ thuộc vào chuỗi có độ nhỏ hơn. dừng nếu k thỏa
  
  }
  console.log(merge2String("abc","123")); // a1b2c3
  console.log(merge2String("abc","0123")); // a0b1c23
  console.log(merge2String("abcd","123")); // a1b2c3d

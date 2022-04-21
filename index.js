// câu 1a
var numbers = [10,11,2,30,22,6,8,9,11,12,22]
function findMax5 (numbers) {
//Nếu element đã tồn tại trong biến mảng accumulator, 
//phần tử này sẽ được bỏ qua. Còn nếu chưa tồn tại thì sẽ được thêm vào trong accumulator 
     let myArrayWithNoDuplicates = numbers.reduce(function (accumulator, element) {
        if (accumulator.indexOf(element) === -1) {
          accumulator.push(element)
        }
        return accumulator.sort((a,b)=>b-a) // sau khi kiểm tra trùng thì trả về kết quả sắp xếp giảm dần
      }, [])

      return myArrayWithNoDuplicates.splice(0,5); // lấy 5 phần tử đầu tiên trong mảng sau khi đã check trùng và sắp xếp
}
console.log(findMax5(numbers))


// câu 1b
function findFrequent(array){
    let max =[0,0];
    //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
    //So sánh số lần xuất hiện và thay đổi max khi cần.
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
        else{
             //So sánh số lần xuất hiện với max[1] 
             if (max[1] < count){ 
                  //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                  //Và gán số lần xuất hiện vào max[1]
                  max[0] = array[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log(max[0])
}

let array = [3, 7, 3];

findFrequent(array);

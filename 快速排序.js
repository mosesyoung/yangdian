//方法一
function quickSort1(arr) {
  let arr1 = [];
  let arr2 = [];
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i != Math.floor(arr.length / 2)) {
      if (arr[i] < arr[Math.floor(arr.length / 2)]) {
        arr1.push(arr[i])
      } else {
        arr2.push(arr[i])
      }
    }
  }
  arr1=quickSort1(arr1);
  arr2=quickSort1(arr2);
  arr1.push(arr[Math.floor(arr.length / 2)])
  arr = arr1.concat(arr2);
  return arr;
}
//方法二
function quickSort2(arr,start,end) {
  if(start>=end) return;
  let i=start;
  let j=end;
  let median = arr[start]
  while(i<=j){
    while(arr[i]<=median&&i<=j) i++;
    while(arr[j]>=median&&i<=j) j--;
    if(i<j){
      [arr[i],arr[j]]=[arr[j],arr[i]]
      i++;
      j--;
    }
  }
  [arr[start],arr[j]]=[arr[j],arr[start]]
  quickSort2(arr,start,j-1)
  quickSort2(arr,j+1,end)
 

}
//方法一简化
function quickSort3(arr){
  if(arr.length<2){
      return arr;
  }
  var pivotIndex=Math.floor(arr.length/2);//找到那个基准数
  var pivot=arr.splice(pivotIndex,1)[0]; //取出基准数，并去除，splice返回值为数组。
  var left=[]; 
  var right=[];
  for(var i=0;i<arr.length;i++){
      if(arr[i]<pivot){
          left.push(arr[i]);
      }else{
          right.push(arr[i]);
      }
  }
  return quickSort3(left).concat([pivot],quickSort3(right)); //加入基准数
}



let arr = [1, 73, 90, 35,10, 819, 8492, 2,11,758,8,85,66,11,98,3,782,10,57]
quickSort2(arr,0,arr.length-1)
console.log(arr);



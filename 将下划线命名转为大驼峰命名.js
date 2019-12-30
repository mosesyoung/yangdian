let a_b_c="a_b_c";
let j={
  a_b_c
}
function getHump(obj) {
  // let arr =JSON.stringify(obj).split('"');
  let reg = /"[\w\d]+"(?=:)/ig;
  let varJ={};
  let arr=[];
  var a;
  while((a=reg.exec(JSON.stringify(obj)))!=null){
    // arr.push(a[0].replace(/_(\w)/),'$1'.toUpperCase());
    varJ[a[0].replace((/_(\w)/),$1=>$1.toUpperCase())]=obj[a[0]]
  };
  let{aBC}=varJ;
  console.log(varJ,obj)
  // function getVar(params) {
  //   return params;
  // }
  // return getVar({...arr});
}
getHump(j);

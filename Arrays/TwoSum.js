let arr = [1,2,3,4]
let target = 5

let dict = {}
let total = arr.reduce((a,b)=> a+b)

for(let i=0; i<arr.length; i++){
  let diff = target - arr[i]
  if(dict[diff]!== undefined){
    console.log(dict[diff], i)
  }
  else{
    dict[arr[i]] = i
  }
}

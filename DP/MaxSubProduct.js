let n = [-1,2,-3,-4,-3]

let curMax = 1, curMin = 1, res = Math.max(...n)

for(let i=0; i< n.length; i++){
    if(n[i] == 0){
        curMax = 1
        curMin = 1
        continue
    }
    curMax = Math.max(n[i], curMax* n[i], curMin*n[i])
    curMin =  Math.max(n[i], curMax* n[i], curMin*n[i])
    res = Math.max(curMax, res)
}

console.log(res)
let n = [2, 3, 1, 1, 4];
let goal = n[n.length - 1];

for (let i = n.length; i >= 0; i--) {
  if (n[i] + i >= goal) {
    goal = i;
  }
}

console.log(goal, "Result : ", goal==0);

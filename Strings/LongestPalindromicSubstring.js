let str = "cbbd";
let res = "";
let resLen = 0;

for (let i = 0; i < str.length; i++) {
  //odd
  let l = i,
    r = i;
  while (l >= 0 && r < str.length && str[l] == str[r]) {
    if (r - l + 1 > resLen) {
      resLen = r - l + 1;
      res = str.substring(l, r+1 );
    }
    l--;
    r++;
  }
  //even
  l = i;
   r = i + 1;
  while (l >= 0 && r < str.length && str[l] == str[r]) {
    if (r - l + 1 > resLen) {
      resLen = r - l + 1;
      res = str.substring(l, r +1);
    }
    l--;
    r++;
  }
}

console.log(resLen, res);

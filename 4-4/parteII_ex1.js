function verificaPalindrome(value) {
  let palindrome = "";
  for(n=value.length-1; n>=0; n-=1) {
    palindrome += value[n]
  }
  if (palindrome == value) {
    console.log(true)
  }
  else {
    console.log(false)
  }
}

verificaPalindrome("arara")


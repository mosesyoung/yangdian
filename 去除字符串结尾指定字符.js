function removeLetter(str, a) {
 return str.replace(/a(?!.*a)(.*)$/, '$1')};
console.log(removeLetter('djiwajdkowakdoka;dkwo', 'a'))
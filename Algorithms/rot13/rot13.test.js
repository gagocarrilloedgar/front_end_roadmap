function rot13(str) {
    var normal_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var ROT13_alphabet = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split("");
  
    var arr_str = str.split("");
    var new_str = arr_str;
    var pos =0;
    for (let i = 0; i <arr_str.length;i++) {
      if (!arr_str[i].match(/[a-z]/i)) {
        new_str[i] === arr_str[i];
      } else {
        pos = normal_alphabet.indexOf(arr_str[i]);
        new_str[i] = ROT13_alphabet[pos];
      }
  
    }
    console.log(new_str.join(''));
    return new_str.join('');
  
  }
  
  rot13("SERR PBQR PNZC");
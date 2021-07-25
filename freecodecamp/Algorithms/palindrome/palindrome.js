function palindrome(str) {
    var arr = str.toLowerCase().replace(/[^0-9a-z]/gi, "").split("");
    var reverse_arr = str.toLowerCase().replace(/[^0-9a-z]/gi, "").split("").reverse();
    var length = arr.length;
    var i = 0;
    console.log(arr)

    while (arr[i] === reverse_arr[i]) {
        i++;
        if (i === length - 1) {
            return true;
        }
    }
    return false;
}



palindrome("A man, a plan, a canal. Panama");
function fib(n) {
    if(n == 0){
        arr = [0]
        return arr;
    }
    else if(n == 1){
        arr = [0, 1]
        return arr;
    }
    else{
        arr = fib(n - 1);
        // console.log(arr);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(10));
// fib(10);

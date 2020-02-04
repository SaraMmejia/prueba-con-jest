function findEven(arr){
    let a = 0
    for (i = 0; i < arr.length; i++){
        let b = Array.from(arr[i].toString(),Number)
        if(b.length %2 === 0){
            a++
        }
    }
    console.log(a)
}

findEven([12,354,456,12452,468])
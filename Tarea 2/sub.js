function subtractProductAndSum(num){
    let a=0;
    let b=1;
    num =Array.from(num.toString(),Number)
    for (i=0; i<num.length;i++){
        a+=num[i]
        b*=num[i]
    }
    console.log(b-a);
}
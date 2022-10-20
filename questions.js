function ReverseArray(arr,k){
l=arr.length;
if(l<k){
    return;
}
for(var i =0; i<=k;i++){
    var temp =arr[i];
    arr[i]=arr[k]
    arr[k]=temp;
}

}

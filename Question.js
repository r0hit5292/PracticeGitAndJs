function AddString(str,n){

    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let ArrayNew =[];
    var k=0;
    
     for(let i=0;i<str.length;i++){
       let p = str.charAt(i);
     
       for(var j=0;j<alpha.length;j++){
           if(p===alpha[j]){
                k = k+j;
           }
               
       }
       //console.log(k);
      let  l = k + n;
         if(l>25){
            l = l-26;
         }
        ArrayNew.push(alpha[l]);
        k=0;
     }
return ArrayNew;
}
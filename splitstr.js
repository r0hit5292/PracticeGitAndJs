function SplitString(str){
    var Arrayans=[];
    var k ="";
    for(var i =0;i<=str.length;i++){
       
        if(str.charAt(i)===","||str.length==i){
           Arrayans.push(k);
           k="";
        }
        else{
             
            k = k+str.charAt(i);
        
        }
    }
    return Arrayans;
    }
    var names = 'rohit,sumit,smit,astitva';
    var a=SplitString(names);
    console.log(a);
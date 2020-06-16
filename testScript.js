function simpleSwitch(){
        //'use strict';
        let x = [1,2,3,4,5,6,7]
        for (const j of x){
            console.log(Boolean(j));
        }
        if (x)
            console.log("true");
        try{
            x = j / 0;
            console.log(x);
        }catch(error){
            console.log(error.message);
        }
}

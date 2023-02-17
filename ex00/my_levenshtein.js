function my_levenshtein(param_1,param_2){
    var x=0;
    if(param_1.length == param_2.length){
        for(let i=0;i< param_1.length;i++){
            if(param_1[i] != param_2[i]){
                x++;
            }
        }
    }else{
        x = -1;
    }
return x;
}
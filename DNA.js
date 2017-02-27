/**
 * Created by James on 2/27/2017.
 */
function DNAStrand(str){

    var arr = str.split("");

    for(var a=0; a<arr.length; a++){

        if(arr[a] === 'G'){
            arr[a] ="C";
        }else if(arr[a] === 'C'){
            arr[a] = 'G';
        }else if(arr[a] === 'A'){
            arr[a] = 'T';
        }else if(arr[a] === 'T'){
            arr[a] = 'A';
        }
    }
    return arr.join("");
}
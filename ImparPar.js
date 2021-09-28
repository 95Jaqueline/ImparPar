var NumeroDeAlunos = window.prompt ("Quantidade de alunos presentes: ");
for (let i=0; i <=NumeroDeAlunos; i++){
    if (i ==0){
        console.log("Este numero é ZERO");
    } else if (i%2 ==0 ) {
        console.log ("Este número é PAR  " + i);
    }else{
        console.log("Este número é IMPAR"  + i)
    }
}
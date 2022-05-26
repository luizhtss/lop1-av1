//IRPF

//Para salários bases de até 1903,98, está isento o desconto de IRPF

if(sb >= 1903.99 && sb <= 2826.65){
    //Para salários bases maior ou igual a 1903,99 e menor ou igual a 2826,95, a taxa de desconto de IRPF incidido no salário base é de 7,5%
    d = (sb * (7.5 / 100))
    sb = sb - d
}else if(sb >= 2826.66 && sb <= 3751.05){
    //Para salários bases maior ou igual a 2826,66 e menor ou igual a 3751,05, a taxa de desconto de IRPF incidido no salário base é de 15%
    d = ((2826.65 - 1903.99  ) * (7.5 / 100)) + ((3751.05 - 2826.66 ) * (15 / 100))
    sb = sb - d 
}else if(sb >= 3751.06 && sb <= 4664.68){
    //Para salários bases maior ou igual a 3751,05 e menor ou igual a 4664.68 , a taxa de desconto de IRPF incidido no salário base é de 22,5%
    d = ((2826.66 - 1903.99) * (7.5 / 100)) + ((3751.05 - 2826.66 ) * (15 / 100) + ((4664.68 - 3751.06) * (22.5 / 100)))
    sb = sb - d
}else if(sb >= 4664.68){
     //Para salários bases maiores ou iguais a 4664.68, a taxa de desconto de IRPF incidido no salário base é de 27,5%
    d = ((2826.65 - 1903.99 ) * (7.5 / 100)) + ((3751.05 - 2826.66 ) * (15 / 100)) + ((4664.68 - 3751.06 ) * (22.5 / 100)) +  ((sb - 4664.68) * (27.5 / 100))
    sb = sb - d
}
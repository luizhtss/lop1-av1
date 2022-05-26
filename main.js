// Efetua a leitura dos dados.
sb = parseFloat(prompt("Entre com um salário bruto: "))

//INSS

if(sb<=1100){
    //Para salários brutos menor ou igual a 1100,01 a taxa de desconto de INSS incidido nesse valor é de 7,5%
    sb = sb - (sb * (7.5 / 100))
} else if(sb >= 1100.01 && sb <= 2203.48){
    //Para salários brutos maior ou igual a 1100,01 e menor ou igual a 2203,48, a taxa de desconto de INSS incidido no salário brutor é de 9%
    d = ((2203.48 - 1100.01) * (9 / 100)) + ((sb * (7.5 / 100)))
    sb = sb - d 
}else if(sb >= 2203.49 && sb <= 3305.22){
    //Para salários brutos maior ou igual a 2203,49 e menor ou igual a 3305,22, a taxa de desconto de INSS incidido no salário brutor é de 12%
    d = ((2203.48 - 1100.01) * (9 / 100)) + ((sb * (7.5 / 100)) + ((3305.22 - 2203.49) * (12 / 100)))
    sb = sb - d
}else if(sb >= 3305.23 && sb <= 6433.57) {
     //Para salários brutos maior ou igual a 3305,23 e menor ou igual a 6433,57, a taxa de desconto de INSS incidido no salário bruto é de 14%, porém deve ser analisado se esse desconto ultrapassa o valor máximo de desconto do INSS que é de 828,39.
    d = ((2203.48 - 1100.01) * (9 / 100)) + ((sb * (7.5 / 100)) + ((3305.22 - 2203.49) * (12 / 100)) + ((6433.57 - 3305.23 ) * (14 / 100)))
    if(d >= 828.39){
        sb = sb - 828.39
    }else{
        sb = sb - d
    }
}else{
    //Se o salário bruto for maior que 6433,57 e a taxa de desconto de INSS de 14%, quando incidido no salário bruto, ultrapassar o valor máximo de desconto do INSS de 828,39, o desconto fica fixo em 828,2.
    d = ((2203.48 - 1100.01) * (9 / 100)) + ((sb * (7.5 / 100)) + ((3305.22 - 2203.49) * (12 / 100)) + ((6433.57 - 3305.23 ) * (14 / 100)))
    if(d >= 828.39){
        sb = sb - 828.39
    }else{
        sb = sb - d
    }
}
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


// Formata e exibe a saída do salário base.
sb = sb.toFixed(2)
alert(sb)
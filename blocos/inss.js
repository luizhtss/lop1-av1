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
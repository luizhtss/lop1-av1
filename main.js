// Efetua a leitura dos dados.
var salario_bruto = parseFloat(prompt("Entre com um salário bruto: "))

var salario_base = 0
var salario_liquido = 0


//INSS

if(salario_bruto<=1100){
    //Para salários brutos menor ou igual a 1100,01 a taxa de desconto de INSS incidido nesse valor é de 7,5%/
    d = (salario_bruto * (7.5 / 100))
    salario_base = salario_bruto - d
} else if(salario_bruto >= 1100.01 && salario_bruto <= 2203.48){
    //Para salários brutos maior ou igual a 1100,01 e menor ou igual a 2203,48, a taxa de desconto de INSS incidido no salário brutor é de 9%/
    d = ((1100) * (7.5 / 100)) + ((salario_bruto-1100.01) * (9 / 100))
    salario_base = salario_bruto - d 
}else if(salario_bruto >= 2203.49 && salario_bruto <= 3305.22){
    //Para salários brutos maior ou igual a 2203,49 e menor ou igual a 3305,22, a taxa de desconto de INSS incidido no salário brutor é de 12%/
    d = ((2203.48 - 1100.01) * (9 / 100)) + (1100 * (7.5 / 100)) + ((salario_bruto - 2203.49) * (12 / 100))
    salario_base = salario_bruto - d
}else if(salario_bruto >= 3305.23 && salario_bruto <= 6433.57) {
     //Para salários brutos maior ou igual a 3305,23 e menor ou igual a 6433,57, a taxa de desconto de INSS incidido no salário bruto é de 14%, porém deve ser analisado se esse desconto ultrapassa o valor máximo de desconto do INSS que é de 828,39./
    d = ((2203.48 - 1100.01) * (9 / 100)) + ((1100 * (7.5 / 100)) + ((3305.22 - 2203.49) * (12 / 100)) + ((salario_bruto - 3305.23 ) * (14 / 100)))
    if(d >= 828.39){
        salario_base = salario_bruto - 828.39
    }else{
        salario_base = salario_bruto - d
    }
}else{
    //Se o salário bruto for maior que 6433,57 e a taxa de desconto de INSS de 14%, quando incidido no salário bruto, ultrapassar o valor máximo de desconto do INSS de 828,39, o desconto fica fixo em 828,2./
     d = ((2203.48 - 1100.01) * (9 / 100)) + ((1100 * (7.5 / 100)) + ((3305.22 - 2203.49) * (12 / 100)) + ((salario_bruto - 3305.23 ) * (14 / 100)))
    if(d >= 828.39){
        salario_base = salario_bruto - 828.39
    }else{
        salario_base = salario_bruto - d
    }
}

//IRPF

//Para salários bases de até 1903,98, está isento o desconto de IRPF

if (salario_base < 1903.99){
	  salario_liquido = salario_base
}else if(salario_base >= 1903.99 && salario_base <= 2826.65){
    //Para salários bases maior ou igual a 1903,99 e menor ou igual a 2826,95, a taxa de desconto de IRPF incidido no salário base é de 7,5%/
    d = ((salario_base - 1903.99) * (7.5 / 100))
    salario_liquido = salario_base - d
}else if(salario_base >= 2826.66 && salario_base <= 3751.05){
    //Para salários bases maior ou igual a 2826,66 e menor ou igual a 3751,05, a taxa de desconto de IRPF incidido no salário base é de 15%/
    d = ((2826.65 - 1903.99  ) * (7.5 / 100)) + ((salario_base - 2826.66 ) * (15 / 100))
    salario_liquido = salario_base - d 
}else if(salario_base >= 3751.06 && salario_base <= 4664.68){
    //Para salários bases maior ou igual a 3751,05 e menor ou igual a 4664.68 , a taxa de desconto de IRPF incidido no salário base é de 22,5%/
    d = ((2826.66 - 1903.99) * (7.5 / 100)) + ((3751.05 - 2826.66 ) * (15 / 100) + ((salario_base - 3751.06) * (22.5 / 100)))
    salario_liquido = salario_base - d
}else if(salario_base >= 4664.68){
     //Para salários bases maiores ou iguais a 4664.68, a taxa de desconto de IRPF incidido no salário base é de 27,5%/
    d = ((2826.65 - 1903.99 ) * (7.5 / 100)) + ((3751.05 - 2826.66 ) * (15 / 100)) + ((4664.68 - 3751.06 ) * (22.5 / 100)) +  ((salario_base - 4664.68) * (27.5 / 100))
    salario_liquido = salario_base - d
}

// Formata e exibe a saída do salário liquido.
salario_liquido = salario_liquido.toFixed(2)
alert(salario_liquido)

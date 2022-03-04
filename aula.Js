const  valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => ac + v) //ac valor acumulado  o reduce faz a soma dos valores tipo soma o 1 + 2 e acumula o valor de 3 o v e o numero da vez ai na proxima soma o 3 mais o 3 e por fim o 6 mais o 4
console.log(soma) 





/** 
const nomes = [ "ana maria", "antonio", "rodrigo", "alex", "cristina"]

const res = nomes.map ((nome) => nome.charAt(0))
console.log(res)

const todosComecamComA = nomes.every(nome => nome.startsWith("A"))
console.log(todosComecamComA)




const nomes = [ "ana maria", "antonio", "rodrigo", "alex", "cristina"]

const apenasA = nomes.filter((n)=>{
    return n.startsWith("A")
});
console.log(apenasA)








const nomes = [ "ana maria", "antonio", "rodrigo", "alex", "cristina"]
//arrow function
() => {}

    function filter (funcao){
        funcao()
    }

const apenasA = nomes.filter();
*/
//const numeros = [1, 2]
//console.log(numeros.length)
//numeros[4] = 2
//console.log(numeros.length)






//const numeros = [1, 2]
//numeros [0] = 2
 //console.log(numeros)




//int v [10]

//const v1 = []
//console.log(v1.length)

//v1 [0] = 3.4
//v1[10] = 2
//v1[2] = true
//console.log(v1.length)

//for (let i = 0; i < v1.length; i++){
//    console.log(v1[i])
//}




// == ===
//a = 2 // atribuição
//console.log (1 == 1) //atribuição comparada
//console.log (1 == "1") //comparando numero e string da errado
//console.log (1 === "1")//coerção explicita ele compara por tipo depois por valor 
//console.log ( true == 1)//numero 1 é igual a true 
//console.log (1 == [1])
//console.log([] == false)
//console.log([] == [])

//const a = []
//const b = a
//console.log (a == b)

//const n1 = 2 
//const n2 = '3'

//const n3 = n1 + n2
//console.log(n3)
// const n4 = n1 + Number(n2)
//const n4 = n1 + +n2 //transforma o n em number
//console.log (n4)

//class Pessoa {
    //  void andar (){

        // }
        //a = 2;
        //a = andar ;
        //void m () {
            // a();
            //    }
            //}
//var idade = 18
//console.log ("oi," + nome)
//if (idade >= 18) {
    //çamento hoist o efeito do var iça o var nome para fora do if
    //  var nome "joão"
    // console.log ("Parabens,"+ nome + ". voce pode dirigir.")
    //printf ("parabens, %s", nome);
    // console.log (`parabens, ${nome}. voce pode didrigir .`)
    //}
    //console.log ("até mais, " + nome)

// nao pode declarar 2 variaveis com o mesmo nome 
//var linguagem = "javascript"
//console.log ("aprendendo," + linguagem)
//linguagem = "java"
//console.log ("aprendendo," + linguagem)

//const nome  = "jose"
//const idade = 27 
//nome =  "maria"
//const a 

//let a = 2
//let b = 'abc'
//let endereco = `rua K, 12 `
 
//var c = 2+3 
//var d = "abc"
// 01- Crie um array que receba 5 itens e exiba no console.

let list =['Celular','Computador','Oculos','Livro','Mouse']

console.log(list)

// 02- Utilize um método para adicionar um nome ao inicio do array e outro no final.
list.unshift('Caneta')
list.push ('Carteira')

console.log(list)

//  03- Utilize um método para adicionar dois nomes ao fim do array.

list.slice (7,0, 'Chave', 'Radio')

console.log(list)

//  04- Utilize um método para remover o primeiro e o último nome do array.

list.shift()
list.pop()

console.log(list)

// 06 Utilize um método para organizar em ordem crescente o seguinte array.

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()

console.log(numbers)

// 07 Crie um objeto que receba ao menos três propriedades sobre você.

let identidade ={
    nome:'Raphael',
    idade: '26',
    cidade:'Marataízes-ES'
    }

    console.log(identidade)

 // 08 Adicione uma nova propriedade sem alterar seu objeto inicial.

 identidade.nascimento = '1997'

 console.log (identidade)

 // 09 Remova uma propriedade desse objeto.

 delete identidade.nascimento

 console.log(identidade)

// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
    nome: 'Patrick',
    idade: '45',
    telefone: '+5528999547515',
    amigos: [ 'José', 'Ricardo', 'Magno', 'Vinicius']
    },

    {
        nome: 'Vinicius',
        idade: '38',
        telefone: '+5528999654723',
        amigos: ['Bianca', 'Joana','Rita', 'Karol']
    },
    {
        nome: 'Lazaro',
        idade: '25',
        telefone: '+552875451786',
        amigos: ['Pedro', 'Ronaldo','João', 'Antonio']
    },
    {
        nome: 'Antonio',
        idade: '50',
        telefone: '+5522999567841',
        amigos: ['Humberto', 'Gabriel', 'Kaio', 'Cristian']
    },
]
console.log(cadastro)

// 12 Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
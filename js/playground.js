function calculaIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Carla", 
    idade: 16, 
}; 

const pessoa2 = {
    nome: "Marta", 
    idade: 25, 
}; 

const animal = {
    nome: "Feijão", 
    idade: 6,
    raca: "Vira-lata" 
}; 

console.log(calculaIdade.call(pessoa1, 30));

console.log(calculaIdade.apply(animal, [25]));
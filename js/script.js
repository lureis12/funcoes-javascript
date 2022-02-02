const alunos = [
    {
        nome: "João",
        nota: 4,
        turma: "5B"
    },
    {
        nome: "Maria",
        nota: 7,
        turma: "4B"
    },
    {
        nome: "Sofia",
        nota: 9,
        turma: "5C"
    },
    {
        nome: "Paulo",
        nota: 5,
        turma: "4B"
    }
];

function alunosAprovados (array, media) {
    let aprovados = []
    for (i = 0; i < array.length; i++) {
        const {nota, nome} = array[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
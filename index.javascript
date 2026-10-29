
const alunos = [
    { nome: "Ana", matricula: 101, nota1: 8, nota2: 9 },
    { nome: "Bruno", matricula: 102, nota1: 7, nota2: 6 },
    { nome: "Carla", matricula: 103, nota1: 9, nota2: 10 },
    { nome: "Daniel", matricula: 104, nota1: 5, nota2: 7 },
    { nome: "Eduarda", matricula: 105, nota1: 6, nota2: 8 }
];

// Verifica se as notas são válidas
function notasValidas(aluno) {
    return (
        Number.isFinite(aluno.nota1) &&
        Number.isFinite(aluno.nota2) &&
        aluno.nota1 >= 0 && aluno.nota1 <= 10 &&
        aluno.nota2 >= 0 && aluno.nota2 <= 10
    );
}

// Calcula a média do aluno
function calcularMedia(aluno) {
    return (aluno.nota1 + aluno.nota2) / 2;
}

// Exibe os dados de todos os alunos
function apresentarAlunos(alunos) {
    console.log("===== RELATÓRIO DE ALUNOS =====");

    alunos.forEach(function(aluno) {
        console.log("------------------------------");
        console.log("Nome: " + aluno.nome);
        console.log("Matrícula: " + aluno.matricula);

        // Valida as notas antes de calcular
        if (!notasValidas(aluno)) {
            console.log("Situação: Notas inválidas");
            console.log("Verifique se as notas estão entre 0 e 10.");
            return;
        }

        const media = calcularMedia(aluno);
        const situacao = media >= 7 ? "Aprovado" : "Reprovado";

        console.log("Nota 1: " + aluno.nota1);
        console.log("Nota 2: " + aluno.nota2);
        console.log("Média: " + media.toFixed(2));
        console.log("Situação: " + situacao);
    });
}

// Exibe somente os alunos aprovados
function listarAprovados(alunos) {
    console.log("\n===== LISTA DE APROVADOS =====");

    const aprovados = alunos.filter(function(aluno) {
        return notasValidas(aluno) &&
               calcularMedia(aluno) >= 7;
    });

    if (aprovados.length === 0) {
        console.log("Nenhum aluno aprovado.");
        return;
    }

    aprovados.forEach(function(aluno) {
        console.log(
            aluno.nome +
            " | Matrícula: " + aluno.matricula +
            " | Média: " + calcularMedia(aluno).toFixed(2)
        );
    });
}

// Executa o sistema
apresentarAlunos(alunos);
listarAprovados(alunos);

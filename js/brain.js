// ==========================================
// CÉREBRO DA PLATAFORMA (Motor de Correção)
// ==========================================

// 1. Variável de Placar Global
let acertosGlobais = 0;

// 2. Função de Validação Melhorada
function validarResposta(inputElement, respostaCorreta) {
    // ANTI-TRAPAÇA: Se o aluno já acertou (input bloqueado), a função para aqui.
    if (inputElement.disabled) return;

    // Pega o valor que o aluno digitou
    let valorDigitado = inputElement.value;

    // LIMPEZA INTELIGENTE: Remove espaços acidentais e troca vírgula por ponto
    valorDigitado = valorDigitado.trim().replace(',', '.');

    // Se o aluno apagar tudo, o input volta ao estilo padrão
    if (valorDigitado === "") {
        inputElement.style.backgroundColor = "transparent";
        inputElement.style.borderColor = "#323238"; // Borda padrão cinza escuro
        inputElement.style.color = "#e1e1e6";
        return;
    }

    // Compara a resposta digitada com a correta (ignorando maiúsculas e minúsculas)
    if (valorDigitado.toLowerCase() === respostaCorreta.toLowerCase()) {
        
        // 🟢 FEEDBACK VISUAL: ACERTOU
        inputElement.style.backgroundColor = "#00875f"; // Fundo verde brilhante
        inputElement.style.borderColor = "#00875f";
        inputElement.style.color = "#ffffff";
        
        // Bloqueia o campo para registrar o acerto definitivo
        inputElement.disabled = true;

        // Soma +1 no placar global e manda atualizar na tela
        acertosGlobais++;
        atualizarPlacarNaTela();

    } else {
        
        // 🔴 FEEDBACK VISUAL: ERROU
        inputElement.style.backgroundColor = "#aa2834"; // Fundo vermelho
        inputElement.style.borderColor = "#aa2834";
        inputElement.style.color = "#ffffff";
        
    }
}

// 3. Função que atualiza o número no HTML
function atualizarPlacarNaTela() {
    let elementoPlacar = document.getElementById("contador-acertos");
    
    // Verifica se a página atual possui um placar antes de tentar atualizar
    if (elementoPlacar) {
        elementoPlacar.innerText = acertosGlobais;
    }
}

// 4. Função de Navegação
function voltarParaHome() {
    // Como os arquivos de conteúdo estão dentro de subpastas como "02-algebra/01-expressoes/",
    // o "../../" garante que o navegador volte duas pastas para encontrar o index.html na raiz.
    window.location.href = "../../index.html";
}

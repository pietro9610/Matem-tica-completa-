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

// Função para desenhar as questões na tela
// --- FUNÇÕES DE EXERCÍCIOS (DA LINHA 70 PARA BAIXO) ---

// 1. Função para desenhar as questões na tela (COM DICA E RESOLUÇÃO)
function gerarExercicios(tema, nivel) {
    const container = document.getElementById('container-questoes');
    const lista = BANCO_QUESTOES[tema][nivel];

    // Sorteia 10 aleatórias
    const sorteadas = lista.sort(() => Math.random() - 0.5).slice(0, 10);

    container.innerHTML = ""; // Limpa o aviso de carregando

    sorteadas.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card-exercicio';
        
        card.innerHTML = `
            <h3>Desafio ${index + 1}</h3>
            <p>${item.q}</p>

            <input type="text" class="input-resposta" 
                   onchange="conferir(this, '${item.res}', 'dica-${index}')"
                   placeholder="Ex: x^2 (use ^ para potência)">

            <p id="dica-${index}" class="texto-dica" style="display:none; color: #f39c12; margin-top: 10px;">
                💡 <strong>Dica:</strong> ${item.dica}
            </p>

            <button class="btn-resolucao" onclick="toggleResolucao('res-${index}')" style="margin-top: 10px; display: block; background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">
                Ver Resolução
            </button>

            <div id="res-${index}" class="painel-resolucao" style="display:none; background: #222; padding: 10px; border-radius: 5px; margin-top: 5px; border-left: 4px solid #3498db;">
                <hr style="border: 0.5px solid #444;">
                <p style="color: #bdc3c7;">${item.ops}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}


// 2. Função para mostrar/esconder a resolução
function toggleResolucao(id) {
    const painel = document.getElementById(id);
    painel.style.display = painel.style.display === 'none' ? 'block' : 'none';
}

// 3. Função para conferir a resposta (Mostra a dica se errar)
function conferir(campo, correta, idDica) {
    const dicaElement = document.getElementById(idDica);
    
    // Normaliza a resposta (remove espaços e ignora maiúsculas)
    if (campo.value.trim().toLowerCase() === correta.toLowerCase()) {
        campo.style.borderColor = "#2ecc71";
        campo.style.backgroundColor = "#e8f8f0";
        campo.style.color = "#000";
        campo.disabled = true;
        dicaElement.style.display = 'none'; // Esconde a dica se acertar
    } else {
        campo.style.borderColor = "#e74c3c";
        campo.style.backgroundColor = "#fccae9";
        campo.style.color = "#000";
        dicaElement.style.display = 'block'; // MOSTRA A DICA SE ERRAR!
    }
}

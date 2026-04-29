/**
 * ==========================================================================
 * MOTOR DE CORREÇÃO UNIVERSAL
 * ==========================================================================
 * Valida a entrada do usuário aceitando frações, vírgulas e ignorando espaços.
 * * @param {string} inputId - O ID do campo de texto (input) no HTML.
 * @param {number|string} respostaCorreta - O valor correto (pode ser "1/2" ou 0.5).
 * @param {string} dicaErro - A mensagem que aparece se o aluno errar.
 */
function validarResposta(inputId, respostaCorreta, dicaErro) {
    const inputElement = document.getElementById(inputId);
    
    // Procura ou cria o espaço para a mensagem de feedback abaixo do input
    let msgElement = inputElement.nextElementSibling;
    if (!msgElement || !msgElement.classList.contains('feedback-msg')) {
        msgElement = document.createElement('span');
        msgElement.className = 'feedback-msg';
        // Insere a mensagem logo após o input
        inputElement.parentNode.insertBefore(msgElement, inputElement.nextSibling);
    }

    // 1. Limpeza da entrada do usuário: tira espaços e troca vírgula por ponto
    let valorUsuario = inputElement.value.replace(/\s+/g, '').replace(',', '.');
    let valorCalculado;

    // 2. Reconhecimento de Frações (ex: converte "1/2" para 0.5)
    if (valorUsuario.includes('/')) {
        const partes = valorUsuario.split('/');
        // Verifica se realmente tem dois números antes de dividir
        if (partes.length === 2 && !isNaN(partes[0]) && !isNaN(partes[1]) && partes[1] !== "0") {
            valorCalculado = parseFloat(partes[0]) / parseFloat(partes[1]);
        } else {
            valorCalculado = NaN; // Formato inválido ou divisão por zero
        }
    } else {
        // Se não for fração, apenas converte para decimal
        valorCalculado = parseFloat(valorUsuario);
    }

    // 3. Tratamento da Resposta Correta (caso seja passada como "1/2" no código)
    let valorCorretoCalc = typeof respostaCorreta === 'string' && respostaCorreta.includes('/')
        ? parseFloat(respostaCorreta.split('/')[0]) / parseFloat(respostaCorreta.split('/')[1])
        : parseFloat(respostaCorreta);

    // 4. Comparação e Feedback (Usa uma pequena margem < 0.0001 para evitar bugs de dízimas periódicas)
    if (!isNaN(valorCalculado) && Math.abs(valorCalculado - valorCorretoCalc) < 0.0001) {
        // Acertou!
        inputElement.classList.remove('input-erro');
        inputElement.classList.add('input-sucesso');
        msgElement.innerHTML = '✅ Correto!';
        msgElement.style.color = '#2ecc71';
    } else {
        // Errou!
        inputElement.classList.remove('input-sucesso');
        inputElement.classList.add('input-erro');
        msgElement.innerHTML = '❌ Dica: ' + dicaErro;
        msgElement.style.color = '#e74c3c';
    }
}

/**
 * ==========================================================================
 * SISTEMA DE NAVEGAÇÃO INTELIGENTE
 * ==========================================================================
 * Uma função segura para voltar ao Dashboard (index.html), não importa em 
 * qual subpasta do projeto o aluno esteja.
 */
function voltarParaHome() {
    // A estrutura padrão é: /02-algebra/01-expressoes/teoria.html (2 pastas de profundidade)
    // O comando '../' faz voltar uma pasta. '../../' volta duas pastas até a raiz.
    // Isso garante que funcione localmente e no GitHub Pages sem quebrar a URL.
    window.location.href = '../../index.html';
}

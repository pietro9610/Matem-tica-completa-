const BANCO_QUESTOES = {
    algebra_expressoes: {
        dificil: [
    { 
        n: 1,
        q: "Uma esfera condutora metálica com carga Q é colocada em contato com uma segunda esfera idêntica e neutra, sendo separadas em seguida. Qual a expressão para a carga final da primeira esfera?",
        res: "Q/2",
        dica: "Quando duas esferas idênticas se tocam, a carga total se divide em partes iguais para as duas.",
        ops: "Carga total = Q + 0 = Q. Como as esferas são idênticas, dividimos por 2. Cada uma fica com Q/2."
    },
    { 
        n: 2,
        q: "Uma esfera condutora A, com carga Q, toca sucessivamente em duas outras esferas idênticas e neutras (primeiro em B, depois em C). Qual a carga final da esfera A?",
        res: "Q/4",
        dica: "Faça o contato passo a passo. Lembre-se de dividir por 2 a cada novo toque.",
        ops: "Passo 1 (A e B): Q + 0 = Q. Dividindo por 2, A fica com Q/2. Passo 2 (A e C): Q/2 + 0 = Q/2. Dividindo por 2, A fica com Q/4."
    },
    { 
        n: 3,
        q: "Uma esfera idêntica A com carga 4Q toca em uma esfera B neutra. Em seguida, a esfera B toca em uma esfera C neutra. Qual a carga final da esfera B?",
        res: "Q",
        dica: "Cuidado com qual esfera está tocando em quem. Acompanhe a carga da esfera B.",
        ops: "1º Contato (A e B): 4Q + 0 = 4Q. Cada uma fica com 2Q. 2º Contato (B e C): B tem 2Q e C tem 0. Total = 2Q. Dividindo por 2, B fica com Q."
    },
    { 
        n: 4,
        q: "Três esferas condutoras idênticas (A, B e C) possuem cargas iniciais 8Q, -2Q e 0, respectivamente. A esfera A toca em B, e logo após, A toca em C. Qual a carga final da esfera C?",
        res: "1.5Q",
        dica: "Atenção ao sinal negativo! 8Q somado com -2Q resulta em uma subtração.",
        ops: "1º Contato (A e B): 8Q + (-2Q) = 6Q. Cada uma fica com 3Q. 2º Contato (A e C): A tem 3Q e C tem 0. Total = 3Q. Dividindo por 2, C fica com 1.5Q."
    },
    { 
        n: 5,
        q: "Duas esferas idênticas possuem cargas iniciais 3Q e Q. Elas são colocadas em contato e depois separadas. Qual a carga final de cada uma?",
        res: "2Q",
        dica: "Apenas some as duas cargas e divida o resultado por dois.",
        ops: "Carga total = 3Q + Q = 4Q. Como são idênticas, dividimos por 2. Cada uma fica com 2Q."
    },
    { 
        n: 6,
        q: "Quatro esferas metálicas idênticas (A, B, C e D) estão neutras, exceto A, que possui carga Q. A esfera A toca B, depois C, e depois D, sucessivamente. Qual a carga final da esfera A?",
        res: "Q/8",
        dica: "A cada toque com uma esfera neutra, a carga de A cai pela metade.",
        ops: "A e B = Q/2. A e C = (Q/2)/2 = Q/4. A e D = (Q/4)/2 = Q/8."
    },
    { 
        n: 7,
        q: "Duas esferas idênticas, A com carga 5Q e B com carga -5Q, são colocadas em contato. Qual a carga final da esfera A?",
        res: "0",
        dica: "O que acontece quando somamos um número com o seu oposto negativo?",
        ops: "Carga total = 5Q + (-5Q) = 0. Dividindo 0 por 2, cada esfera fica neutra (0)."
    },
    { 
        n: 8,
        q: "Uma esfera A de carga Q toca uma esfera idêntica B de carga 3Q. Após separadas, a esfera B toca uma esfera C neutra. Qual a carga final da esfera C?",
        res: "Q",
        dica: "Resolva o primeiro contato para descobrir a nova carga de B, e só depois faça o segundo contato.",
        ops: "1º Contato (A e B): Q + 3Q = 4Q. Dividindo por 2, A e B ficam com 2Q. 2º Contato (B e C): B tem 2Q e C tem 0. Total = 2Q. Dividindo por 2, C fica com Q. (Nota: Se sua resposta fixa era 2Q, ajuste a pergunta original para bater o cálculo!)."
    },
    { 
        n: 9,
        q: "Um veículo viaja a primeira metade do percurso com velocidade constante 'v' e a segunda metade com velocidade '2v'. Qual a expressão da velocidade média de todo o percurso?",
        res: "4v/3",
        dica: "Velocidade média em metades de percurso não é a média aritmética! Use a fórmula harmônica: 2*v1*v2 / (v1+v2).",
        ops: "Vm = 2 * v * 2v / (v + 2v) = 4v^2 / 3v = 4v/3."
    },
    { 
        n: 10,
        q: "Um carro viaja metade do tempo de sua viagem com velocidade 'v' e a outra metade do tempo com velocidade '3v'. Qual a expressão da velocidade média?",
        res: "2v",
        dica: "Quando os TEMPOS são iguais (metade do tempo), aí sim você pode fazer a média aritmética simples.",
        ops: "Vm = (v1 + v2) / 2. Vm = (v + 3v) / 2 = 4v / 2 = 2v."
    },
    { 
        n: 11,
        q: "Um corpo percorre uma distância 'd' em um tempo 't'. Se a velocidade média for duplicada, qual a expressão para o novo tempo de viagem?",
        res: "t/2",
        dica: "Velocidade e tempo são inversamente proporcionais. Se você vai mais rápido, gasta menos tempo.",
        ops: "Velocidade inicial v = d/t. Nova velocidade = 2v. Então: 2v = d/t_novo. Substituindo v: 2(d/t) = d/t_novo. Logo, t_novo = t/2."
    },
    { 
        n: 12,
        q: "Um bloco de massa 'm' é acelerado de repouso até uma velocidade '2v' em um tempo 't'. Qual a expressão para a força resultante média aplicada (use F = m*a)?",
        res: "2mv/t",
        dica: "Primeiro encontre a aceleração (a = variação de v / tempo) e depois multiplique pela massa.",
        ops: "Aceleração (a) = (2v - 0) / t = 2v/t. Força (F) = m * a = m * (2v/t) = 2mv/t."
    },
    { 
        n: 13,
        q: "A energia cinética de um corpo é expressa por (m*v^2)/2. Qual será a nova energia cinética se a velocidade do corpo triplicar?",
        res: "9mv^2/2",
        dica: "Como a velocidade está elevada ao quadrado na fórmula, o aumento também deve ser elevado ao quadrado.",
        ops: "Nova velocidade = 3v. Elevando ao quadrado: (3v)^2 = 9v^2. Substituindo na fórmula: m*(9v^2)/2 = 9mv^2/2."
    },
    { 
        n: 14,
        q: "Um gás ideal sofre uma compressão onde seu volume 'V' cai pela metade e sua temperatura absoluta 'T' dobra. Pela lei dos gases perfeitos, qual a expressão da nova pressão em relação à pressão inicial 'P'?",
        res: "4P",
        dica: "Use a relação (P1*V1)/T1 = (P2*V2)/T2.",
        ops: "(P * V) / T = (P_nova * (V/2)) / (2T). Simplificando: P = P_nova * (1/4). Logo, P_nova = 4P."
    },
    { 
        n: 15,
        q: "A densidade de um fluido é a massa 'm' dividida pelo volume 'V'. Se misturarmos duas amostras deste mesmo fluido, dobrando a massa e reduzindo o volume à metade, qual a nova densidade?",
        res: "4m/V",
        dica: "Substitua os novos valores na fórmula d = m/v. O que acontece quando você divide por uma fração?",
        ops: "Nova massa = 2m. Novo volume = V/2. Nova densidade = 2m / (V/2) = 2m * (2/V) = 4m/V."
    },
    { 
        n: 16,
        q: "Um retângulo tem sua base expressa por 'x+3' e sua altura por 'x-3'. Qual a expressão simplificada da sua área?",
        res: "x^2-9",
        dica: "Lembre-se do produto notável: (a+b)(a-b) = a^2 - b^2.",
        ops: "Área = base * altura = (x+3) * (x-3). Fazendo a distributiva ou usando o produto notável: x^2 - 3^2 = x^2 - 9."
    },
    { 
        n: 17,
        q: "O lado de um quadrado mede 'x/2'. Qual a expressão que representa o perímetro desse quadrado?",
        res: "2x",
        dica: "O perímetro é a soma dos 4 lados do quadrado.",
        ops: "Perímetro = 4 * lado = 4 * (x/2) = 4x / 2 = 2x."
    },
    { 
        n: 18,
        q: "Um cubo possui arestas de medida '3x'. Qual a expressão algébrica para o seu volume?",
        res: "27x^3",
        dica: "O volume do cubo é a aresta elevada ao cubo. Não esqueça de elevar o número e a letra!",
        ops: "Volume = aresta^3 = (3x)^3 = 3^3 * x^3 = 27x^3."
    },
    { 
        n: 19,
        q: "A base de um triângulo mede '4x' e sua altura mede 'x/2'. Qual a área deste triângulo?",
        res: "x^2",
        dica: "A fórmula da área do triângulo é (base * altura) / 2.",
        ops: "Área = (4x * x/2) / 2 = (2x^2) / 2 = x^2."
    },
    { 
        n: 20,
        q: "Um terreno retangular tem comprimento equivalente ao dobro da sua largura 'L'. Se o proprietário quiser cercar todo o terreno, qual será a expressão do perímetro?",
        res: "6L",
        dica: "Desenhe o retângulo: dois lados medem L e dois lados medem 2L.",
        ops: "Perímetro é a soma dos lados: L + L + 2L + 2L = 6L."
    },
    { 
        n: 21,
        q: "Um fio de arame de comprimento 'C' é dobrado para formar um quadrado perfeito. Qual a expressão da área desse quadrado?",
        res: "C^2/16",
        dica: "Primeiro descubra quanto mede UM lado dividindo o arame por 4. Depois calcule a área.",
        ops: "Lado do quadrado = C/4. Área = lado^2 = (C/4)^2 = C^2 / 16."
    },
    { 
        n: 22,
        q: "Um trapézio possui base maior medindo '2x', base menor medindo 'x' e altura medindo '4'. Qual a expressão da sua área?",
        res: "6x",
        dica: "A fórmula da área do trapézio é: (Base Maior + Base Menor) * altura / 2.",
        ops: "Área = ((2x + x) * 4) / 2 = (3x * 4) / 2 = 12x / 2 = 6x."
    },
    { 
        n: 23,
        q: "A diagonal de um quadrado de lado 'L' é dada por L√2. Qual a expressão da diagonal de um quadrado cuja área é '16x^2'?",
        res: "4x√2",
        dica: "Se você tem a área, tire a raiz quadrada para descobrir o lado. Depois jogue na fórmula da diagonal.",
        ops: "Área = L^2 = 16x^2. Tirando a raiz: L = 4x. Substituindo na fórmula da diagonal: D = 4x√2."
    },
    { 
        n: 24,
        q: "Um triângulo retângulo possui catetos medindo '3x' e '4x'. Qual a expressão para a medida da hipotenusa?",
        res: "5x",
        dica: "Use o Teorema de Pitágoras: Hipotenusa^2 = Cateto^2 + Cateto^2.",
        ops: "H^2 = (3x)^2 + (4x)^2 = 9x^2 + 16x^2 = 25x^2. Tirando a raiz: H = 5x. (É o famoso triângulo 3-4-5)."
    },
    { 
        n: 25,
        q: "A área de um círculo é π*R^2. Se o diâmetro de um círculo for '4x', qual a expressão da sua área?",
        res: "4πx^2",
        dica: "Cuidado! A fórmula usa o RAIO. O raio é a metade do diâmetro.",
        ops: "Diâmetro = 4x, logo Raio = 2x. Área = π * (2x)^2 = π * 4x^2 = 4πx^2."
    },
    { 
        n: 26,
        q: "Uma caixa sem tampa possui formato de paralelepípedo com base quadrada de lado 'x' e altura '2x'. Qual a expressão para a área total de material necessário para fabricá-la?",
        res: "9x^2",
        dica: "Some a área do fundo (base) com a área das 4 paredes laterais. A caixa NÃO tem tampa.",
        ops: "Área da base (fundo) = x * x = x^2. Área de UMA parede lateral = base * altura = x * 2x = 2x^2. Como são 4 paredes: 4 * 2x^2 = 8x^2. Total = x^2 + 8x^2 = 9x^2."
    },
    { 
        n: 27,
        q: "Um produto custava 'P' reais. Ele sofreu um aumento de 20% e, no mês seguinte, um desconto de 20%. Qual a expressão matemática para o novo preço do produto?",
        res: "0.96P",
        dica: "Multiplique o preço inicial por 1.2 (aumento) e depois multiplique o resultado por 0.8 (desconto).",
        ops: "Após aumento: P * 1.2. Após desconto: (P * 1.2) * 0.8 = 0.96P."
    },
    { 
        n: 28,
        q: "Uma herança de valor 'H' será dividida entre três irmãos. O mais velho receberá o dobro do irmão do meio, e o caçula receberá a mesma quantia que o irmão do meio. Qual a expressão para o valor recebido pelo caçula?",
        res: "H/4",
        dica: "Chame a parte do caçula de 'x'. O do meio também ganha 'x', e o mais velho ganha '2x'.",
        ops: "Total = Velho (2x) + Meio (x) + Caçula (x) = 4x. A herança toda é H, então 4x = H. O caçula ganha x = H/4."
    },
    { 
        n: 29,
        q: "O custo de produção de uma fábrica envolve um valor fixo de R$ 500,00 mais R$ 3,00 por peça 'p' produzida. Qual a expressão matemática que representa o custo médio (por unidade) de produção?",
        res: "(500+3p)/p",
        dica: "O custo médio é o Custo Total dividido pela quantidade total de peças 'p'.",
        ops: "Custo total = 500 + 3p. Custo médio por peça = Custo Total / p = (500 + 3p) / p."
    },
    { 
        n: 30,
        q: "Um capital 'C' é investido a juros simples com uma taxa de 5% ao mês durante 't' meses. Qual a expressão do montante (capital + juros) ao final do período?",
        res: "C(1+0.05t)",
        dica: "O juros (J) é C*i*t, onde a taxa 'i' deve ser decimal (0.05). O Montante é C + J.",
        ops: "Juros = C * 0.05 * t. Montante = C + J = C + (C * 0.05 * t). Colocando C em evidência: C(1 + 0.05t)."
    },
    { 
        n: 31,
        q: "Uma loja vende 'x' unidades de um produto a um preço 'p' cada. O custo fixo mensal da loja é 'C'. Qual a expressão matemática para o lucro líquido dessa loja?",
        res: "px-C",
        dica: "Lucro é tudo o que entra (Receita) menos tudo o que sai (Custo).",
        ops: "Receita (dinheiro que entrou) = preço * unidades = px. Lucro = Receita - Custos = px - C."
    },
    { 
        n: 32,
        q: "Uma conta de restaurante de valor 'V' será dividida igualmente entre 'N' amigos. Se eles decidirem incluir 10% de gorjeta para o garçom, qual a expressão do valor que cada amigo deverá pagar?",
        res: "1.1V/N",
        dica: "Acrescente 10% na conta multiplicando por 1.1, e depois divida pelo número de pessoas.",
        ops: "Valor total com gorjeta = V + 0.1V = 1.1V. Valor para cada amigo = 1.1V / N."
    },
    { 
        n: 33,
        q: "Um motorista de aplicativo ganha R$ 5,00 por corrida mais R$ 1,50 por quilômetro rodado 'k'. Se o aplicativo retém 20% do valor total arrecadado, qual a expressão do lucro do motorista em uma corrida?",
        res: "0.8(5+1.5k)",
        dica: "Monte o valor total da corrida primeiro. Se o app fica com 20%, o motorista fica com 80% (0.8).",
        ops: "Arrecadação total = 5 + 1.5k. O motorista recebe 80% disso: 0.8 * (5 + 1.5k)."
    },
    { 
        n: 34,
        q: "Um tanque possui duas torneiras. A primeira enche o tanque em 'x' horas. A segunda enche o mesmo tanque em 'y' horas. Se ambas forem abertas simultaneamente, qual a expressão para o tempo total de enchimento?",
        res: "xy/(x+y)",
        dica: "Some a capacidade de enchimento por hora: 1/x + 1/y. Depois inverta o resultado.",
        ops: "Por hora, as torneiras enchem 1/x + 1/y do tanque. Fazendo MMC: (y+x)/xy. O tempo total é o inverso dessa fração: xy/(x+y)."
    },
    { 
        n: 35,
        q: "Uma ação na bolsa de valores abriu valendo 'A'. No primeiro dia, caiu 50%. No segundo dia, subiu 50% em relação ao fechamento do dia anterior. Qual a expressão que representa o valor atual da ação?",
        res: "0.75A",
        dica: "Cair 50% significa multiplicar por 0.5. Subir 50% significa multiplicar o novo valor por 1.5.",
        ops: "Após o 1º dia: A * 0.5. Após o 2º dia: (A * 0.5) * 1.5 = 0.75A. (O valor não volta a ser A!)."
    },
    { 
        n: 36,
        q: "Um trabalhador poupa mensalmente a terça parte do seu salário 'S'. Dessa poupança, ele destina a quarta parte para investir em ações. Qual a fração do salário total que ele investe em ações?",
        res: "S/12",
        dica: "Quando você quer saber 'uma fração DE outra fração', basta multiplicar as frações.",
        ops: "Poupança = S/3. Investimento = 1/4 da Poupança = (1/4) * (S/3) = S/12."
    },
    { 
        n: 37,
        q: "O salário de um funcionário 'S' teve um reajuste e passou a ser '1.25S'. Isso equivale a um aumento de quantos por cento? (Responda apenas o número).",
        res: "25",
        dica: "1 inteiro representa o valor original (100%). Tudo o que passar de 1 é o aumento.",
        ops: "1.25S é o mesmo que S + 0.25S. Como 0.25 equivale a 25/100, o aumento foi de 25%."
    },
    { 
        n: 38,
        q: "Uma empresa tem uma receita 'R' e despesas que equivalem a 60% dessa receita. Sobre o lucro (o que sobra), é cobrado um imposto de 25%. Qual a expressão matemática para o lucro após os impostos?",
        res: "0.3R",
        dica: "Primeiro ache o lucro bruto (100% - 60%). Depois retire 25% DESSE lucro bruto.",
        ops: "Lucro Bruto = R - 0.6R = 0.4R. Se os impostos levam 25%, sobra 75% do lucro bruto. Lucro final = 0.75 * 0.4R = 0.3R."
    },
    { 
        n: 39,
        q: "A população de bactérias 'B' de uma cultura triplica a cada dia. Qual a expressão da população após 3 dias inteiros passados?",
        res: "27B",
        dica: "Você precisa multiplicar por 3 a cada dia que passa. É uma potência!",
        ops: "População = B * 3^dias. Como são 3 dias: B * 3^3 = B * 27 = 27B."
    },
    { 
        n: 40,
        q: "João tem o triplo da idade que Maria 'm' tinha há 5 anos. Qual a expressão matemática para a idade atual de João?",
        res: "3(m-5)",
        dica: "Primeiro monte a expressão da 'idade de Maria há 5 anos' entre parênteses. Depois multiplique pelo triplo.",
        ops: "Idade de Maria há 5 anos = (m - 5). João tem o triplo disso = 3 * (m - 5) ou 3(m-5)."
        
            }
            ], // Aqui fecha o difícil com a vírgula necessária para começar o próximo
        medio: [
            // COLA AQUI AS 40 QUESTÕES QUE TE ENVIEI ANTES
            {
                const exerciciosMedios = [
    {
        n: 1,
        q: "Uma esfera com carga Q é colocada em contato com outra de carga 5Q. Qual a expressão da carga final de cada uma?",
        res: "3Q",
        dica: "No contato entre esferas idênticas, somamos as cargas e dividimos pelo número de esferas.",
        ops: "**Passo 1:** Somamos as cargas disponíveis (Q + 5Q = 6Q). **Passo 2:** Como são 2 esferas, dividimos por 2. **Por que?** Porque a natureza busca o equilíbrio térmico e elétrico dividindo o total igualmente. Resultado: 3Q."
    },
    {
        n: 2,
        q: "Qual a carga final de uma esfera Q após tocar sucessivamente duas esferas neutras (uma de cada vez)?",
        res: "Q/4",
        dica: "Cuidado! No toque sucessivo, você divide por 2 a cada novo contato.",
        ops: "**Passo 1:** Primeiro toque (Q + 0)/2 = Q/2. **Passo 2:** Segundo toque pega o resultado e divide de novo (Q/2)/2 = Q/4. **O segredo:** A carga vai se fragmentando pela metade a cada encontro."
    },
    {
        n: 3,
        q: "Traduza: O dobro de uma carga Q somado com a metade dessa mesma carga.",
        res: "2.5Q",
        dica: "Escreva as duas partes separadamente e depois junte-as.",
        ops: "**Passo 1:** Identifique o dobro (2Q). **Passo 2:** Identifique a metade (Q/2 ou 0.5Q). **Passo 3:** Some tudo. **Por que?** A Álgebra é como uma receita; primeiro separamos os ingredientes para depois misturar."
    },
    {
        n: 4,
        q: "Uma carga X é triplicada e depois subtraída de 4 unidades de carga. Como fica a expressão?",
        res: "3X-4",
        dica: "A ordem das palavras dita a ordem das operações.",
        ops: "**Passo 1:** Triplicar significa multiplicar por 3 (3X). **Passo 2:** Subtrair 4 unidades (- 4). **Conclusão:** 3X - 4. Imagine o X como uma caixa com um valor que você ainda vai descobrir."
    },
    {
        n: 5,
        q: "Represente a carga final de uma esfera 8Q que toca simultaneamente (ao mesmo tempo) duas esferas neutras.",
        res: "8Q/3",
        dica: "No contato simultâneo, dividimos a carga total pelo número total de esferas envolvidas.",
        ops: "**Passo 1:** Total de carga é 8Q. **Passo 2:** Total de esferas envolvidas é 3 (a carregada + 2 neutras). **Resultado:** 8Q/3. **Diferença:** Diferente do toque sucessivo, aqui a divisão é feita de uma vez só."
    },
    {
        n: 6,
        q: "Escreva a expressão para: O quadrado da carga Q adicionado ao seu sucessor.",
        res: "Q^2+Q+1",
        dica: "O sucessor de qualquer número 'n' é sempre 'n + 1'.",
        ops: "**Passo 1:** O quadrado de Q é Q². **Passo 2:** O sucessor de Q é (Q + 1). **Passo 3:** Junte tudo: Q² + Q + 1. **Pense assim:** Se Q fosse 5, o sucessor seria 6. Na álgebra, usamos letras para valer para qualquer número!"
    },
    {
        n: 7,
        q: "Uma esfera com carga -4Q toca uma esfera de carga 10Q. Qual a expressão da carga resultante em cada uma?",
        res: "3Q",
        dica: "Sinais diferentes se subtraem na soma algébrica.",
        ops: "**Passo 1:** Some as cargas considerando os sinais (-4Q + 10Q = 6Q). **Passo 2:** Divida por 2 esferas. **Resultado:** 3Q. **Lembre-se:** Dívida (-4) com crédito (10) resulta em saldo positivo (6)."
    },
    {
        n: 8,
        q: "Traduza: A metade da soma entre uma carga A e uma carga B.",
        res: "(A+B)/2",
        dica: "Se a metade é 'da soma', os parênteses são obrigatórios ou a divisão deve estar sob todo o termo.",
        ops: "**Passo 1:** Primeiro faça a soma (A + B). **Passo 2:** Aplique a metade em tudo. **Importante:** Sem indicar que a soma vem primeiro, você poderia acabar dividindo apenas o B por 2!"
    },
    {
        n: 9,
        q: "Uma carga Q é elevada ao quadrado e depois dividida pelo seu antecessor. Como escrever isso?",
        res: "Q^2/(Q-1)",
        dica: "Antecessor é o que vem antes, ou seja, subtraímos 1.",
        ops: "**Passo 1:** Quadrado de Q (Q²). **Passo 2:** Antecessor de Q (Q - 1). **Passo 3:** Coloque a divisão. **Estrutura:** Q² / (Q - 1). A barra de divisão separa os dois conceitos."
    },
    {
        n: 10,
        q: "O triplo do sucessor de uma carga x. Como representar?",
        res: "3(x+1)",
        dica: "O triplo é de 'todo' o sucessor, por isso usamos parênteses.",
        ops: "**Passo 1:** Ache o sucessor (x + 1). **Passo 2:** Multiplique por 3. **Por que os parênteses?** Se escrever 3x + 1, você estaria triplicando apenas o x e não o sucessor inteiro."
    },
    {
        n: 11,
        q: "Se uma esfera 12Q toca uma neutra e o resultado toca outra esfera de 2Q, qual a carga final?",
        res: "4Q",
        dica: "Faça em duas etapas: contato 1, depois contato 2.",
        ops: "**Contato 1:** (12Q + 0)/2 = 6Q. **Contato 2:** (6Q + 2Q)/2 = 8Q/2 = 4Q. **Atenção:** A carga resultante do primeiro passo torna-se a carga inicial do segundo."
    },
    {
        n: 12,
        q: "Expresse: O dobro da diferença entre a carga Q e 5.",
        res: "2(Q-5)",
        dica: "Diferença é subtração. Use parênteses para garantir que o dobro atinja a subtração inteira.",
        ops: "**Passo 1:** Diferença entre Q e 5 (Q - 5). **Passo 2:** Dobre o resultado. **Visualização:** Imagine que você primeiro tira 5 de uma caixa e depois duplica o que sobrou lá dentro."
    },
    {
        n: 13,
        q: "Uma esfera possui carga Q. Ela perde o triplo dessa carga. Qual a expressão da carga final?",
        res: "-2Q",
        dica: "Perder significa subtrair.",
        ops: "**Passo 1:** Você tinha Q. **Passo 2:** Subtraia o triplo (- 3Q). **Cálculo:** Q - 3Q = -2Q. **Física:** Ficar com carga negativa significa que agora você tem excesso de elétrons."
    },
    {
        n: 14,
        q: "A soma de três cargas consecutivas (ex: x, x+1, x+2). Como representar?",
        res: "3x+3",
        dica: "Números consecutivos aumentam de 1 em 1.",
        ops: "**Passo 1:** Carga 1 (x), Carga 2 (x+1), Carga 3 (x+2). **Passo 2:** Some os termos semelhantes (x + x + x = 3x) e os números (1 + 2 = 3). **Resultado:** 3x + 3."
    },
    {
        n: 15,
        q: "Uma esfera 20Q toca uma neutra. A metade do resultado é removida. Quanto sobra?",
        res: "5Q",
        dica: "Contato primeiro, depois a operação de retirada.",
        ops: "**Passo 1:** Contato (20Q + 0)/2 = 10Q. **Passo 2:** Tirar a metade de 10Q sobra 5Q. **Lógica:** Se você divide por 2 e depois tira metade do que sobrou, restará apenas um quarto do original."
    },
    {
        n: 16,
        q: "Traduza: O sucessor do quadrado de uma carga n.",
        res: "n^2+1",
        dica: "Primeiro eleve ao quadrado, depois ache o próximo valor.",
        ops: "**Passo 1:** Quadrado de n (n²). **Passo 2:** Sucessor (somar 1). **Resultado:** n² + 1. Note que é diferente do 'quadrado do sucessor'!"
    },
    {
        n: 17,
        q: "O dobro de uma carga Q, diminuído de seu antecessor.",
        res: "Q+1",
        dica: "Cuidado com o sinal de menos antes do antecessor: -(Q-1).",
        ops: "**Passo 1:** Dobro (2Q). **Passo 2:** Subtrair o antecessor -(Q - 1). **Passo 3:** 2Q - Q + 1 = Q + 1. **Por que +1?** Menos com menos na matemática vira mais!"
    },
    {
        n: 18,
        q: "Três esferas (2Q, 4Q e 6Q) são colocadas em contato simultâneo. Qual a carga final de cada?",
        res: "4Q",
        dica: "Soma tudo e divide por três.",
        ops: "**Passo 1:** Soma total (2Q + 4Q + 6Q = 12Q). **Passo 2:** Divisão por 3 (12Q / 3 = 4Q). **Equilíbrio:** Todas terminam iguais."
    },
    {
        n: 19,
        q: "Expresse: A terça parte da diferença entre 10 e uma carga x.",
        res: "(10-x)/3",
        dica: "A ordem na diferença importa: 10 vem antes do x.",
        ops: "**Passo 1:** Diferença entre 10 e x (10 - x). **Passo 2:** Divida por 3. **Resultado:** (10 - x)/3."
    },
    {
        n: 20,
        q: "Uma esfera Q toca outra esfera 3Q. O resultado é dobrado. Qual a expressão final?",
        res: "4Q",
        dica: "O resultado do contato é a média das cargas.",
        ops: "**Passo 1:** Contato (Q + 3Q)/2 = 2Q. **Passo 2:** Dobre o resultado (2Q * 2 = 4Q). **Atenção:** Primeiro resolvemos o contato entre os parênteses invisíveis da física."
    },
    {
        n: 21,
        q: "O antecessor do triplo de uma carga y. Como representar?",
        res: "3y-1",
        dica: "Primeiro triplique, depois tire 1.",
        ops: "**Passo 1:** Triplo de y (3y). **Passo 2:** Antecessor (subtrair 1). **Expressão:** 3y - 1."
    },
    {
        n: 22,
        q: "A soma de uma carga Q com seu quadrado e seu cubo. Como fica?",
        res: "Q+Q^2+Q^3",
        dica: "Cubo é o expoente 3.",
        ops: "**Passo 1:** Termo 1 (Q). **Passo 2:** Termo 2 (Q²). **Passo 3:** Termo 3 (Q³). **União:** Q + Q² + Q³. **Lembre-se:** Você não pode somar os expoentes aqui, eles são 'caixas' de tamanhos diferentes!"
    },
    {
        n: 23,
        q: "Uma esfera neutra toca uma esfera de carga 16Q. O resultado é dividido por 4. Qual a expressão?",
        res: "2Q",
        dica: "Primeiro o contato médio, depois a divisão extra.",
        ops: "**Passo 1:** Contato (0 + 16Q)/2 = 8Q. **Passo 2:** Divida por 4 (8Q / 4 = 2Q). **Processo:** É como dividir um bolo com alguém e depois repartir sua fatia em 4."
    },
    {
        n: 24,
        q: "Traduza: O quádruplo da metade de uma carga Z.",
        res: "2Z",
        dica: "Quádruplo é 4 vezes. Metade é dividir por 2.",
        ops: "**Passo 1:** Metade de Z (Z/2). **Passo 2:** 4 vezes isso (4 * Z/2). **Simplificação:** 4 dividido por 2 é 2. Logo, 2Z. **Dica:** Quatro metades formam dois inteiros!"
    },
    {
        n: 25,
        q: "A carga final de uma esfera de carga X após tocar uma esfera de carga -X.",
        res: "0",
        dica: "Cargas opostas de mesmo valor se anulam no contato.",
        ops: "**Passo 1:** Soma (X + (-X) = 0). **Passo 2:** Divida por 2 (0 / 2 = 0). **Física:** Isso se chama neutralização por contato."
    },
    {
        n: 26,
        q: "Represente: O sucessor do triplo de uma carga diminuído de 2.",
        res: "3x-1",
        dica: "Sucessor de 3x é (3x + 1). Agora tire 2.",
        ops: "**Passo 1:** Triplo (3x). **Passo 2:** Sucessor (3x + 1). **Passo 3:** Diminuir 2 (3x + 1 - 2 = 3x - 1)."
    },
    {
        n: 27,
        q: "Uma esfera 6Q toca uma esfera 2Q. O resultado desse contato toca uma esfera neutra. Qual a carga final?",
        res: "2Q",
        dica: "Faça o primeiro contato, ache o valor e use-o para o segundo contato.",
        ops: "**Passo 1:** (6Q + 2Q)/2 = 4Q. **Passo 2:** (4Q + 0)/2 = 2Q. **Raciocínio:** A carga total inicial (8Q) foi dividida primeiro em 2 partes e depois uma dessas partes em mais 2."
    },
    {
        n: 28,
        q: "Como representar: A soma entre o quadrado de Q e o dobro de Q?",
        res: "Q^2+2Q",
        dica: "Apenas escreva os dois termos e coloque o sinal de +.",
        ops: "**Passo 1:** Quadrado (Q²). **Passo 2:** Dobro (2Q). **Resultado:** Q² + 2Q. **Aviso:** Não tente somar e dar '3Q', pois Q² e Q são coisas diferentes!"
    },
    {
        n: 29,
        q: "A metade do sucessor de uma carga n. Como escrever?",
        res: "(n+1)/2",
        dica: "O sucessor (n+1) deve ser tratado como um bloco único.",
        ops: "**Passo 1:** Ache o sucessor (n + 1). **Passo 2:** Aplique a metade. **Escrita:** (n+1)/2. Os parênteses protegem o sucessor."
    },
    {
        n: 30,
        q: "Uma carga 5Q é subtraída do dobro de uma carga 10Q. Qual a expressão?",
        res: "15Q",
        dica: "A ordem é: Dobro de 10Q menos o 5Q.",
        ops: "**Passo 1:** Ache o dobro de 10Q (20Q). **Passo 2:** Subtraia 5Q. **Cálculo:** 20Q - 5Q = 15Q."
    },
    {
        n: 31,
        q: "Traduza: O triplo da soma entre x e 1.",
        res: "3(x+1)",
        dica: "Sempre que houver 'da soma', use parênteses.",
        ops: "**Passo 1:** Soma (x + 1). **Passo 2:** Triplique. **Resultado:** 3(x + 1). Note que isso é a mesma coisa que o 'triplo do sucessor'!"
    },
    {
        n: 32,
        q: "Uma esfera 100Q toca sucessivamente duas esferas neutras. Qual a carga final?",
        res: "25Q",
        dica: "Divida por 2, e divida por 2 de novo.",
        ops: "**Passo 1:** 100Q/2 = 50Q. **Passo 2:** 50Q/2 = 25Q. **Conclusão:** Toques sucessivos reduzem a carga de forma exponencial."
    },
    {
        n: 33,
        q: "O quadrado da metade de uma carga Q. Como representar?",
        res: "(Q/2)^2",
        dica: "Primeiro ache a metade, depois eleve ao quadrado.",
        ops: "**Passo 1:** Metade (Q/2). **Passo 2:** Eleve o bloco ao quadrado: (Q/2)². **Diferença:** É diferente de Q²/2, onde só o Q está ao quadrado."
    },
    {
        n: 34,
        q: "Uma carga final é o antecessor do antecessor de x. Como simplificar?",
        res: "x-2",
        dica: "Tirar 1 e tirar 1 de novo é o mesmo que tirar 2.",
        ops: "**Passo 1:** Primeiro antecessor (x - 1). **Passo 2:** Segundo antecessor (x - 1 - 1). **Simplificação:** x - 2."
    },
    {
        n: 35,
        q: "Uma esfera A (4Q) toca B (neutra). Depois B toca C (neutra). Qual a carga de C no final?",
        res: "Q",
        dica: "Acompanhe a carga que vai para a esfera B.",
        ops: "**Passo 1:** A e B se tocam. B fica com 2Q. **Passo 2:** B (agora com 2Q) toca C (0). Ambos ficam com Q. **Resposta:** C termina com Q."
    },
    {
        n: 36,
        q: "O dobro do quadrado de uma carga, adicionado de 3.",
        res: "2Q^2+3",
        dica: "A potência vem antes da multiplicação na ordem de operações.",
        ops: "**Passo 1:** Quadrado (Q²). **Passo 2:** Dobro (2Q²). **Passo 3:** Adicione 3. **Final:** 2Q² + 3."
    },
    {
        n: 37,
        q: "A média aritmética entre as cargas Q, 2Q e 3Q.",
        res: "2Q",
        dica: "Média é a soma dividida pela quantidade.",
        ops: "**Passo 1:** Soma (Q+2Q+3Q = 6Q). **Passo 2:** Divida por 3. **Resultado:** 2Q. **Física:** Esse seria o resultado de um contato simultâneo entre as três."
    },
    {
        n: 38,
        q: "Traduza: O sucessor da metade de x.",
        res: "x/2+1",
        dica: "A ordem importa: primeiro a metade, depois o próximo número.",
        ops: "**Passo 1:** Metade (x/2). **Passo 2:** Sucessor (+ 1). **Escrita:** x/2 + 1."
    },
    {
        n: 39,
        q: "Uma carga 10Q é diminuída de sua própria quinta parte.",
        res: "8Q",
        dica: "Quinta parte é dividir por 5.",
        ops: "**Passo 1:** Ache a quinta parte (10Q / 5 = 2Q). **Passo 2:** Subtraia do original (10Q - 2Q = 8Q)."
    },
    {
        n: 40,
        q: "O quadrado do sucessor de uma carga n.",
        res: "(n+1)^2",
        dica: "Primeiro ache o sucessor, depois eleve o bloco todo ao quadrado.",
        ops: "**Passo 1:** Sucessor (n + 1). **Passo 2:** Eleve ao quadrado: (n + 1)². **Atenção:** Sem os parênteses, apenas o '1' estaria ao quadrado!"
    }
];

            }
        ] // Fecha o array médio
    } // Fecha o algebra_expressoes
}; // Fecha o BANCO_QUESTOES


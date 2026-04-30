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
]

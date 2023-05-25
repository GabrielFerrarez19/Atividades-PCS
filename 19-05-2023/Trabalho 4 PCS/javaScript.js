var regras=[
	"Regras 1",
	"Regras 2",
	"Regras 3",
	"Regras 4",
	"Regras 5",
	"Regras 6",
	"Regras 7",
	"Regras 8",
	"Regras 9",
	"Regras 10",
	"Regras 11",
	"Regras 12",
	"Regras 13",
	"Regras 14",
]

var escrita=[
	"Os usuários e a equipe do Laboratório devem preservar o silêncio na sala para que esta se configure como um ambiente de estudo",
	"É proibido o consumo de qualquer tipo de alimento ou bebida nos Laboratórios.",
	"O ambiente deve preservar o estado de limpeza e organização de que foi encontrado. Lixo deve ser depositado na lixeira, organizar cadeiras e demais recursos utilizados durante a aula.",
	"Ao término do uso do laboratório, certifique-se de desligar o PC com a respectiva tela, fechando todos os programas e finalizando o sistema operacional",
	"É proibido acessar páginas da Internet que possam ser consideradas ilegais ou ofensivas à moral pessoal ou coletiva. Por exemplo, páginas de relacionamentos, pornográficas, de caráter racista,discriminatórias ou que incitem a violência",
	"Não é permitido usar indevidamente os recursos disponíveis na Internet, como utilizar a internet para acessar site de compras, jogos, redes sociais ou quaisquer outros assuntos não pertinentes a aula. No caso de jogos só serão permitidos aqueles que foram designados pelo instrutor com o objetivo didático-pedagógico.",
	"Não é permitido utilizar recursos de comunicação instantânea (MSN, salas de bate-papo,googletalk, whatsapp, telegram, entre outros similares) que não estejam previstos em atividades didático-pedagógicas.",
	"É proibido perturbar o ambiente com brincadeiras, algazarras e/ou qualquer outra atividade alheia às atividades didático-pedagógicas como também exercer atividades não relacionadas com o uso específico deste Laboratório.",
	"Não é permitido trocar cabos ou equipamentos periféricos e/ou acessórios (teclados, mouses, etc.)Caso algum equipamento apresente defeito ou não ligue, informar o instrutor para que esse comunique a área de TI responsável por manutenções.",
	"É proibida a instalação de qualquer tipo de programa (mesmo que freeware ou de uso livre) sem a expressa autorização da Supervisão Técnica da Unidade.",
	"Os arquivos criados devem ser copiados para seu Google Drive (no caso de alunos que possuem a conta SENAI aluno) e/ou enviados para o seu e-mail pessoal. Observando-se que os arquivos deixados no computador podem ser alterados e apagados por qualquer usuário. Portanto, evite deixar arquivos importantes. Não é permitido utilizar pendrive e outros dispositivos similares.",
	"Proibido desenvolver e/ou disseminar vírus nos equipamentos dos Laboratórios de Informática.",
	"É proibida a alteração de qualquer componente instalado nos equipamentos (hardware ou software).",
	"Desmontar qualquer equipamento ou acessório dos Laboratórios de Informática, sob qualquer pretexto, assim como remover equipamentos do local a eles destinados (mesmo dentro do recinto), desde que não esteja previsto em atividades didático-pedagógicas"
]


var contadorRegras = 0;
var contadorescrita = 0;

function proximo(){
	var label = document.getElementById("labelRegras");
	contadorRegras -=2;
	label.innerHTML = regras[contadorRegras];
	var label2 = document.getElementById("labelEscrita");
	contadorescrita -=2;
	label.innerHTML = escrita[contadorescrita];
	if(contadorRegras>regras.length){
		label.innerHTML="fim!";
		contadorRegras -= 1;
		console.log(contadorRegras)
	}
}

function anterior(){
	var label=document.getElementById("labelRegras");
	contadorRegras-=2;
	label.innerHTML= regras[contadorRegras];
	console.log(contadorRegras)
	contadorRegras++
	contadorescrita++
	if(contadorRegras<0){
		label.innerHTML="Vamos começar";
		contadorRegras+= 1;
		console.log(contadorRegras)
	}
}
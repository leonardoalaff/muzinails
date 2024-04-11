const iconeMenu = document.querySelector('#icone-menu')
const listraMenu = document.querySelector('#listra-menu')
const menu = document.querySelector('#menu')
const msg = document.querySelector('.msg')
const home = document.querySelector('.home')
const calendario = document.querySelector('.calendario')
const sessao3 = document.querySelector('#sessao3')
const sessao4 = document.querySelector('#sessao4')
const conferir = document.querySelector('.conferir')
const cabeca = document.querySelector('#cabeca')
const ter = document.querySelector('.ter')
const qua = document.querySelector('.qua')
const qui = document.querySelector('.qui')
const sex = document.querySelector('.sex')
const sab = document.querySelector('.sab')
const oit = document.querySelector('.oit')
const nov = document.querySelector('.nov')
const dez = document.querySelector('.dez')
const onz = document.querySelector('.onz')
const uma = document.querySelector('.uma')
const duas = document.querySelector('.duas')
const tres = document.querySelector('.tres')
const quatro = document.querySelector('.quatro')
const cinco = document.querySelector('.cinco')
const nome = document.querySelector('#nome')
const opcoes = document.querySelector('#opcoes')
const opServico = document.querySelector('#op-servico')
let informacao = document.querySelector('.informacao')







function homeOpen() {
  if(msg.classList.contains('active') || calendario.classList.contains('active')) {
    home.classList.remove('active')
  } else {
    home.classList.add('active')
  }
}

homeOpen()

msg.addEventListener('click', () => {
    msg.classList.add('active')
    home.classList.remove('active')
    calendario.classList.remove('active')
    sessao3.classList.remove('active')
    sessao4.classList.add('active')
    cabeca.classList.remove('active')
})

home.addEventListener('click', () => {
    msg.classList.remove('active')
    home.classList.add('active')
    calendario.classList.remove('active')
    sessao3.classList.remove('active')
    sessao4.classList.remove('active')
    cabeca.classList.remove('active')
})

calendario.addEventListener('click', () => {
    calendario.classList.add('active')
    msg.classList.remove('active')
    home.classList.remove('active')
    sessao3.classList.add('active')
    sessao4.classList.remove('active')
    cabeca.classList.add('active')
    
})


//************** CALENDÁRIO *************/
const tbody = document.querySelector('#calendario tbody');
  const mesAtualElement = document.getElementById('mes-atual');
  let numeroSelecionado = null;
  let mesSelecionado = null;
  let diaDaSemanaSelecionado = null;


  function criarCalendario(mes, ano) {
    tbody.innerHTML = '';

    const primeiroDiaDoMes = new Date(ano, mes, 1);
    const ultimoDiaDoMes = new Date(ano, mes + 1, 0);

    // Encontrando o primeiro domingo do mês
    let diaAtual = new Date(primeiroDiaDoMes);
    while (diaAtual.getDay() !== 0) {
      diaAtual.setDate(diaAtual.getDate() - 1);
    }

    // Definindo o mês e ano atual no cabeçalho do calendário
    const proximoMes = new Date(ano, mes, 1);
    const mesAtual = proximoMes.toLocaleString('default', { month: 'long' });
    const anoAtual = proximoMes.getFullYear();
    mesAtualElement.textContent = `${mesAtual} de ${anoAtual}`;

    const dataAtual = new Date();
    const diaAtualDoMes = dataAtual.getDate();
    const mesAtualDoMes = dataAtual.getMonth();

    while (diaAtual <= ultimoDiaDoMes) {
      const semana = document.createElement('tr');
      for (let i = 0; i < 7; i++) {
        const dia = document.createElement('td');
        const numero = diaAtual.getDate();
        const mes = diaAtual.getMonth();
        dia.textContent = numero;
        dia.addEventListener('click', () => selecionarNumero(numero, mes));
        if (numero === diaAtualDoMes && mes === mesAtualDoMes) {
          dia.classList.add('dia-atual');
        }
        semana.appendChild(dia);
        diaAtual.setDate(diaAtual.getDate() + 1);
      }
      tbody.appendChild(semana);
    }

  }

  function selecionarNumero(numero, mes) {
    numeroSelecionado = numero;
    mesSelecionado = mes;
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dataSelecionada = new Date(new Date().getFullYear(), mesSelecionado, numeroSelecionado);
    diaDaSemanaSelecionado = diasDaSemana[dataSelecionada.getDay()];
    
  }
  
  const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const dataAtual = new Date();
  criarCalendario(dataAtual.getMonth(), dataAtual.getFullYear());


  //******** MARCAR HORÁRIO *********/
  conferir.addEventListener('click', () => {
    let today = new Date()
    let horas = today.getHours()

    let hora = undefined
    let cumprimento = undefined

    if(horas >= 1 && horas < 12) {
      cumprimento = 'Bom dia'
    }
    if(horas >= 12 && horas <= 17 ) {
      cumprimento = 'Boa tarde'
    }
    if(horas >= 18 && horas <= 23) {
      cumprimento = 'Boa noite'
    } 
    else {cumprimento = 'Boa noite'}

    let opcaoSelecionada = opcoes.value
    let servicoSelecionado = opServico.value

    let mensagem = `${cumprimento}, Andréia. Você está disponível no dia e horário abaixo?%0A %0A Dia: ${numeroSelecionado} de ${mesesDoAno[mesSelecionado]} (${diaDaSemanaSelecionado})%0A Horário: ${opcaoSelecionada}%0A Serviço: ${servicoSelecionado}%0A Nome da cliente: ${nome.value}`

    window.open(`https://wa.me/5533984523678?text=${mensagem}`)
  })
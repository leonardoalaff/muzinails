const iconeMenu = document.querySelector('#icone-menu')
const listraMenu = document.querySelector('#listra-menu')
const menu = document.querySelector('#menu')
const msg = document.querySelector('.msg')
const home = document.querySelector('.home')
const calendario = document.querySelector('.calendario')
const sessao3 = document.querySelector('#sessao3')
const sessao4 = document.querySelector('#sessao4')
const conferir = document.querySelector('.conferir')
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
})

home.addEventListener('click', () => {
    msg.classList.remove('active')
    home.classList.add('active')
    calendario.classList.remove('active')
    sessao3.classList.remove('active')
    sessao4.classList.remove('active')
})

calendario.addEventListener('click', () => {
    calendario.classList.add('active')
    msg.classList.remove('active')
    home.classList.remove('active')
    sessao3.classList.add('active')
    sessao4.classList.remove('active')
    
})


//************** CALENDÁRIO *************/
function createCalendar(year, month) {
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const today = new Date();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    let calendarHTML = '<table>';
    calendarHTML += '<tr><th colspan="7">' + monthNames[month] + ' ' + year + '</th></tr>';
    calendarHTML += '<tr><th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th></tr>';

    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
      calendarHTML += '<tr>';
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay.getDay()) {
          calendarHTML += '<td></td>';
        } else if (dayCounter > daysInMonth) {
          calendarHTML += '<td></td>';
        } else {
          const currentDate = new Date(year, month, dayCounter);
          if (currentDate.toDateString() === today.toDateString()) {
            calendarHTML += '<td style="background-color: white; color: #ff3298;">' + dayCounter + '</td>';
          } else {
            calendarHTML += '<td>' + dayCounter + '</td>';
          }
          dayCounter++;
        }
      }
      calendarHTML += '</tr>';
    }

    calendarHTML += '</table>';

    return calendarHTML;
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  document.getElementById('calendar').innerHTML = createCalendar(currentYear, currentMonth);



  function horario() {
    let today = new Date()
    let diaDaSemana = today.getDay()
    let hora = today.getHours()
    let minuto = today.getMinutes()

    if(diaDaSemana >= 2 && diaDaSemana <=6 && hora >= 8 && hora <= 18) {
      fechado.classList.remove('active')
      aberto.classList.add('active')
    } else {
      aberto.classList.remove('active')
      fechado.classList.add('active')
    }
  }

  horario()
  setInterval(horario(), 1000)


  //******** MARCAR HORÁRIO *********/
  let pedido = {
    terca: 'na próxima TERÇA FEIRA',
    quarta: 'na próxima QUARTA FEIRA',
    quinta: 'na próxima QUINTA FEIRA',
    sexta: 'na próxima SEXTA FEIRA',
    sabado: 'no próximo SÁBADO',

    oitoM: '08:00',
    noveM: '09:00',
    dezM: '10:00',
    onzeM: '11:00',

    umaT: '13:00',
    duasT: '14:00',
    tresT: '15:00',
    quatroT: '16:00',
    cincoT: '17:00'
  }

  ter.addEventListener('click', () => {
    ter.classList.add('active')
    qua.classList.remove('active')
    qui.classList.remove('active')
    sex.classList.remove('active')
    sab.classList.remove('active')
  })
  qua.addEventListener('click', () => {
    ter.classList.remove('active')
    qua.classList.add('active')
    qui.classList.remove('active')
    sex.classList.remove('active')
    sab.classList.remove('active')
  })
  qui.addEventListener('click', () => {
    ter.classList.remove('active')
    qua.classList.remove('active')
    qui.classList.add('active')
    sex.classList.remove('active')
    sab.classList.remove('active')
  })
  sex.addEventListener('click', () => {
    ter.classList.remove('active')
    qua.classList.remove('active')
    qui.classList.remove('active')
    sex.classList.add('active')
    sab.classList.remove('active')
  })
  sab.addEventListener('click', () => {
    ter.classList.remove('active')
    qua.classList.remove('active')
    qui.classList.remove('active')
    sex.classList.remove('active')
    sab.classList.add('active')
  })


  oit.addEventListener('click', () => {
    oit.classList.add('active')
    nov.classList.remove('active')
    dez.classList.remove('active')
    onz.classList.remove('active')

    uma.classList.remove('active')
    duas.classList.remove('active')
    tres.classList.remove('active')
    quatro.classList.remove('active')
    cinco.classList.remove('active')
  })
  nov.addEventListener('click', () => {
    oit.classList.remove('active')
    nov.classList.add('active')
    dez.classList.remove('active')
    onz.classList.remove('active')

    uma.classList.remove('active')
    duas.classList.remove('active')
    tres.classList.remove('active')
    quatro.classList.remove('active')
    cinco.classList.remove('active')
  })
  dez.addEventListener('click', () => {
    oit.classList.remove('active')
    nov.classList.remove('active')
    dez.classList.add('active')
    onz.classList.remove('active')

    uma.classList.remove('active')
    duas.classList.remove('active')
    tres.classList.remove('active')
    quatro.classList.remove('active')
    cinco.classList.remove('active')
  })
  onz.addEventListener('click', () => {
    oit.classList.remove('active')
    nov.classList.remove('active')
    dez.classList.remove('active')
    onz.classList.add('active')

    uma.classList.remove('active')
    duas.classList.remove('active')
    tres.classList.remove('active')
    quatro.classList.remove('active')
    cinco.classList.remove('active')
  })


  uma.addEventListener('click', () => {
    oit.classList.remove('active')
    nov.classList.remove('active')
    dez.classList.remove('active')
    onz.classList.remove('active')

    uma.classList.add('active')
    duas.classList.remove('active')
    tres.classList.remove('active')
    quatro.classList.remove('active')
    cinco.classList.remove('active')
  })
  duas.addEventListener('click', () => {
    oit.classList.remove('active')
    nov.classList.remove('active')
    dez.classList.remove('active')
    onz.classList.remove('active')

    uma.classList.remove('active')
    duas.classList.add('active')
    tres.classList.remove('active')
    quatro.classList.remove('active')
    cinco.classList.remove('active')
  })
  tres.addEventListener('click', () => {
    oit.classList.remove('active')
    nov.classList.remove('active')
    dez.classList.remove('active')
    onz.classList.remove('active')

    uma.classList.remove('active')
    duas.classList.remove('active')
    tres.classList.add('active')
    quatro.classList.remove('active')
    cinco.classList.remove('active')
  })
  quatro.addEventListener('click', () => {
    oit.classList.remove('active')
    nov.classList.remove('active')
    dez.classList.remove('active')
    onz.classList.remove('active')

    uma.classList.remove('active')
    duas.classList.remove('active')
    tres.classList.remove('active')
    quatro.classList.add('active')
    cinco.classList.remove('active')
  })
  cinco.addEventListener('click', () => {
    oit.classList.remove('active')
    nov.classList.remove('active')
    dez.classList.remove('active')
    onz.classList.remove('active')

    uma.classList.remove('active')
    duas.classList.remove('active')
    tres.classList.remove('active')
    quatro.classList.remove('active')
    cinco.classList.add('active')
  })




  conferir.addEventListener('click', () => {
    let today = new Date()
    let diaDaSemana = today.getDay()
    let horas = today.getHours()


    let dia = undefined
    let hora = undefined
    let cumprimento = undefined

    if(ter.classList.contains('active')) {
      dia = pedido.terca
    }
    if(qua.classList.contains('active')) {
      dia = pedido.quarta
    }
    if(qui.classList.contains('active')) {
      dia = pedido.quinta
    }
    if(sex.classList.contains('active')) {
      dia = pedido.sexta
    }
    if(sab.classList.contains('active')) {
      dia = pedido.sabado
    }


    if(oit.classList.contains('active')) {
      hora = pedido.oitoM
    }
    if(nov.classList.contains('active')) {
      hora = pedido.noveM
    }
    if(dez.classList.contains('active')) {
      hora = pedido.dezM
    }
    if(onz.classList.contains('active')) {
      hora = pedido.onzeM
    }


    if(uma.classList.contains('active')) {
      hora = pedido.umaT
    }
    if(duas.classList.contains('active')) {
      hora = pedido.duasT
    }
    if(tres.classList.contains('active')) {
      hora = pedido.tresT
    }
    if(quatro.classList.contains('active')) {
      hora = pedido.quatroT
    }
    if(cinco.classList.contains('active')) {
      hora = pedido.cincoT
    }

    if(horas >= 1 && horas < 12) {
      cumprimento = 'Bom dia'
    }
    if(horas >= 12 && horas <= 17 ) {
      cumprimento = 'Boa tarde'
    }
    if(horas >= 18 && horas <= 23 ) {
      cumprimento = 'Boa noite'
    } 

    let mensagem = `${cumprimento}, eu gostaria de saber se você está disponível ${dia} às ${hora}.`

    window.open(`https://wa.me/5533984523678?text=${mensagem}`)
  })
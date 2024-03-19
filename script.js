const iconeMenu = document.querySelector('#icone-menu')
const listraMenu = document.querySelector('#listra-menu')
const menu = document.querySelector('#menu')
const msg = document.querySelector('.msg')
const home = document.querySelector('.home')
const calendario = document.querySelector('.calendario')
const sessao3 = document.querySelector('#sessao3')
const sessao4 = document.querySelector('#sessao4')

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
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    let calendarHTML = '<table>';
    calendarHTML += '<tr><th colspan="7">' + monthNames[month] + ' ' + year + '</th></tr>';
    calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

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

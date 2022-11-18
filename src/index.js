const daysName = ['Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday', 'Sunday']
const monthName = ['January', 'February', 'March', 'April', 'Mei', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let calendar = new Date()
let day = calendar.getDay()
let date = calendar.getDate()
let month = calendar.getMonth()
let year = calendar.getFullYear()
let name = prompt("Inputkan nama anda!")
document.getElementById('name').innerText = `Hello ${name}\nWelcome to my CV!`
document.getElementById('day').innerText = daysName[day - 1]
document.getElementById('date').innerText = `${date} ${monthName[month]} ${year}`

const clock = () => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = h >= 12 ? 'PM' : 'AM';
  h = (h < 10) ? `0${h}` : h;
  m = (m < 10) ? `0${m}` : m;
  s = (s < 10) ? `0${s}` : s;
  document.getElementById('time').innerText = `${h}:${m}:${s} ${session}`;
  setTimeout(clock, 1000);
}

const checkSkill = (x) => {
  switch (x) {
    case '3':
      document.getElementById('recomendation').value = "Web Programmer"
      break
    case '2':
      document.getElementById('recomendation').value = "Design"
      break
    default:
      document.getElementById('recomendation').value = "Administrator"
      break
  }
}

const message = () => {
  let data = document.getElementById('perusahaan').value
  alert(`Terimakasih ${data}, karena telah mengunjungi CV saya!`)
}

window.addEventListener('load', () => {
  clock()
})
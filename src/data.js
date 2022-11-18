const dataSideBar = [
  {
    "title": "Contact",
    "data": ["ahmadfadilah202003@gmail.com", "+62 8579 5069 461"]
  },
  {
    "title": "Follow Me",
    "data": ["github.com/ahmdf20", "wa.me/085795069461", "instagram.com/soldayumm", "linkedin.com/in/dot-code-0187071b9", "facebook.com/oo0VFelix0oo"]
  },
  {
    "title": "Education",
    "data": ["Politeknik Negeri Subang [2022 - Now]", "SMKN 1 Subang [2018 - 2021]", "SMP IT Alamy [2016 - 2018]", "SDN JL Palabuan [2010 - 2016]"]
  }
]

const dataExperience = [
  {
    title: "UPTK Politeknik Negeri Bandung | June - December 2019",
    todo: ["Build a website for managing lab activity", "Rebuild computer lab network architecture"],
    used: ["Codeigniter", "Ajax", "JQuery", "MySQL"]
  },
  {
    title: "April 2021",
    todo: ["Build a website for collecting community reports"],
    used: ["Codeigniter", "Ajax", "JQuery", "MySQL"]
  },
  {
    title: "February 2022",
    todo: ["Build a website for managing log activity"],
    used: ["Codeigniter", "Ajax", "MySQL"]
  },
  {
    title: "March 2022",
    todo: ["Rework a collecting community reports website"],
    used: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Bootstrap"]
  }
]

const loadData = () => {
  //Canvas
  let canvasSideBar = document.getElementById('sidebar')
  let canvasEx = document.getElementById('experience')

  //Load Data Biodata
  dataSideBar.map((biodata, i) => {
    canvasSideBar.innerHTML += `
    <div class="font-serif mb-[4rem]">
      <h1 class="text-5xl ml-3 mb-3">${biodata.title}</h1>
      <ul class="list-disc ml-[2.5rem]">
      ${biodata.data.map(sd => `<li>${sd}</li>`).join('')}
      </ul >
    </div > `
  })

  //Load Data Experience
  dataExperience.map((ex, i) => {
    canvasEx.innerHTML += `
    <h3 class="text-2xl">${ex.title}</h3>
    <ul class="list-disc ml-5 text-md mb-5">
      ${ex.todo.map(todos => `<li>${todos}</li>`).join('')}
      <li class="list-none">Used : ${ex.used.join(', ')}</li>
    </ul>
    `
  })
}

window.addEventListener('load', () => {
  loadData()
})
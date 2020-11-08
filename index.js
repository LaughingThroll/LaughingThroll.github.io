window.addEventListener('DOMContentLoaded', () => {

  const mainMenu = document.querySelector('#main-menu')

  const sites = [
    {
      title: 'Juice',
      URL: 'https://laughingthroll.github.io/Juice/dist/index.html',
      image: 'images/content/Juice.png'

    }


  ]


  sites.forEach(site => {
    const item =  `
    <li class="main-menu__li main-item">
      <a href="${site.URL}" class="main-item__link" target='_blank'>
        <img class="main-item__image" src="${site.image}" alt="${site.title} web-site">
        <h2 class="main-item__title"> <span class="span-animation-border"> ${site.title} </span> </h2>
      </a>
    </li>
    `

    mainMenu.insertAdjacentHTML('afterbegin', item)
  })

  

})
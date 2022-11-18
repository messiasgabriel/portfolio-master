const buttons = document.querySelectorAll(".buttons input")

const desactiveButton = () =>{
    buttons.forEach(element => {
        element.dataset.active = "false"
    })
}
const javascriptClick = (e) => {
    elementsJavascript()
    desactiveButton()
    element =e.target
    element.dataset.active = "true"
}
const htmlcssClick = (e) => {
    desactiveButton()
    elementshtmlcss()
    element =e.target
    element.dataset.active = "true"
}
const resposiveClick = (e) => {
    desactiveButton()
    element =e.target
    element.dataset.active = "true"
    elementsDefault()
    
}
const removerElements = () => {
    const projects = document.querySelector(".projects-container")
    projects.innerHTML = ''
    for(let i = 0; i < 3; i++){
        projects.innerHTML += /*html*/ `
            <div class="projects-content" style="width:329px ;height:430px;background-color:white;">
                <div style="width:226px ;height:334px;padding:20px;background-color:rgb(96 92 92 / 16%);margin:20px auto;border-radius:12px">
                    <p style="color: #333333;text-align:center;">Coming soon</P>
                </div>
            </div>`
    }
}
const elementsDefault = () => {
    const projects = document.querySelector(".projects-container")
    projects.innerHTML =  /*html*/`
    <div class="projects-content">
      <div class="project-img">
        <img src="img/recipe-blog.png" alt="project Checkout">
      </div>
      <div class="project-tags">
        <span>#HTML</span> <span>#CSS</span> <span>#responsive</span>
      </div>
      <div class="project-info">
        <h4>Checkout</h4>
        <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The
          design is from devchallenge.io</p>
      </div>
      <div class="project-buttons">
            <a href="https://messiasgabriel.github.io/recipe-blog/" target="_blank"><input type="button" value="Demo" ></a>
            <a href="https://github.com/messiasgabriel/recipe-blog" target="_blank"><input type="button" value="Code"></a>
      </div>
    </div>
    <div class="projects-content">
      <div class="project-img">
          <img src="img/edie-homepage.png" alt="project blog">
      </div>
      <div class="project-tags">
          <span>#HTML</span> <span>#CSS</span> <span>#responsive</span>
      </div>
      <div class="project-info">
          <h4>Edie Homepage</h4>
          <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
      </div>
      <div class="project-buttons">
            <a href="https://messiasgabriel.github.io/recipe-blog/" target="_blank"><input type="button" value="Demo" ></a>
            <a href="https://github.com/messiasgabriel/recipe-blog" target="_blank"><input type="button" value="Code"></a> 
      </div>
  </div>

  <div class="projects-content">
      <div class="project-img">
          <img src="img/my-gallery.png" alt="project gallery">
      </div>
      <div class="project-tags">
          <span>#HTML</span> <span>#CSS</span> <span>#Responsive</span>
      </div>
      <div class="project-info">
          <h4>My Gallery</h4>
          <p>In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io</p>
      </div>
      <div class="project-buttons">
            <a href="https://messiasgabriel.github.io/my-gallery/" target="_blank"><input type="button" value="Demo" ></a>
            <a href="https://github.com/messiasgabriel/my-gallery" target="_blank"><input type="button" value="Code"></a>
      </div>
  </div>
`
}
const elementsJavascript = () => {
    const projects = document.querySelector(".projects-container")
    projects.innerHTML =  /*html*/`
    <div class="projects-content">
      <div class="project-img">
        <img src="img/pokedex.png" alt="Pokedex">
      </div>
      <div class="project-tags">
        <span>#HTML</span> <span>#CSS</span> <span>#JavaScript</span>
      </div>
      <div class="project-info">
        <h4>Pokedex</h4>
        <p>In this project, I work with Pokedex API, HTML, CSS and JavaScript to create a responsive page. 
        </p>
      </div>
      <div class="project-buttons">
            <a href="https://messiasgabriel.github.io/pokedex/" target="_blank"><input type="button" value="Demo" ></a>
            <a href="https://github.com/messiasgabriel/pokedex" target="_blank"><input type="button" value="Code"></a>
      </div>
    </div>
    <div class="projects-content">
      <div class="project-img">
          <img src="img/mario-jump.png" alt="Mario jump game">
      </div>
      <div class="project-tags">
          <span>#HTML</span> <span>#CSS</span> <span>#JavaScript</span>
      </div>
      <div class="project-info">
          <h4>Mario Jump</h4>
          <p>In this project, I work with HTML, CSS and JavaScript to create a Mario Jump game.</p>
      </div>
      <div class="project-buttons">
            <a href="https://messiasgabriel.github.io/mario-jump/" target="_blank"><input type="button" value="Demo" ></a>
            <a href="https://github.com/messiasgabriel/mario-jump" target="_blank"><input type="button" value="Code"></a>
      </div>
  </div>

  <div class="projects-content">
      <div class="project-img">
          <img src="img/verificador-idade.png" alt="project age checker">
      </div>
      <div class="project-tags">
          <span>#HTML</span> <span>#CSS</span> <span>#JavaScript</span>
      </div>
      <div class="project-info">
          <h4>Age checker</h4>
          <p>In this project, I work with HTML, CSS and JavaScript to create a age checker page.</p>
      </div>
      <div class="project-buttons">
            <a href="https://messiasgabriel.github.io/verificador-de-idade/" target="_blank"><input type="button" value="Demo" ></a>
            <a href="https://github.com/messiasgabriel/verificador-de-idade" target="_blank"><input type="button" value="Code"></a>
      </div>
  </div>
`
}
const elementshtmlcss = () => {
    const projects = document.querySelector(".projects-container")
    projects.innerHTML =  /*html*/`
    <div class="projects-content">
      <div class="project-img">
        <img src="img/3d-ball.png" alt="3d Ball">
      </div>
      <div class="project-tags">
        <span>#HTML</span> <span>#CSS</span> <span>#3D</span>
      </div>
      <div class="project-info">
        <h4>3D Ball</h4>
        <p>In this project, I work with HTML and CSS only to create a 3D animation ball. 
        </p>
      </div>
      <div class="project-buttons">
            <a href="https://messiasgabriel.github.io/projeto-bolinha3d/" target="_blank"><input type="button" value="Demo" ></a>
            <a href="https://github.com/messiasgabriel/projeto-bolinha3d" target="_blank"><input type="button" value="Code"></a>
      </div>
    </div>
    <div class="projects-content">
      <div class="project-img">
          <img src="img/login.png" alt="Login Page">
      </div>
      <div class="project-tags">
          <span>#HTML</span> <span>#CSS</span>
      </div>
      <div class="project-info">
          <h4>Login page</h4>
          <p>In this project, I work with HTML and CSS only to create a login page.</p>
      </div>
      <div class="project-buttons">
            <a href="https://messiasgabriel.github.io/pagina-de-login/" target="_blank"><input type="button" value="Demo" ></a>
            <a href="https://github.com/messiasgabriel/pagina-de-login" target="_blank"><input type="button" value="Code"></a>
      </div>
  </div>

  <div class="projects-content">
      <div class="project-img">
          <img src="img/flex-blog.png" alt="project age checker">
      </div>
      <div class="project-tags">
          <span>#HTML</span> <span>#CSS</span>
      </div>
      <div class="project-info">
          <h4>Flex-Blog</h4>
          <p>In this project, I work with HTML and CSS only to create a flex-blog page.</p>
      </div>
      <div class="project-buttons">
            <a href="https://messiasgabriel.github.io/projeto-flexblog/" target="_blank"><input type="button" value="Demo" ></a>
            <a href="https://github.com/messiasgabriel/projeto-flexblog" target="_blank"><input type="button" value="Code"></a>
      </div>
  </div>
`
}



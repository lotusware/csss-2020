  
Vue.component('mini-card', {
  props: ['title','body','footer'],
  template:`
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ body }}</p>
    <p class="card-text"><small class="text-muted">{{ footer }}</small></p>
  </div>
</div>
`
})







Vue.component('side-card', {
  props: ['title','body','footer'],
  template:`
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ body }}</p>
            <p class="card-text"><small class="text-muted">{{ footer }}</small></p>
          </div>
        </div>
`
})

  
  
  Vue.component('vue-footer', {
    template: `
    <footer class="page-footer" style="text-align: center; ">
    <div class="container" style="background-color:#17272B; text-align:center; padding-top:50px; margin-top:50px;">
    <h2 >Sponsors</h1>
<div class="card-group">
    <div class="sponsor card"><img class="card-img-top sponsor-img" src="assets/sponsor-upei.png" alt="Card image cap"></div>
  </div>
  <h2 >Partners</h1>
  <div class="card-group" style="background-color:#17272B">
    <div class="sponsor card"><img class="card-img-top sponsor-img" src="assets/sponsor-mc.png" alt="Card image cap"></div>
  </div>
</div>
<hr style="border-top-color:rgba(255,255,255,0.1); margin-bottom:0px">
        <div class="footer-copyright text-center py-3"style="padding-bottom:20px;">© 2020 Copyright
            <a>Canadian Society of Soil Science</a>
        </div>
</footer>
    `
  })
 
  
  Vue.component('vue-navbar', {
        template: `


        <div class="container-fluid-nav container-fluid">
            <div class="container" style="max-width:1600px;">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand"><img src="assets/nav-logo.png" height="30" style="margin-top:-8px"/> CSSS 2020</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="assets/hamburger.svg" height="30" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <vue-nav-items></vue-nav-items>
                    </div>
                </nav>
            </div>
        </div>
    `
  })
  

  Vue.component('vue-nav-items', {
template: `
<div class="navbar-nav">
    <a class="nav-item nav-link" href="welcome.html" >Welcome</a>
    <a class="nav-item nav-link" href="about.html" >About</a>
    <a class="nav-item nav-link" href="venue.html" >Venue</a>
    <a class="nav-item nav-link" href="program.html" >Scientific Program</a>
    <a class="nav-item nav-link" href="registration.html" >Registration</a>
    <a class="nav-item nav-link" href="abstracts.html" >Abstracts</a>
    <a class="nav-item nav-link" href="activities.html" >Activities</a>
    
    
    </div>
`

  })
  

  var app = new Vue({ el: '#vue-app' })
  
  

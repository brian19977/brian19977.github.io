function loadScripts(root = '') {
  document.getElementById('header-placeholder').innerHTML = `
    <header class="header">
      <nav class="navbar">
        <a href="${root}index.html" class="nav-logo">Brian Paick</a>
        <ul class="nav-menu" id="navMenu">
          <li class="nav-item">
            <span class="nav-link"><a href="#">Work</a> <span class="nav-arrow">▾</span></span>
            <ul class="submenu">
              <li><a href="${root}work/index.html">Home</a></li>
              <li><a href="${root}work/index.html#projects">Projects</a></li>
              <li><a href="${root}work/index.html#teaching">Teaching</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <span class="nav-link"><a href="#">Writing</a> <span class="nav-arrow">▾</span></span>
            <ul class="submenu">
              <li><a href="${root}writing/index.html">Home</a></li>
              <li><a href="${root}writing/reviews/index.html">Reviews</a></li>
              <li><a href="${root}writing/essays/index.html">Essays</a></li>
              <li><a href="${root}writing/more/index.html">More</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <span class="nav-link"><a href="#">More</a> <span class="nav-arrow">▾</span></span>
            <ul class="submenu">
              <li><a href="${root}more/index.html">Home</a></li>
              <li><a href="${root}more/index.html#music">Music</a></li>
              <li><a href="${root}more/index.html#climbing">Climbing</a></li>
            </ul>
          </li>
        </ul>
        <div class="hamburger" id="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>`;
  
  const curYear = new Date().getFullYear();

  document.getElementById('footer-placeholder').innerHTML = `<div class="row" style="text-align: center; font-family: 'Courier New', Courier, monospace;">
      <div class="col"></div>
      <div class="col-3"><a href="${root}directory.html" style="text-align: center;">Directory</a></div>
      <div class="col-3"><a href="${root}tags.html" style="text-align: center;">Tags</a></div>
      <div class="col-4" style="text-align: center;">© BSP ${curYear}</div>
      <div class="col"></div>
    </div>`

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navItems = document.querySelectorAll('.nav-item');

  function closeAll() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navItems.forEach(i => i.classList.remove('open'));
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      const isMobile = window.innerWidth <= 760;
      navItems.forEach(i => { if (i !== item) i.classList.remove('open'); });
      item.classList.toggle('open');
    });
  });

  document.querySelectorAll('.submenu a').forEach(a => {
      a.addEventListener('click', closeAll);
  });

  // Close all submenus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      closeAll();
    }
  });
  

}

/* functions to populate sections of writing */
function generate_links(category, oldestToNewest = true) {
    var sections = document.getElementsByClassName("content");
    var id_arr = [];
    var i = 0;

    for(; i < sections.length; i++)
        id_arr.push(sections[i].id);
    i = 0;

    var section_arr = Array(id_arr.length);
    for(; i < id_arr.length; i++)
        section_arr[i] = document.getElementById(id_arr[i]);

    if(oldestToNewest) {
        i = 0;
        for(; i < articles.length; i++) {
            create_links(category, section_arr, id_arr, i);
        }
    } else {
        i = articles.length - 1;
        for(; i > -1; i--) {
            create_links(category, section_arr, id_arr, i);
        }
    }
}

function create_links(category, section_arr, id_arr, i) {
    var tag_set = new Set(articles[i].tags);
    
    for(var j = 0; j < section_arr.length; j++) {
        if(
                (tag_set.has(id_arr[j])) && 
                (category.length > 0 ? tag_set.has(category) : true)) {

            var link = document.createElement("a");
            link.href = articles[i].link.substring(articles[i].link.indexOf("/")+1);
            var text = document.createElement("p");
            text.innerHTML = articles[i].title;
            link.appendChild(text);
            section_arr[j].appendChild(link);
        }
    }
}
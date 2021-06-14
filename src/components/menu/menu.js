// export const Menu = (props) => {
//     return (
//         <div classNameNameName="menuItems"> 
//             <a href="/">home </a>
//             <a href="/blog">blog </a>
//         </div>
//     )
// }

export const Menu = () => {
    return (
      //   <div className="nav">
      //   <input type="checkbox" />
      //     <span></span>
      //     <span></span>
      //     <div className="menu">
      //       <li><a href="/">Inicio</a></li>
      //       <li><a href="#">Proyectos</a></li>
      //       <li><a href="#">Github</a></li>
      //       <li><a href="/blog">Blog</a></li>
      //     </div>
      // </div>
      <div>
        <nav class="nav">
        <input class="nav__trigger-input" type="checkbox" id="trigger" aria-label="open the navigation"/>
        <label class="nav__trigger-finger" for="trigger">
        <span></span>
        </label>
        <ul class="nav__list">
        <li class="nav__item">
            <a href="/" class="nav__link">
              <span class="nav__text">
                Inicio
              </span>
            </a>
          </li>
          <li class="nav__item">
            <a href="https://github.com/panxomon/letargico-front" class="nav__link">
              <span class="nav__text">
                Github
              </span>
            </a>
          </li>
          <li class="nav__item">
            <a href="/blog" class="nav__link">
              <span class="nav__text">
                Blog
              </span>
            </a>
          </li>
          <li class="nav__item">
            <a href="/contacto" class="nav__link">
              <span class="nav__text">
                Contacto
              </span>
            </a>
          </li>
        </ul>
    </nav>
</div>  
    )
}

export default Menu 
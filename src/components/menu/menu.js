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
        <div className="nav line-nav">
          <a href="/">Inicio </a>
          <a href="/about">About </a>
          <a href="https://github.com/panxomon/letargico-front" rel = "noopener noreferrer" >Github </a>
          <a href="/blog">Blog </a>
          <a href="/contacto">Contacto </a>
          <div className="effect"></div>
        </div>
    )
}

export default Menu 

import BotonNuevo from '../../atomicDesign/atoms/atoms.input'



export const CrearPost = (props) => {
    return (
        <section className="crear-post">
            <p>Titulo del post</p>
            <input type="text" placeholder="nuevo articulo" />
            <br />
            <input type="text" />
            <p>agregue hashtags </p>
            <input type="text" placeholder="#nuevoHashTag" />
            <input type="button" value="Añadir" />
            <br />
            <input type="button" value="Enviar" />
        </section>
    )
}

export default CrearPost
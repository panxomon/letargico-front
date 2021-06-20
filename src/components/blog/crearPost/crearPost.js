
import BotonNuevo from '../../atomicDesign/atoms/atoms.input'

export const CrearPost = (props) => {

    function test(e) {

        console.log(e.target);
        console.log(e.input.texto)
      }

    return (
        <section className="post">
            <p>Titulo del post</p>
            <input type="text" placeholder="nuevo articulo" />
            <br />
            <input type="text" />
            <p>agregue hashtags </p>
            <input type="text" placeholder="#nuevoHashTag" />
            <input type="button" value="Añadir" />
            <br />

            <BotonNuevo type="submit" texto={"presiona"}  onclick={e => test(e)}  />

          
        </section>
    )
}

export default CrearPost
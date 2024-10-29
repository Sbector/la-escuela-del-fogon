import Button from "../_components/Button"
import Link from "next/link"


export default function JaimePage() {
    return (
        <div className="">
            <div className="pb-12">
                <h1 className="text-4xl pb-12">¿QUIÉN ES JAIME?</h1>
                <p className="">Jaime Santiz Gómez nacio en la comunidad de Lelenchij, en Oxchuc, Chiapas</p>
                <p>A los 13 años migró a San Cristóbal de las Casas para continuar sus estudios y trabajar.<br />
                <br />
                Actualmente vive con su esposa Rosa y sus hijos en la colonia La Libertad, un área popularmente conocida por el morcado José Castillo Tielmans, el más grande del centro de San Cristóbal.</p>
            </div>

            <div className="pb-12">
                <h1 className="text-4xl pb-12">CONFLICTOS Y PARTICULARIDADES DE SU TERRITORIO</h1>
                <p>La colonia La Libertad alberga "El Tívoli", un basurero municipal improvisado hace más de 20 años, el cual se ha convertido en un espacio de disputa.<br />
                <br />
                Desde su creación, los vecinos han denunciado su mala gestión, la presencia de animales en descomposición y el desbordamiento sanitario. Además, al ser un territorio codiciado por si cercanía a las áreas comerciales, la colonia ha sido foco de tensiones, con grupos armados que han desplazado a los habitantes en diversas ocasiones.<br />
                <br />
                Jaime, sin embargo, ha sabido encontrar una forma de aprovechar su entorno.</p>
            </div>

            <div className="pb-12">
                <h1 className="text-4xl pb-12">HISTORIA E IMPORTANCIA DE SUS ANAFRES</h1>
                <p>Jaime aprendió a fabricar anafres observando a otros <br />
                    ----------<br />
                    Utiliza materiales que recoge del basurero, como latas, tubos, tambos, partes de lavadoras y cualquier metal que encuentre.<br />
                    ----------<br />
                    Su habilidad lo ha convertido en uno de los pocos anafreros de Chiapas.<br />
                    ----------<br />
                    Hoy en día, sólo hay 10 personas que practican este oficio, distribuidos en barrios como San Ramón, Tres de Enero, Ojo de Agua, Guadalupe y La Tlaxcala.<br />
                    ----------<br />
                    Los anafres de Jaime no sólo son un medio de sustento para su familia, también representan una conexión con la transfomación de la basura y la creatividad.
                </p>
            </div>
            <Link href="/jaime/instrucciones">
            <Button>
                Instrucciones
            </Button>
            </Link>
        </div>
    )
}
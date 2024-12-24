interface CardProps {
    imageUrl: string;
    caseNumber: string;
    institution: string;
    location: string;
    type: string;
    title: string;
}

export default function Card({ imageUrl, caseNumber, institution, location, type, title }: CardProps) {
    return (
        // Contenedor de tarjeta
        <div className="snap-start overflow-hidden
        relative 
        w-full h-full flex lg:flex-row
        border-b border-neutral-50 lg:border-neutral-900">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 h-full lg:relative lg:w-2/5">
                <img src={imageUrl} alt={title} className="w-full h-full
                 object-cover 
                 filter brightness-50 lg:brightness-100" />
            </div>
            {/* Identificadores */}
            <div className="relative z-10
            h-full w-full lg:w-3/5
            flex flex-col-reverse lg:flex-col 
            justify-between
            uppercase
            lg:pt-3
            text-neutral-50 lg:text-neutral-900">
                {/* Indicadores primarios */}
                <div className="relative z-10 flex flex-col lg:flex-row lg:gap-28 items-start lg:leading-none px-4 py-4">
                    <span className="rounded-xl border
                    border-neutral-50 lg:border-neutral-900
                    text-md
                    px-1 mb-4 lg:mt-2 lg:ml-4
                    ">{caseNumber}
                    </span>
                    <h2 className="text-md lg:text-3xl leading-tight">
                        {title}
                    </h2>
                </div>
                {/* Identificadores secundarios */}
                <div className=" flex flex-row justify-between items-center space-x-4 px-4 py-4">
                    <span className="text-xs uppercase font-medium tracking-wide">
                        {institution}
                    </span>
                    <span className="text-xs uppercase font-medium tracking-wide">
                        {location}
                    </span>
                    <span className="text-[10px] uppercase font-medium tracking-wide rounded-full px-3 py-0.5 border border-neutral-50 lg:border-neutral-900 leading-none">
                        {type}
                    </span>
                </div>
            </div>
        </div>
    );
}
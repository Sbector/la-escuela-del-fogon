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
        <div className="relative w-full h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden shadow-lg border border-opacity-30 border-neutral-50 bg-neutral-900">
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover filter brightness-50" />
            </div>

           {/* Identificadores superiores */}
           <div className="relative z-10 flex flex-row justify-between items-center space-x-4 px-4 py-4">
                <span className="text-xs uppercase font-medium tracking-wide text-white">
                    {institution}
                </span>
                <span className="text-xs uppercase font-medium tracking-wide text-white">
                    {location}
                </span>
                <span className="text-[10px] uppercase font-medium tracking-wide rounded-full px-3 py-0.5 border border-white text-white leading-none">
                    {type}
                </span>
            </div>

            {/* Indicadores inferiores */}
            <div className="relative z-10 flex flex-col items-start px-4 py-4">
                <span className="text-md border border-white rounded-xl px-1 text-white mb-4">{caseNumber}</span>
                <h2 className="text-md text-white leading-tight">
                    {title}
                </h2>
            </div>
        </div>
    );
}
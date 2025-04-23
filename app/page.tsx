import Card from './_components/Card';

export default function HomePage() {
    return (
        <>
            {/* Contenido principal */}
            <main className="snap-y snap-mandatory overflow-scroll h-screen no-scrollbar">
                {/* Tarjetas */}
                <Card
                    imageUrl="/images/caso4.png"
                    caseNumber="04"
                    institution="Foodscapes"
                    location="CDMX"
                    type="Publicación"
                    title="Manual para la elaboración de anafre de lata"
                />
                <Card
                    imageUrl="/images/caso3.png"
                    caseNumber="03"
                    institution="Proyector"
                    location="CDMX"
                    type="Fogón"
                    title="Los anafres de Jaime"
                />
                <Card
                    imageUrl="/images/caso2.png"
                    caseNumber="02"
                    institution="MAZ"
                    location="Zapopan, Mex."
                    type="exhibición"
                    title="Cocinar la revolución en América"
                />
                <Card
                    imageUrl="/images/caso1.png"
                    caseNumber="01"
                    institution="MAZ"
                    location="Zapopan, Mex."
                    type="fogón"
                    title="Cocinar la revolución en América"
                />
            </main>
        </>
    );
}
import Card from './_components/Card';

export default function HomePage() {
    return (
        <>
            {/* Contenido principal */}
            <main className="flex-grow">
                {/* Tarjeta principal */}
                <section>
                    <Card
                        imageUrl="/images/caso4.png"
                        caseNumber="04"
                        institution="Foodscapes"
                        location="CDMX"
                        type="Publicación"
                        title="Manual para la elaboración de anafre de lata"
                    />
                </section>

                {/* Serie de tarjetas adicionales */}
                <section className="grid grid-cols-1 md:grid-cols-2">
                    <Card
                        imageUrl="/images/caso1.png"
                        caseNumber="01"
                        institution="Proyector"
                        location="Ubicación caso 1"
                        type="Tipo caso 1"
                        title="Título caso 1"
                    />
                    <Card
                        imageUrl="/images/caso2.png"
                        caseNumber="02"
                        institution="MAZ"
                        location="Ubicación caso 2"
                        type="Tipo caso 2"
                        title="Título caso 2"
                    />
                    <Card
                        imageUrl="/images/caso3.png"
                        caseNumber="03"
                        institution="MAZ"
                        location="Ubicación caso 3"
                        type="Tipo caso 3"
                        title="Título caso 3"
                    />
                    <Card
                        imageUrl="/images/caso4.png"
                        caseNumber="04"
                        institution="Foodscapes"
                        location="CDMX"
                        type="Publicación"
                        title="Manual para la elaboración de anafre de lata"
                    />
                </section>
            </main>
        </>
    )
}
import Link from "next/link"
import Card from "./_components/JaimeCard"

export default function Home() {
  return (
    <>
      <h1 className="text-4xl pb-6">LA ESCUELA DEL FOGÓN</h1>
      <h2 className="text-xl pb-4">PRESENTA</h2>
      <Link href="/jaime">
        <Card />
      </Link>

    </>

  )
}
import Link from "next/link"
import Card from "./_components/JaimeCard"
import Wrapper from "./_components/Wrapper"

export default function Home() {
  return (
    <Wrapper>
      <h1 className="text-4xl pb-6">LA ESCUELA DEL FOGÓN</h1>
      <h2 className="text-xl pb-4">PRESENTA</h2>
      <Link href="/casos/jaime">
        <Card />
      </Link>
    </Wrapper>
  )
}
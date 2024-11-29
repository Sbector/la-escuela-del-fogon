export default function HomePage() {
    return (
        <div className="grid grid-cols-1 grid-rows-4 w-screen">
            <div className="flex justify-between items-end">
                <div className="grid grid-cols-12">
                    <p className="text-xs text-center w-8 h-6 ml-4 py-1 rounded-xl border border-black">01</p>
                    <h1 className="text-3xl col-span-6">COCINAR LA REVOLUCIÓN <br />
                        EN AMERICA</h1>
                    <h2 className="col-span-1 text-sm">MUSEO DE ARTE <br />
                        DE ZAPOPAN</h2>
                    <span className="text-xs text-center w-10 h-6 ml-10 py-1 rounded-xl bg-black text-white">MAZ</span>
                    <p className="text-md col-span-3 col-start-11">JALISCO, MÉXICO</p>
                </div>
            </div>
            <div className="flex flex-col row-span-3 overflow-hide bg-zinc-400 ">
            </div>
        </div>
    )
}
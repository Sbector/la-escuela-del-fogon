export default function Wrapper({children,}: {children: React.ReactNode}) {
    return(
        <div className="flex min-h-[calc(100dvh-80px)] w-screen">
            {children}
        </div>
    )
}
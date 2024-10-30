export default function Wrapper({ 
    children, 
    className 
}:{
    children: React.ReactNode,
    className?: any
}) {
    return (
        <div className={`${className}
        flex flex-col
        min-h-screen max-w-full
        py-20 px-10
        text-sm
        snap-start 
        `}>
            {children}
        </div>
    )
}
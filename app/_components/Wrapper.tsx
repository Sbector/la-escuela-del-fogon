export default function Wrapper({ 
    children, 
    className 
}:{
    children: React.ReactNode,
    className?: any
}) {
    return (
        <div className={`${className}
        p-10
        `}>
            {children}
        </div>
    )
}
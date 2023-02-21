const CommonPage: React.FC<{
    text: string
}> = ({ text }) => {
    return (
        <div className="pt-16">
            <div>
                <h1 className="mb-8 text-4xl font-extrabold text-center lg:text-5xl">
                    {text}
                </h1>
            </div>
        </div>
    )
}

export default CommonPage

const ProdViewContent = ({title, item}) => {
    return (
        <>
            <div className=" flex flex-col gap-3">
                <div className="font-bold">
                    <div className="pl-2">
                        {title}
                    </div>
                </div>
                <div>
                    <div className="w-[10rem] flex flex-col gap-4">
                        {item}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProdViewContent
const ProdViewContent = ({title, item}) => {
    return (
        <>
            
            <div className=" flex flex-col gap-4">
                <div className="font-bold">
                    <div>
                        {title}
                    </div>
                </div>
                <div className="box-border">
                    <div className="w-[10rem]">
                        {item}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProdViewContent
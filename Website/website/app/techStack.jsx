export default function TechStack ({imageSource}) {
    return (
        <>
            <div className="w-[80px] flex justify-center items-center rounded-xl p-1 border-gray-400 border-2 hover:cursor-pointer">
                {imageSource}
            </div>
        </>
    )
}
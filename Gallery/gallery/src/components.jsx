export default function Holder(props) {
    return (
        <div className="image-col">
            <img src={props.src} id={props.id} alt="" />
        </div>
    )
}
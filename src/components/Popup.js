export default function Popup({children,handelClose}){

    return (
        <div className="popup">
            <div className="overlay"></div>
            <div className="content">
                <button className="popup-close-btn" onClick={handelClose}>&#10005;</button>
                {children}
            </div>
        </div>
    )
}
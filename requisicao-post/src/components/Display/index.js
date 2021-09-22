import "./style.css";

const Display = ({ response }) => {
    if (response === true) {
        return (
            <div className="divResponse">
                <span className="responsePositive">Requisição Completa!</span>
            </div>
        )
    } else {
        return (
            <div className="divResponse">
                <span className="responseNegative">Requisição Falhou!</span>
            </div>
        )
    }
    
}

export default Display;

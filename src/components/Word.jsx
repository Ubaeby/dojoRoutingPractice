import { Link, useParams } from "react-router-dom";

const Word = props => {
    const { word, text, backGround } = useParams();
    return (
        <>
            <h1 style={ {color: text, backgroundColor: backGround} }> The word is: {word}</h1>
            <Link to="/"> Back To Home</Link>
        </>
    )
}

export default Word;
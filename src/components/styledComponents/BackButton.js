import styled from "styled-components";
import {Link} from "react-router-dom"
import Left_arrow from "../../assets/Left_arrow.svg"

const Button =styled.button`
    border: none;
    background-color: transparent;
`
function BackButton ({linkTo}) {
    return (
        <Link to={linkTo}>
            <Button><img alt="뒤로가기버튼" src={Left_arrow} height="13.7"></img></Button>
        </Link>
    );
}
export default BackButton;
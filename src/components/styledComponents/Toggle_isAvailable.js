import styled from "styled-components";
import toggle_available from "..../Toggle_available.png"
import toggle_disavailable from "..../Toggle_disavailable.png"
// const Toggle = styled.button`

// `
function Toggle(){
    return(
        <div>
            <img alt="토글이미지" src={toggle_available} />
        </div>
    );
}

export default Toggle
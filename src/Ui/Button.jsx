import styled ,{css} from "styled-components";

const Button = styled.button`
${(props)=>
props.state === true && css`
    background-color: blue;
    color: white;
`
}
${(props)=>
props.state === false && css`
  background-color: #4CAF50;
    color: white;
    `
}
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
`
export default Button
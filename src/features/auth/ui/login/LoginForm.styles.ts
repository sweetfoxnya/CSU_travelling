import styled from "styled-components";
import img from"../../../../static/images/auth_background.png"

export const Container = styled.div `
    background: rgba(0, 0, 0, .50) url(${img});
    background-size: cover;
    background-blend-mode: darken;
    width: 100%;
`;
export const LoginForm = styled.div `
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Jost', sans-serif;
    
`;
export const MainContainer = styled.div`
    width: 350px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 2px 20px 50px #000;
`;
export const CheckBox = styled.input`
    display: none;

`;
export const SignUp = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

`;

export const Form = styled.form`

`;
export const SignUpLabel = styled.input`
    color: #000000;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 50px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;

    #chk:checked ~ & {
        transform: scale(0.6);
    }
`;
export const Input = styled.input`
    width: 60%;
    height: 10px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 12px;
    border: none;
    outline: none;
    border-radius: 5px;
`;
export const Button = styled.button`
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    font-size: 1em;
    font-weight: bold;
    margin-top: 30px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
    box-shadow: 5px 20px 50px #000;

    &:hover {
        background: #dbd6e1;
    }
`;
export const Login = styled.input`
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: .8s ease-in-out;

    #chk:checked ~ & {
        transform: translateY(-500px);
    }
`;
export const LabelForLogin = styled.label`
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 50px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
    
    transform: scale(.6);
    #chk:checked ~ & {
        transform: scale(1);
    }
`;
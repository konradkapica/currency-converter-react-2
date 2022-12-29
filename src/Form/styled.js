import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-gap: 30px;

    @media (max-width: 491px) {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }
`;

export const Paragraph = styled.p`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    flex-wrap: wrap;

    @media (max-width: 491px) {
            margin: 0;
            text-align: center;
        }
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 175px;
    display: inline-block;

    @media (max-width: 491px) {
            margin-bottom: 10px;
        }
`;

export const FormFiled = styled.input`
    border: 1px solid #ccc;
    padding: 5px;
    width: 100%;
    max-width: 210px;
    border-radius: 5px;

    @media (max-width: 491px) {
            max-width: none;
        }

    &:invalid {
        background-color: rgba(255, 205, 205, 0.215);
    }
`;

export const Button = styled.button`
    border: none;
    background-color: #008080;
    color: white;
    padding: 10px;
    border-radius: 5px;
    display: block;
    width: 100%;
    transition: 0.3s;
    margin-left: 0;

    @media (max-width: 491px) {
            margin-top: 10px;
            margin-left: 0;
            width: 100%;
        }

    &:hover {
        background-color: hsl(180, 100%, 30%);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;

export const LoadingText = styled.p`
    font-size: 18px;
    line-height: 2.0;
    margin: 0;
    text-align: center;
`;

export const ErrorText = styled(LoadingText)`
    color: red;
`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
`;

export const Spinner = styled.p`
    width: 48px;
    height: 48px;
    border: 5px solid teal;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;

export const Info = styled.p`
    text-align: center;
    color: grey;
    font-size: 14px;
`;
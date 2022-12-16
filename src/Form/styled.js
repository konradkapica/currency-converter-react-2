import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-gap: 20px;
    border: none;

    @media (max-width: 491px) {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }
`;

export const Paragraph = styled.p`
    margin: 0;

    @media (max-width: 491px) {
            margin: 0;
            text-align: center;
        }
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 175px;
    display: inline-block;
    margin-bottom: 10px;
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
    margin-left: 40px;

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
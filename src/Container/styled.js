import styled from "styled-components";

export const StyledContainer = styled.main`
    max-width: 500px;
    min-height: 440px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 50px auto;
    background-color: rgba(255, 255, 255, 0.887);
    box-shadow: 0px 0px 86px -33px #606060;
    display: grid;
    grid-gap: 20px;

    @media (max-width: 531px) {
        margin: 50px 15px auto 15px;
    }
`;
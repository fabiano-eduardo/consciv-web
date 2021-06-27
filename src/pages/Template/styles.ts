import styled from "styled-components";

export const Container = styled.main`

`;

export const Header = styled.header`
    width: 100%;
    height: var(--header-height);
    padding: 0px 20px;
    display: flex;
    align-items: center;
    background: var(--color-green-main);

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    div.profile {
        width: calc(var(--header-height) - 16px);
        height: calc(var(--header-height) - 16px);
        margin-left: auto;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
    }

    @media(max-width: calc(700px + ${process.env.SIZE_TO_ADD})) {
        display: none;
    }
`;
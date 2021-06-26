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
        width: calc(var(--header-height) - 16px);
        height: calc(var(--header-height) - 16px);
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
    }

    @media(max-width: 777px) {
        display: none;
    }
`;
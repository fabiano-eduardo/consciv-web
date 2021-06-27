import React, { useState } from "react";

import { Container } from './styles';

interface MenuProps
{
    style: object;
}

const Menu: React.FC<MenuProps> = ({ style, ...rest }) => {
    return (
        <Container style={style}>

        </Container>
    );
}

export default Menu;
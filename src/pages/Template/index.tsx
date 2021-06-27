import React, { useState } from "react";
import { FaUserAlt, FaBars } from "react-icons/fa";
import { useSpring } from "react-spring";

import Menu from './Menu';

import { Container, Header } from './styles';

const Template: React.FC = ({ children }) => {
    const [menuStatus, setMenuStatus] = useState(false);

    const [styles, api] = useSpring(() => ({ opacity: 1 }));

    return (
        <Container>
            <Header>
                <div className="show-menu">
                    <FaBars size={25} color="#fff" />
                </div>

                <div className="profile">
                    <FaUserAlt size={35} color='#ccc' />
                </div>
            </Header>

            <Menu style={styles} />
            {children}
        </Container>
    );
}

export default Template;
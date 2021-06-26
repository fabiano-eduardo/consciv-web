import React from "react";
import { FaUserAlt } from "react-icons/fa";

import { Container, Header } from './styles';

const Template: React.FC = ({ children }) => {
    return (
        <Container>
            <Header>
                <div>
                    <FaUserAlt size={35} color='#ccc' />
                </div>
            </Header>
            {children}
        </Container>
    );
}
export default Template;
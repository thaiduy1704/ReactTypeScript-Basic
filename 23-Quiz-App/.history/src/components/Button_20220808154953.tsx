import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
	children: ReactNode;
	color: string;
}

const Button: React.FC<IButton> = ({ children, color }) => {
	return <Container>{chilren}</Container>;
};

const Container = styled.button``;
export default Button;

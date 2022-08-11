import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
	children: ReactNode;
	color?: string;
	backgroundColor?: string;
	width?: string;
	type: 'button' | 'submit' | 'reset' | undefined;
}
const Button: React.FC<IButton> = ({
	children,
	color,
	backgroundColor,
	width,
	type,
}) => {
	return (
		<Container
			type={type}
			color={color}
			backgroundColor={backgroundColor}
			width={width}>
			{children}
		</Container>
	);
};
interface Props {
	color?: string;
	backgroundColor?: string;
	width?: string;
}
const Container = styled.button<Props>`
	color: ${(props) => (props.color ? props.color : 'black')};
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : 'var(--clr-secondary)'};
	width: ${(props) => (props.width ? props.width : '100%')};
	padding: 1rem 2rem;
	border-radius: var(--radius);
	border: transparent;
	cursor: pointer;
`;
export default Button;

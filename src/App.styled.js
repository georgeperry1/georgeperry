import styled from 'styled-components';

export const AppBody = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	margin: 0;
	padding: 32px 0;
`;

export const Section = styled.section`
	max-width: 1024px;
	width: 100%;
	padding: 0 32px;
	margin: 16px 0;
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TechItem = styled.div`
	height: 32px;
	display: flex;
	align-items: center;
	font-size: 18px;
	margin-bottom: 16px;
`;

export const ListItem = styled.a`
	height: 32px;
	font-size: 18px;
	margin-bottom: 16px;
	cursor: pointer;
	text-decoration: none;
	color: #000;
	width: max-content;

	&:hover {
		color: #888;
	}
`;

export const Social = styled.a`
	height: 32px;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	align-items: center;
	margin-left: 32px;
`;

export const Copyright = styled.p`
  font-size: 16px;
  font-weight: 400;
  display: flex;
	align-items: center;
	color: #888;
`;

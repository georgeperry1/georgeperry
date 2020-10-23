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
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	font-size: 18px;
	margin-bottom: 16px;
`;

export const ListItem = styled.a`
	font-size: 18px;
	margin: 8px 0;
	cursor: pointer;
	text-decoration: none;
	color: #000;

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
	margin-left: 8px;
`;

export const Copyright = styled.p`
  font-size: 16px;
  font-weight: 400;
  display: flex;
	align-items: center;
	color: #888;
`;

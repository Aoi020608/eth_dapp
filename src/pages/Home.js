import React from 'react';
import styled from 'styled-components';

//import image
import home3 from '../img/Home3.jpg';
import blockchainLogo from '../img/blockchainLogo.jpg';
import ethereumLogo from '../img/ethereumLogo.svg';
import IpfsLogo from '../img/IpfsLogo.png';

const Home = () => {
	return(
		<>
			<WholeSectionStyled>
				<ProofStyled>
					<h1>Proof of Digital Existence</h1>
					<p>
						You can address large amounts of data with IPFS, and place the immutable, 
						permanent IPFS links into a blockchain transaction. This will timestamp and secure your content, 
						without having to put the data on the chain itself. 
					</p>	
				</ProofStyled>
				<ImageStyled>
					<img src={home3} alt="home1" />	
				</ImageStyled>			
			</WholeSectionStyled>
			<FooterStyled>
				<a href=""><img src={blockchainLogo} alt="blockchain" /></a>
				<img src={ethereumLogo} alt="ethereum" />
				<img src={IpfsLogo} alt="Ipfs" />
			</FooterStyled>
		</>
	);
}

const WholeSectionStyled = styled.div`
	min-height: 77vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 1rem;
`;

const ProofStyled = styled.div`
	text-align: center;
	flex: 1;
	h1 {
		color: white;

	}
	p {
		color: white;
	}

`;

const ImageStyled = styled.div`
	img {
		width: 70rem;
	}
`;

const FooterStyled = styled.div`
	background: white;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 0rem 6rem;
	img {
		width: 6rem;
	}
`


export default Home;

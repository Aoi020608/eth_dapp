import React from 'react';
import styled from 'styled-components';

//import image
import home3 from '../img/Home3.jpg';
import blockchainLogo2 from '../img/blockchainLogo2.jpg';
import ethereumLogo from '../img/ethereumLogo.svg';
import IpfsLogo from '../img/IpfsLogo.png';
import bitcoinLogo from '../img/bitcoinLogo.png';
import rippleLogo from '../img/rippleLogo.jpeg';

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
				<a href="https://www.blockchain.com/" target="_blank"><img src={blockchainLogo2} alt="blockchain" /></a>
				<a href="https://ethereum.org/en/" target="_blank"><img src={ethereumLogo} alt="ethereum" /></a>
				<a href="https://ipfs.io/" target="_blank"><img src={IpfsLogo} alt="Ipfs" /></a>
				<a href="https://bitcoin.org/en/" target="_blank"><img src={bitcoinLogo} alt="bitcoin" />></a>
				<a href="" target="_blank"><img src={rippleLogo} alt="ripple" /></a>
			</FooterStyled>
		</>
	);
}

const WholeSectionStyled = styled.div`
	min-height: 73vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3rem 1rem;
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
	a {
		padding: 2rem;
	}
	img {
		width: 4rem;
	}
`


export default Home;

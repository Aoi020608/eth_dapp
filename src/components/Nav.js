import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = () => {

	return(
		<StyledNav>
			<h1><Link to="/">Dapp</Link></h1>
			<ul>
				<li>
					<Link to="/creator">For Creator</Link>

				</li>
				<li>
					<Link to="/">For Buyer</Link>

				</li>
				<li>
					<Link to="/">About Us</Link>

				</li>
			</ul>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
    min-height: 10vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #Logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 7rem;
        position: relative;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 1rem;
        #Logo {
            display: inline-block;
            margin: 2rem;
        }
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        }
    }
`;

export default Nav;

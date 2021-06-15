import styled from 'styled-components'
import Link from 'next/link'


const Nav = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`

function Navbar() {
    return (
        <Nav >
            <div>
                <Link href="#">
                    <StyledLink>Kate</StyledLink>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
                <Link href="/about" passHref>
                    <StyledLink>About</StyledLink>
                </Link>
                <Link href="/contact" passHref>
                    <StyledLink>Contact</StyledLink>
                </Link>
                <Link href="/project/meals" passHref>
                    <StyledLink>MealDB</StyledLink>
                </Link>

            </div>
            
        </Nav>
    )
}

export default Navbar

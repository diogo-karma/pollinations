import styled from '@emotion/styled'
import Logo from './Logo'

import { NavLink } from "react-router-dom"
import RouterLink from './RouterLink'

import { MAIN_NAV_ROUTES } from '../routes/publicRoutes'

import { SocialLinks } from './Social'
import { Colors, MOBILE_BREAKPOINT, HUGE_BREAKPOINT, BaseContainer } from '../styles/global'

const Footer = () => {

    return <OuterContainer>
        <FooterStyle>
            <LetsTalkStyle>
                Let's talk
                <br />
                <span> hello@pollinations.ai </span>
            </LetsTalkStyle>
            <SocialContainer>
                <SocialLinks gap='17px' />
            </SocialContainer>
            <LogoContainer>
                <NavLink to='/' >
                    <Logo size='250px' small='225px' margin='0' />
                </NavLink>
            </LogoContainer>
            <NavigationContainer>
                <Items
                    items={MAIN_NAV_ROUTES}
                    renderComponent={RouteLink}
                    columns={1} />
            </NavigationContainer>
            <TermsLinkContainer>
                <NavLink to='/terms'>
                    Terms & Conditions
                </NavLink>
            </TermsLinkContainer>
        </FooterStyle>
    </OuterContainer>
}
export default Footer

const OuterContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const SocialContainer = styled.div`
grid-area: social;
justify-self: flex-start;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}){
    justify-self: center;

`
const LogoContainer = styled.div`
grid-area: logo;
justify-self: flex-end;
padding-top: 0em;
filter: invert(1);
display: flex;
align-items: center;
@media only screen and (max-width: ${MOBILE_BREAKPOINT}){
    justify-self: center;
    padding-top: 2em;
}
`
const NavigationContainer = styled.div`
grid-area: navigation_footer;
justify-self: flex-end;

@media only screen and (max-width: ${MOBILE_BREAKPOINT}){
    justify-self: center;
}
`

const TermsLinkContainer = styled.div`
grid-area: terms;
justify-self: flex-end;
margin-bottom: 2em;
color: ${Colors.offwhite};
@media only screen and (max-width: ${MOBILE_BREAKPOINT}){
    justify-self: center;
    margin-top: 2em;
}
`

const LetsTalkStyle = styled.p`
grid-area: lets-talk;
justify-self: flex-start;
font-style: normal;
font-weight: 500;
span {
    color: ${Colors.lime};
}   
font-size: 28px;
line-height: 42px;
color: ${Colors.offwhite};
@media only screen and (max-width: ${MOBILE_BREAKPOINT}){
    justify-self: center;
    padding-bottom: 0em;
`


const Items = ({ items, renderComponent, columns }) =>
    split(Object.keys(items), columns).map(col =>
        <ItemsStyle>
            {col.map(renderComponent)}
        </ItemsStyle>
    )
    ;
const ItemsStyle = styled.div`


display: flex;
gap: 3em;
width: 100%;
`


function split(array, cols) {
    if (cols === 1) return [array];
    var size = Math.ceil(array.length / cols);
    return [
        array.slice(0, size)]
        .concat(
            split(
                array
                    .slice(size), cols - 1)
        );
}

const RouteLink = (route) => {
    const { to, label } = MAIN_NAV_ROUTES[route];
    return (
        <RouterLink
            key={`plt_link_${route}`}
            to={to}
        >
            {label}
        </RouterLink>
    )
}


const FooterStyle = styled(BaseContainer)`
padding: 3em 86px 0 86px;

width: 100%;
padding-bottom: 30px;
display: grid;
grid-template-columns: 1fr 1fr;

grid-template-areas: 
    "lets-talk logo"
    "social terms"
    "navigation_footer navigation_footer"
;

@media (max-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns: 1fr;
    grid-template-areas: 
    "logo"
    "navigation_footer"
    "lets-talk"
    "social"
    "terms"
    ;
    padding: 0;
    margin-bottom: 2em;
    max-width: 414px;
}

font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;

color: #FFFFFF;

a {
    padding: 16px 0;
}
`
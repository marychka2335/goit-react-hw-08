import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
display: block;
padding: 15px 5px;
color: white;
text-decoration: none;
font-size: 18px;
font-weight: 600;

&:hover, &:focus, &:active {
    color: black
}`

export const Wrapper = styled.div`
display: flex;
gap: 25px
`
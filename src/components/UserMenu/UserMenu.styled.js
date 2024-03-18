import styled from "styled-components";

export const Text = styled.p`
font-size: 18px;
color: #fff`

export const Wrapper = styled.div`
display: flex;
gap: 25px`;

export const Button = styled.button`
border: none;
background-color: transparent;
font-size: 16px;
text-decoration: underline;
color: #fff;
cursor: pointer;

&:hover, &:focus {
    color: #000
}`
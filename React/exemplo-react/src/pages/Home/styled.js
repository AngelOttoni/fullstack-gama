import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const h1 = styled.h1`
    display: flex;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd; 
    height: 1.5rem; 
    padding: 0 .5rem;
    border-radius:.25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #888; 
    background: #888;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMgs = styled.span`
    display: block;
    font-size: .8rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;
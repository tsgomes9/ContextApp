import styled from "styled-components"


interface ThemeProps {
    theme: string | null
}

export const Container = styled.div<ThemeProps> `
    background-color: ${props => props.theme === 'light' ? 'white' : 'black'};
    height: 100vh;
    width: 100vw;
    margin: auto;
    padding: 0;
    color: ${props => props.theme === 'light' ? 'black' : 'white'};
        
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button<ThemeProps>`
    background-color: ${props => props.theme === 'light' ? 'black' : 'white'};
    color: ${props => props.theme === 'light' ? 'white' : 'black'};
    height: 3rem;
    width: 10rem;
    border-radius: 5px;
    border: none;
    margin-top: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: grey;
        transition: .2s
    }
`
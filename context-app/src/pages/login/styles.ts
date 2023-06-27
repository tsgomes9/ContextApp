import styled from "styled-components"


interface IContainer {
    theme: string | null
}

export const Container = styled.div<IContainer> `
    background-color: ${props => props.theme === 'light' ? 'white' : 'grey'};
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0
`
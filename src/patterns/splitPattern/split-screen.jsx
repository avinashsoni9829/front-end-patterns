import styled from "styled-components"

const Container = styled.div`
  display : flex;
`;

const Panel = styled.div`
   flex : ${(p) => p.flex};
`


export const SplitScreen = ({ children , lw = 1,rw = 1}) => {
    const [left,right] = children;
     return (
        <Container>
         
            <Panel flex = {lw}>
                 {left}
            </Panel>

            <Panel flex = {rw}>
                {right}
            </Panel>

        </Container>
     )
}
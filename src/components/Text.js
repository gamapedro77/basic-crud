import styled from 'styled-components';

const StyledText = styled.p`
    color: ${props.color ? props.color : 'white'};
    font-size: ${props.fontSize ? props.fontSize : '16px'};
    font-weight: ${props.fontWeight ? props.fontWeight : '500'}; 
`

const Text = ({ children, color, fontSize, fontWeight }) => {
    return (
        <StyledText color={color} fontSize={fontSize} fontWeight={fontWeight}> {children} </StyledText>
    )
}

export default Text;
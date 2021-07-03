import styled from 'styled-components';

const StyledInput = styled.input`
    background-color: #224957;
    text-align: center;
    border-radius: 10px;
    width: 300px;
    height: 45px;
`

const Input = ({ type, placeholder }) => {
    <StyledInput type={type} placeholder={placeholder} />
}

export default Input;
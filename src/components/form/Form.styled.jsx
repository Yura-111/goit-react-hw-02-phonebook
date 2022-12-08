import { Form } from 'formik';
import styled from 'styled-components';

export const FormStyl= styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  width: 250px;
  height: 45px;
  padding: 10px;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;
import styled from "styled-components";
import { BasicTypography } from "../../../core/styled";

export const Header = styled(BasicTypography)`
  font-weight: 600;
  font-size: 20px;
`;

export const StyledFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  max-width: 350px;
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`;

export const Label = styled(BasicTypography)`
  font-weight: 400;
  font-size: 14px;
  color: black;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;

  border: 1px solid #bababa;
  border-radius: 3px;
  padding: 14px 24px;
  box-sizing: border-box;
`;

export const FormHelperText = styled(BasicTypography)`
  font-weight: 600;
  font-size: 14px;
  color: #8fafd9;
`;

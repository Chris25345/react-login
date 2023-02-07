import styled from "styled-components";
import { BasicTypography } from "../../../core/styled";

export const Header = styled(BasicTypography)`
  font-weight: 600;
  font-size: 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 5px;
`;

export const Label = styled(BasicTypography)`
  font-weight: 400;
  font-size: 14px;
  color: black;
  margin: 0;
`;

export const StyledInput = styled.input`
  max-width: 350px;
  width: 350px;
  height: 48px;

  border: 1px solid #bababa;
  border-radius: 3px;
  padding: 14px 24px;
  box-sizing: border-box;
`;

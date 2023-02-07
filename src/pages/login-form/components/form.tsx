import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import { setFormData } from "../../../core/utils/local-storage";
import {
  Header,
  InputBox,
  Label,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
} from "../styled";
import { ILoginFormData } from "../types";

export const Form: FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ILoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: ILoginFormData) => {
    setDisabled(true);
    setFormData(data);

    setTimeout(() => {
      setDisabled(false);
      navigate("/account");
    }, 1000);
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Header>Login</Header>

        <InputBox>
          <Label>Email</Label>
          <StyledInput
            {...register("email")}
            name="email"
            id="email"
            type="email"
          />
        </InputBox>

        <InputBox>
          <Label>Password</Label>
          <StyledInput
            {...register("password")}
            name="password"
            id="password"
            type="password"
          />
        </InputBox>

        <Button
          color="#F2A74B"
          width={350}
          height={48}
          radius={6}
          disabled={disabled}
        >
          SUBMIT
        </Button>
      </StyledForm>
    </StyledFormWrapper>
  );
};

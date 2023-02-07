import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import { APP_ROUTES, INITIAL_VALUES } from "../../../core/constants";
import { loginSchema } from "../../../core/schemas";
import { setFormData } from "../../../core/utils/local-storage";
import {
  FormHelperText,
  Header,
  InputBox,
  Label,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
} from "../styled";
import { ILoginFormData } from "../types";
import { joiResolver } from "@hookform/resolvers/joi";

export const Form: FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    defaultValues: INITIAL_VALUES,
    mode: "onBlur",
    resolver: joiResolver(loginSchema),
  });

  const onSubmit = (data: ILoginFormData) => {
    setDisabled(true);
    setFormData(data);

    setTimeout(() => {
      setDisabled(false);
      navigate(APP_ROUTES.account);
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
          {errors.email?.message ? (
            <FormHelperText>{errors.email?.message}</FormHelperText>
          ) : null}
        </InputBox>

        <InputBox>
          <Label>Password</Label>
          <StyledInput
            {...register("password")}
            name="password"
            id="password"
            type="password"
          />
          {errors.password?.message ? (
            <FormHelperText>{errors.password?.message}</FormHelperText>
          ) : null}
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

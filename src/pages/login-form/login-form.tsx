import { FC } from "react";
import { Button, Container } from "../../components";
import { Form } from "./components/form";

export const LoginForm: FC = () => {
  return (
    <Container button={<Button>LOGIN</Button>}>
      <Form />
    </Container>
  );
};

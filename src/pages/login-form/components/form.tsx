import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components";
import { setFormData } from "../../../core/utils/local-storage";
import { ILoginFormData } from "../types";

export const Form: FC = () => {
  const { register, handleSubmit } = useForm<ILoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: ILoginFormData) => {
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>LOGIN</h1>

      <p>Email</p>
      <input {...register("email")} name="email" id="email" type="email" />

      <p>Password</p>
      <input
        {...register("password")}
        name="password"
        id="password"
        type="password"
      />

      <br />

      <Button color="#F2A74B" width={50} height={40}>
        SUBMIT
      </Button>
    </form>
  );
};

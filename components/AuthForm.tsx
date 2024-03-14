"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/inputs/input";
type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant == "LOGIN") {
      setVariant("REGISTER");
      return;
    }

    setVariant("LOGIN");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant == "REGISTER") {
      // axios register
    }

    if (variant == "LOGIN") {
      // nextauth sign in
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // nextauth social sign in
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-6">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" register={register} id="email" errors={errors} />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

export default function Page() {
  // hook form and router:
  const {
      register,
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<IssueForm>({
      resolver: zodResolver(createIssueSchema),
    }),
    router = useRouter(),
    [error, setError] = useState(""),
    [isSubmitting, setSubmitting] = useState(false);
  return (
    /*
    TextField.Root supports from {...register("title")}
    SimpleMDE doesn't support from {...register("description")} - use Controller
     */
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red">
          <Callout.Icon>
            <BsExclamationTriangle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="*:my-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmitting(true);
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setSubmitting(false);
            setError("An unexpected error occurred!");
          }
        })}
      >
        <TextField.Root placeholder="title" {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          submit new issue {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
}

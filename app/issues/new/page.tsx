"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, Callout, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsExclamationTriangle } from "react-icons/bs";

interface IssueForm {
  title: string;
  description: string;
}

export default function Page() {
  // hook form and router:
  const { register, control, handleSubmit } = useForm<IssueForm>(),
    router = useRouter(),
    [error, setError] = useState("");
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
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occurred!");
          }
        })}
      >
        <TextField.Root placeholder="title" {...register("title")} />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="description" {...field} />
          )}
        />
        <Button>submit new issue</Button>
      </form>
    </div>
  );
}

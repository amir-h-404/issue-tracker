"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

export default function Page() {
  // hook form and router:
  const { register, control, handleSubmit } = useForm<IssueForm>(),
    router = useRouter();
  return (
    /*
    TextField.Root supports from {...register("title")}
    SimpleMDE doesn't support from {...register("description")} - use Controller
     */
    <form
      className="max-w-xl *:my-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
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
  );
}

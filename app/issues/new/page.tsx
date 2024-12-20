"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from "@radix-ui/themes";

export default function Page() {
  return (
    <div className="max-w-xl *:my-3">
      <TextField.Root placeholder="title" />
      <SimpleMDE placeholder="description" />
      <Button>submit new issue</Button>
    </div>
  );
}

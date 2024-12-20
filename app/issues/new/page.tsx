import { Button, TextArea, TextField } from "@radix-ui/themes";

export default function Page() {
  return (
    <div className="max-w-xl *:my-3">
      <TextField.Root placeholder="title" />
      <TextArea placeholder="description" />
      <Button>submit new issue</Button>
    </div>
  );
}

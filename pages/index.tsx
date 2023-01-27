import { CommandBlockWithTitle, Container } from "../components";
import { supabase } from "../lib/supabaseClient";
import { useEffect } from "react";
import useSubmitVisitor from "../hooks/useSubmitVisitor";

export default function IndexPage() {
  useSubmitVisitor();
  return (
    <Container
      title="Collection of Deno Scripts"
      description="Collection of Deno Scripts"
    >
      <article className="mt-10">
        <h2 id="1">Add Tailwind CSS to Next.js project</h2>
        <CommandBlockWithTitle
          label="In your project folder run:"
          command="deno run --allow-write --allow-read --allow-run"
          filePath="/add-tailwind-to-next.ts"
          info="By default it uses pnpm. If you don't have pnpm, it will use npm. You can force it by adding --npm/--yarn after the module name."
        />
      </article>
    </Container>
  );
}

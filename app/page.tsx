import { Button } from "@/components/ui/button";
import { Construction, Github, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen place-content-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <Construction size={32} />
        <h1 className=" text-3xl font-bold">Coming soon...</h1>
        <div className="flex gap-2">
          <Button variant="secondary" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/vctrhugoop" target="_blank">
              <LinkedinIcon />
            </Link>
          </Button>
          <Button variant="secondary" size="icon" asChild>
            <Link href="https://github.com/vctrhugoop" target="_blank">
              <Github />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

import { ShellSection } from "@/components/ui/shell";
import Link from "next/link";

export function ContactMe() {
  return (
    <ShellSection index={6} title="Connect">
      <div className="prose prose-zinc dark:prose-invert text-[15px]">
        <p>
          If you're looking to connect for a project, feel free to reach out via{" "}
          <CustomLink
            href={`mailto:noelrohi59@gmail.com?subject=${encodeURIComponent("Hi, Noel!")}`}
          >
            Email
          </CustomLink>
          . Or just ping me on{" "}
          <CustomLink href="https://discordapp.com/users/666483486735073312">Discord</CustomLink>.
          You can also follow me on{" "}
          <CustomLink href="https://git.new/noelrohi?ref=noelrohi.com">Github</CustomLink> and{" "}
          <CustomLink href="https://dub.sh/noelrohi?ref=noelrohi.com">X</CustomLink> if you find my
          work interesting.
        </p>
      </div>
    </ShellSection>
  );
}

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

function CustomLink({ href, children }: CustomLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="prose prose-zinc dark:prose-invert border-neutral-700 border-b border-dashed pb-[1.4px] text-[15px] no-underline underline-offset-4 hover:border-solid "
    >
      {children}
    </Link>
  );
}

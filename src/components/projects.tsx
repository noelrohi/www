import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { me, siteConfig } from "@/config/site";
import { getGithubRepoData } from "@/lib/api";
import { Repo } from "@/types";

import { languageColor } from "@/config/gh";
import Heading from "./heading";
import { Icons } from "./icons";
import { Badge } from "./ui/badge";
import { getLanguageColor } from "@/lib/utils";

export const Projects = async () => {
  const data = await getGithubRepoData();

  return (
    <>
      <section>
        <Heading>
          <Link href={siteConfig.links.github}>Projects</Link>
        </Heading>

        {data && (
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 ">
            {data.map((d, idx) => (
              <ProjectCard key={idx} {...d} />
            ))}
          </div>
        )}
      </section>
      <Link
        href={`https://github.com/${me.tag}?tab=repositories`}
        className="mt-1 underline"
      >
        See more ...
      </Link>
    </>
  );
};

function ProjectCard({
  description,
  name: title,
  language,
  stargazers_count: stars,
  html_url: link,
  homepage: website,
  forks_count: forks,
  topics,
}: // languageColor,
Repo) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link
            href={website || link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between">
              <p>{title}</p>
              <Icons.external className="h-4 w-4 opacity-40" />
            </div>
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 flex h-10 items-center">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="min-h-[80px]">
        {topics.map((topic, idx) => (
          <Badge variant={"secondary"} key={idx}>
            {topic}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between  text-sm text-muted-foreground">
        <div className="flex items-center">
          <span
            className="mr-2 h-4 w-4 rounded-full"
            style={{ backgroundColor: getLanguageColor(language) }}
          ></span>
          {language}
        </div>
        <div className="flex justify-end gap-4">
          <span className="flex items-center space-x-2">
            <Icons.star className="h-4 w-4" />
            <p>{stars}</p>
          </span>
          <span className="flex items-center space-x-2">
            <Icons.fork />
            <p>{forks}</p>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

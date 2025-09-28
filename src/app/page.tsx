import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

// Generic function to chunk an array into smaller arrays.
// <T> allows this to work with any array type (e.g., array of projects).
// Input is 'readonly T[]' to handle immutable arrays safely.
// Returns an array of arrays (T[][]), which are mutable.
function chunkArray<T>(array: readonly T[], chunkSize: number): T[][] {
  // Initialize an empty array to hold the chunks.
  const result: T[][] = [];

  // Loop through the input array in steps of chunkSize.
  for (let i = 0; i < array.length; i += chunkSize) {
    // Slice a chunk from the array (slice() returns a mutable copy) and push it to the result.
    result.push(array.slice(i, i + chunkSize));
  }

  // Return the array of chunks.
  return result;
}

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
              {RESUME_DATA.timezone && (
                <>
                  <span className="mx-1">·</span>
                  <a
                    className="hover:underline"
                    href="https://www.timeanddate.com/time/zones/pkt"
                    target="_blank"
                  >
                    {RESUME_DATA.timezone}
                  </a>
                </>
              )}

            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* <Avatar className="size-28"> */}
          {/* <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} /> */}
          {/* <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback> */}
          {/* </Avatar> */}
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Top Achievements</h2>
          <ul className="list-disc pl-6 space-y-1 text-pretty font-mono text-xs text-muted-foreground print:text-[10px]">
            {RESUME_DATA.achievements.map((achievement: { text: string; link?: string }, index) => (
              <li key={index}>
                {achievement.link ? (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary"
                  >
                    {achievement.text}
                  </a>
                ) : (
                  achievement.text
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Technical Skills</h2>
          <ul className="pl-4 space-y-2 text-pretty font-mono text-xs text-muted-foreground print:text-[10px]">
            {RESUME_DATA.skills.map((skillCategory, idx) => (
              <li key={idx}>
                <span className="font-semibold">{skillCategory.category}:</span>{" "}
                {skillCategory.items.join(", ")}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-xs leading-none print:text-[10px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs print:text-[10px]">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          {chunkArray(RESUME_DATA.projects, 3).map((projectRow, rowIdx) => (
            <div
              key={rowIdx}
              className="flex gap-3 mb-3 print:break-inside-avoid"
            >
              {projectRow.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              ))}
            </div>
          ))}
        </Section>
        {/* Education section is now here, after Projects */}
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>
      </section>


      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}


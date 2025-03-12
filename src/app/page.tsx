import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import Navbar from "~/components/Navbar"
import ExperienceCard from "~/components/ExperienceCard"
import Link from "next/link"
import Image from "next/image"


const experiences = [
  {
    title: "Product Engineer",
    company: "Eduvision ID",
    positionType: "Part-time",
    duration: "2024 Dec - Present",
    description: "Designed, developed, and maintained a UTBK/SNBT tryout web app with IRT-based grading, optimizing performance to support over 1,000 concurrent users. Built and managed the project independently.",
    skills: ["TypeScript", "Next.js", "Python", "Postgres"],
  },
  {
    "title": "Backend Developer",
    "company": "PT Leholeh",
    "positionType": "Internship",
    "duration": "Oct - Nov 2024",
    "description": "Developed and optimized backend services for enterprise applications.Improved database performance, and ensured system scalability.",
    "skills": ["PHP", "Laravel", "MySQL"]
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-navy selection:bg-coral/10">
      <Navbar />
      <main className="container max-w-5xl mx-auto px-4 py-8 pt-24">
        <section id="home" className="mb-12 scroll-mt-24 ">
          <h2 className="text-2xl font-semibold text-navy">Hi, I&apos;m <span className="text-coral">Usamah Hafizh</span></h2>
          <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            I build <span className="text-coral"> full-stack</span> product
          </h1>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-medium">Developer</span>,
              <span className="font-medium"> Engineer</span>,
              <span className="font-medium"> Student</span> that loves to build, read, and code.
            </p>
            <p className="text-lg">
              A student of <span className="text-coral font-medium">Electrical Engineering</span> with a focus on <span className="font-medium">Telecommunication</span> at <Link href="https://www.ui.ac.id/" className="text-coral font-medium hover:underline">@Universitas Indonesia</Link>,
              I maintain a UTBK/SNBT <Link href="https://www.eduvision.web.id/" className="font-semibold hover:underline">tryout platform</Link> with <span className="font-medium">IRT-based</span> grading, optimizing performance for over <span className="font-semibold"> 1,000 </span> users.
            </p>

            <p className="text-lg">
              When I&apos;m not coding, you can find me <span className="font-medium">contributing</span> to open-source projects,
              <span className="font-medium">writing</span> technical articles,
              or <span className="font-medium">exploring</span> the latest developments in the <span className="font-medium text-coral">engineering</span>  field.
            </p>
          </div>
        </section>

        {/* Contact Section - Moved here */}
        <section id="contact" className="mb-24 scroll-mt-24">
          <div className="p-8 rounded-md border-3 border-navy bg-coral/10 shadow-brutal-navy">
            <div className="flex flex-col items-center text-center gap-6">

              <Link href="mailto:hakaro375@gmail.com">
                <Button className="rounded-md px-8 py-6 text-lg bg-coral hover:bg-coral/90 text-white border-3 border-navy shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </Link>

              <div className="flex gap-4">
                <Link href="https://github.com/Mahusaa">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-md border-3 border-navy text-navy hover:bg-navy hover:text-white shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/usamah-hafizh/">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-md border-3 border-navy text-navy hover:bg-navy hover:text-white shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md border-3 border-navy text-navy hover:bg-navy hover:text-white shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
                >
                  Me
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 inline-block border-b-4 border-navy pb-2">Work Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 inline-block border-b-4 border-navy pb-2">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 group">
            <div className="rounded-md border-3 border-navy bg-cream shadow-brutal-navy overflow-hidden transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="aspect-video bg-gradient-to-br from-coral/90 to-coral/60 flex items-center justify-center border-b-[3px] border-navy">
                <Image
                  src="/eduv.png"
                  alt="Eduvision"
                  width={1000}
                  height={500}
                  className="w-full h-full object-top"
                />
              </div>
              <div className="p-6">
                <Link href="https://eduvision.web.id">
                  <h3 className="text-xl font-bold flex items-center gap-1">
                    <span className="hover:underline">Eduvision Tryout</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                </Link>
                <p className="mt-2 text-navy">
                  A UTBK/SNBT tryout web app with IRT-based grading, support over 1,000 concurrent users
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    Postgres
                  </Badge>
                </div>
              </div>
            </div>

            <div className="rounded-md border-3 border-navy bg-cream shadow-brutal-navy overflow-hidden transform hover:-translate-y-1 hover:translate-x-1 transition-transform group">
              <div className="aspect-video bg-gradient-to-br from-coral to-coral/70 flex items-center justify-center border-b-[3px] border-navy relative">
                <Image
                  src="/pasrak.png"
                  alt="Pasar Rakyat"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              </div>
              <div className="p-6">
                <Link href="https://client-pasar-rakyat.vercel.app/">
                  <h3 className="text-xl font-bold flex items-center gap-1">
                    <span className="hover:underline">Realtime Cashier and Client App</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                </Link>

                <p className="mt-2 text-navy">
                  A real-time cashier and client application enabling seamless transactions with live updates that  ensures accurate payment and stock synchronization.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    Firebase
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 inline-block border-b-4 border-navy pb-2">Skills & Expertise</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">
                  <svg viewBox="0 0 128 128">
                    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
                  </svg>
                </div>
                <h3 className="font-bold">TypeScript/JS</h3>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">

                  <svg viewBox="0 0 128 128">
                    <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                  </svg>

                </div>
                <h3 className="font-bold">React/Next.js</h3>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">



                  <svg viewBox="0 0 128 128">
                    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"></path>
                  </svg>




                </div>
                <h3 className="font-bold">Tailwind</h3>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">


                  <svg viewBox="0 0 128 128">
                    <path fill="#FFD845" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
                  </svg>
                </div>
                <h3 className="font-bold">Python</h3>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">

                  <svg viewBox="0 0 128 128">
                    <g fill="#00acd7" fillRule="evenodd"><path d="M11.156 54.829c-.243 0-.303-.122-.182-.303l1.273-1.637c.12-.182.424-.303.666-.303H34.55c.243 0 .303.182.182.364l-1.03 1.576c-.121.181-.424.363-.606.363zM2.004 60.404c-.242 0-.303-.12-.182-.303l1.273-1.636c.121-.182.424-.303.667-.303h27.636c.242 0 .364.182.303.364l-.485 1.454c-.06.243-.303.364-.545.364zM16.67 65.98c-.242 0-.302-.182-.181-.364l.848-1.515c.122-.182.364-.363.607-.363h12.12c.243 0 .364.181.364.424l-.12 1.454c0 .243-.243.425-.425.425zM79.58 53.738c-3.819.97-6.425 1.697-10.182 2.666-.91.243-.97.303-1.758-.606-.909-1.03-1.576-1.697-2.848-2.303-3.819-1.878-7.516-1.333-10.97.91-4.121 2.666-6.242 6.605-6.182 11.514.06 4.849 3.394 8.849 8.182 9.516 4.121.545 7.576-.91 10.303-4 .545-.667 1.03-1.394 1.636-2.243H56.064c-1.272 0-1.575-.788-1.151-1.818.788-1.879 2.242-5.03 3.09-6.606.183-.364.607-.97 1.516-.97h22.06c-.12 1.637-.12 3.273-.363 4.91-.667 4.363-2.303 8.363-4.97 11.878-4.364 5.758-10.06 9.333-17.273 10.303-5.939.788-11.454-.364-16.302-4-4.485-3.394-7.03-7.879-7.697-13.454-.788-6.606 1.151-12.546 5.151-17.758 4.303-5.636 10-9.212 16.97-10.485 5.697-1.03 11.151-.363 16.06 2.97 3.212 2.121 5.515 5.03 7.03 8.545.364.546.122.849-.606 1.03z"></path><path d="M99.64 87.253c-5.515-.122-10.546-1.697-14.788-5.334-3.576-3.09-5.818-7.03-6.545-11.697-1.091-6.848.787-12.909 4.909-18.302 4.424-5.819 9.757-8.849 16.97-10.122 6.181-1.09 12-.484 17.272 3.091 4.788 3.273 7.757 7.697 8.545 13.515 1.03 8.182-1.333 14.849-6.97 20.546-4 4.06-8.909 6.606-14.545 7.757-1.636.303-3.273.364-4.848.546zm14.424-24.485c-.06-.788-.06-1.394-.182-2-1.09-6-6.606-9.394-12.363-8.06-5.637 1.272-9.273 4.848-10.606 10.545-1.091 4.727 1.212 9.515 5.575 11.454 3.334 1.455 6.667 1.273 9.879-.363 4.788-2.485 7.394-6.364 7.697-11.576z" fillRule="nonzero"></path></g>
                  </svg>


                </div>
                <h3 className="font-bold">Golang</h3>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">

                  <svg viewBox="0 0 128 128">
                    <path fill="#03599C" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path>
                  </svg>

                </div>
                <h3 className="font-bold">C</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t-3 border-navy mt-16 text-center">
          <p className="text-navy/70">© 2025 Usamah Hafizh. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}



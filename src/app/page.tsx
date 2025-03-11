import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import Navbar from "~/components/Navbar"
import ExperienceCard from "~/components/ExperienceCard"
import Link from "next/link"
import Footer from "~/components/Footer"


const experiences = [
  {
    title: "Product Engineer",
    company: "Eduvision ID",
    positionType: "Part-time",
    duration: "2024 Des - Present",
    description: "Developed and maintained a UTBK/SNBT tryout web app with IRT-based grading, optimizing performance to handle over 1,000 users efficiently.",
    skills: ["Typescript", "Next.js", "Python"],
  },
  {
    title: "Web Developer",
    company: "PT Leholeh",
    positionType: "Intern",
    duration: "2024 Oct - 2024 Nov",
    description: "Developed and maintained web applications for enterprise clients. Implemented responsive designs and optimized performance.",
    skills: ["PHP", "Laravel", "React.js"],
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
              I maintain a UTBK/SNBT tryout platform with IRT-based grading, optimizing performance for over 1,000 users.
            </p>

            <p className="text-lg">
              When I&apos;m not coding, you can find me <span className="text-coral font-medium">contributing</span> to open-source projects,
              <span className="text-coral font-medium">writing</span> technical articles,
              or <span className="text-coral font-medium">exploring</span> the latest developments in the <span className="font-medium">engineering field</span>.
            </p>
          </div>
        </section>

        {/* Contact Section - Moved here */}
        <section id="contact" className="mb-24 scroll-mt-24">
          <div className="p-8 rounded-md border-3 border-navy bg-coral/10 shadow-brutal-navy">
            <div className="flex flex-col items-center text-center gap-6">
              <Button className="rounded-md px-8 py-6 text-lg bg-coral hover:bg-coral/90 text-white border-3 border-navy shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md border-3 border-navy text-navy hover:bg-navy hover:text-white shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md border-3 border-navy text-navy hover:bg-navy hover:text-white shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md border-3 border-navy text-navy hover:bg-navy hover:text-white shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
                >
                  <Mail className="h-5 w-5" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-md border-3 border-navy bg-cream shadow-brutal-navy overflow-hidden transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="aspect-video bg-navy flex items-center justify-center border-b-3 border-navy">
                <span className="text-white text-xl font-medium">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">E-commerce Platform</h3>
                <p className="mt-2 text-navy/70">
                  A full-stack e-commerce solution with payment processing and inventory management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    Stripe
                  </Badge>
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    MongoDB
                  </Badge>
                </div>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="rounded-md border-3 border-navy text-navy hover:bg-navy hover:text-white shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-md border-3 border-navy bg-cream shadow-brutal-navy overflow-hidden transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="aspect-video bg-gradient-to-br from-coral to-coral/70 flex items-center justify-center border-b-3 border-navy">
                <span className="text-navy text-xl font-medium">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">AI Content Generator</h3>
                <p className="mt-2 text-navy/70">
                  An application that uses AI to generate marketing content for businesses.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    React
                  </Badge>
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    OpenAI API
                  </Badge>
                  <Badge variant="outline" className="bg-cream border-3 border-navy rounded-md shadow-brutal-sm-navy">
                    Firebase
                  </Badge>
                </div>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="rounded-md border-3 border-navy text-navy hover:bg-navy hover:text-white shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
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
                  <span className="font-bold">JS</span>
                </div>
                <h3 className="font-bold">JavaScript</h3>
                <p className="text-sm text-navy/70">Advanced</p>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">
                  <span className="font-bold">TS</span>
                </div>
                <h3 className="font-bold">TypeScript</h3>
                <p className="text-sm text-navy/70">Advanced</p>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">
                  <span className="font-bold">R</span>
                </div>
                <h3 className="font-bold">React</h3>
                <p className="text-sm text-navy/70">Advanced</p>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">
                  <span className="font-bold">N</span>
                </div>
                <h3 className="font-bold">Node.js</h3>
                <p className="text-sm text-navy/70">Advanced</p>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">
                  <svg viewBox="0 0 128 128">
                    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
                  </svg>

                </div>
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-navy/70">Advanced</p>
              </div>
            </div>

            <div className="p-6 rounded-md border-3 border-navy bg-cream shadow-brutal-navy transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-md bg-navy flex items-center justify-center text-white border-3 border-navy">
                  <span className="font-bold">TW</span>
                </div>
                <h3 className="font-bold">Tailwind</h3>
                <p className="text-sm text-navy/70">Advanced</p>
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



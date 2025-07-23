"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Users, Mail, Phone, MapPin, Linkedin, Download, Headphones, Palette } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const skills = [
    "Stakeholder Engagement",
    "Cross-team Coordination",
    "External Liaison",
    "Workflow Design",
    "Event Planning",
    "Staff Training",
    "Google Workspace",
    "Microsoft Office",
    "Canva",
    "Logic Pro",
    "Music Production",
    "Bilingual Communication",
  ]

  const experiences = [
    {
      title: "Personal Assistant to the Headmaster & School Officer",
      company: "Heathfield International School – Bangkok",
      period: "Aug 2023 - Present",
      description:
        "Built comprehensive Google Workspace systems from scratch and managed international staff procedures while coordinating school-wide events and communications.",
      achievements: [
        "Built Google Workspace systems replacing manual paperwork, reducing processing time and errors",
        "Managed admissions, staff visa procedures, and onboarding for international hires",
        "Liaised with Thai government agencies (Immigration, Labour, Teachers' Council)",
        "Used Classe365 and Sign In Central Record for staff/student management",
        "Coordinated school-wide events and workshops for parents",
        "Trained new staff in administrative systems and best practices",
      ],
    },
    {
      title: "Project Coordinator",
      company: "STUDIO11206 – Bangkok",
      period: "Dec 2022 – Jul 2023",
      description:
        "Led stakeholder communication and coordination for creative events, managing complex logistics and external partnerships.",
      achievements: [
        "Led 'Yaowalen' at Bangkok Design Week 2023, attended by 16,000+ people",
        "Managed project timeline, venue logistics, and delivery under tight deadlines",
        "Coordinated with external parties (costumes, props, media, local residents)",
        "Prepared detailed reports and proposals for pre- and post-event evaluation",
      ],
    },
    {
      title: "Music Producer & Playlist Editor",
      company: "Rightsify Asia – Bangkok",
      period: "Oct 2021 – Nov 2022",
      description:
        "Produced instrumental tracks and curated commercial playlists while managing digital deliveries and branded visual content.",
      achievements: [
        "Produced 250+ instrumental tracks with consistent quality",
        "Curated 600+ playlists for commercial use across multiple genres",
        "Designed branded visuals for playlists using Canva",
        "Coordinated digital deliveries and maintained client relationships",
      ],
    },
  ]

  const projects = [
    {
      title: "Yaowalen - Bangkok Design Week 2023",
      category: "Event Coordination",
      description: "Led stakeholder communication for major cultural event with 16,000+ attendees",
      icon: <Calendar className="w-5 h-5" />,
      metrics: "16,000+ attendees",
    },
    {
      title: "Visual Communication Materials",
      category: "Design & Communication",
      description:
        "Created comprehensive bilingual visual materials for school events, staff training, and parent communications",
      icon: <Palette className="w-5 h-5" />,
      metrics: "50+ materials, Bilingual",
    },
    {
      title: "Commercial Music Production",
      category: "Music Production",
      description: "Produced instrumental tracks and curated playlists for commercial use",
      icon: <Headphones className="w-5 h-5" />,
      metrics: "250+ tracks, 600+ playlists",
    },
    {
      title: "International Staff Coordination",
      category: "Administrative Management",
      description: "Managed visa procedures and onboarding across multiple government agencies",
      icon: <Users className="w-5 h-5" />,
      metrics: "100% compliance",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="font-light text-lg tracking-wide text-stone-900">Sasikarn S.</div>
            <div className="hidden md:flex items-center space-x-12">
              <button
                onClick={() => scrollToSection("about")}
                className="text-stone-600 hover:text-stone-900 transition-colors duration-300 font-light"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-stone-600 hover:text-stone-900 transition-colors duration-300 font-light"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-stone-600 hover:text-stone-900 transition-colors duration-300 font-light"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-stone-600 hover:text-stone-900 transition-colors duration-300 font-light"
              >
                Contact
              </button>
            </div>
            <Button variant="ghost" className="text-stone-600 hover:text-stone-900 hover:bg-transparent font-light">
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3 space-y-12">
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-7xl text-stone-900 leading-tight tracking-tight font-medium">
                  Sasikarn
                  <br />
                  <span className="text-amber-700">Sangsawangwattana</span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed font-light max-w-2xl">
                  Bilingual project coordinator specializing in stakeholder engagement, system implementation, and
                  creative event management in international environments.
                </p>
              </div>

              <div className="flex gap-6">
                <Button
                  size="lg"
                  className="bg-stone-900 text-stone-50 hover:bg-stone-800 font-light px-8 py-3"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-stone-600 hover:text-stone-900 hover:bg-transparent font-light px-8 py-3"
                  onClick={() => scrollToSection("projects")}
                >
                  View Work
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-4xl text-stone-900 mb-8 font-normal">About Me</h2>

              <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
                <p>
                  With expertise spanning system implementation, event coordination, and music production, I specialize
                  in streamlining workflows and delivering tailored solutions in fast-paced international environments.
                </p>
                <p>
                  As a bilingual Thai-English communicator, I excel at bridging cultural gaps and ensuring clear
                  communication in complex, multi-stakeholder projects. From coordinating major cultural events to
                  implementing digital systems that transform organizational efficiency.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl text-amber-700 mb-2 font-normal">850+</div>
                  <div className="text-sm text-stone-500 font-light">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-amber-700 mb-2 font-normal">16K+</div>
                  <div className="text-sm text-stone-500 font-light">Event Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-amber-700 mb-2 font-normal">3+</div>
                  <div className="text-sm text-stone-500 font-light">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Education */}
              <div>
                <h3 className="text-xl text-stone-900 mb-4 font-normal">Education</h3>
                <div className="space-y-2">
                  <p className="font-light text-stone-900">Bachelor of Fine and Applied Arts</p>
                  <p className="text-amber-700 font-light">First Class Honours</p>
                  <p className="text-stone-600 font-light">Chulalongkorn University, 2020</p>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xl text-stone-900 mb-4 font-normal">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-light text-stone-900">Thai</span>
                    <span className="text-stone-600 font-light">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-light text-stone-900">English</span>
                    <span className="text-stone-600 font-light">Fluent</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl text-stone-900 mb-4 font-normal">Core Skills</h3>
                <div className="space-y-1">
                  {skills.slice(0, 8).map((skill) => (
                    <div key={skill} className="text-stone-600 font-light text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-stone-900 mb-16">Experience</h2>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l border-stone-200 pl-8 ml-4">
                <div className="relative">
                  <div className="absolute -left-10 w-2 h-2 bg-amber-700 rounded-full"></div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-stone-900">{exp.title}</h3>
                      <p className="text-amber-700 font-light">{exp.company}</p>
                      <p className="text-stone-500 font-light text-sm">{exp.period}</p>
                    </div>
                    <p className="text-stone-600 font-light leading-relaxed">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="text-stone-600 font-light text-sm leading-relaxed">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-stone-900 mb-16">Selected Work</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group space-y-4">
                <div className="flex items-center space-x-3 text-stone-400">
                  {project.icon}
                  <span className="text-sm font-light">{project.category}</span>
                </div>
                <h3 className="text-xl font-light text-stone-900 group-hover:text-amber-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">{project.description}</p>
                <p className="text-stone-400 font-light text-sm">{project.metrics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-stone-900 text-stone-100">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-light">Let's Work Together</h2>
          <p className="text-xl text-stone-300 font-light leading-relaxed">
            Ready to bring your next project to life? I'd love to discuss how my experience can contribute to your
            team's success.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <Mail className="w-6 h-6 text-amber-400 mx-auto" />
              <p className="font-light text-sm">sasikarn.amsk@gmail.com</p>
            </div>
            <div className="space-y-2">
              <Phone className="w-6 h-6 text-amber-400 mx-auto" />
              <p className="font-light text-sm">+66 80 558 4700</p>
            </div>
            <div className="space-y-2">
              <MapPin className="w-6 h-6 text-amber-400 mx-auto" />
              <p className="font-light text-sm">Bangkok, Thailand</p>
            </div>
          </div>

          <div className="flex justify-center space-x-8">
            <Button variant="ghost" className="text-stone-300 hover:text-stone-100 hover:bg-transparent font-light">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button className="bg-amber-700 text-stone-50 hover:bg-amber-600 font-light px-8">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-stone-950 text-stone-500 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="font-light text-sm">&copy; 2024 Sasikarn Sangsawangwattana</p>
        </div>
      </footer>
    </div>
  )
}

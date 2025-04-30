"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Code, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Swal from "sweetalert2"
import { title } from "process"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const handleDemo = () => {
    Swal.fire("Sorry, I'll deploy soon 😌")
  }
  const devProjects = [
    {
      title: "Modern-Portfolio-Design",
      description: "A modern portfolio design showcasing skills, projects, and contact information. And build with Nextjs, Tailwind CSS, and Framer Motion.",
      image: "/PortfilioImg.png",
      tags: ["NextJs", "TypeScript", "FrmaerMotion", "ShadCN", "TaiwindCSS"],
      github: "https://github.com/Avinash415/modernmyportfolio.git",
      demo: "https://modernmyportfolio.vercel.app/",
      featured: true,
      deploy: true,
    },
    {
      title: "Full Stack Job Portal Web Application",
      description:
        "The Full stack Job Portal Web Application is a MERN stack project that enables users to publish new job and job seeker search multiple Jobs with proper guidance.",
      image: "/Gamified.png",
      tags: ["Node Js", "React", "Express", "MangoDB", "TailwindCSS"],
      github: "https://github.com/Avinash415/CareerVista.git",
      demo: "#",
      featured: true,
      deploy: false,
    },
    {
      title: "Clinic Management Frontend Web Application",
      description: "Simple Clinic Management Frontend Web Application for show case the basic skills and deep understanding about HTML, CSS and javaScript.",
      image: "/Any2Any.png",
      tags: ["JavaScript", "HTML", "CSS",],
      github: "https://github.com/Avinash415/Clinic-Management-System.git",
      demo: "https://clinic-management-system-drab.vercel.app/",
      deploy: true,
    },
  ]

  const compProjects = [
    // {
    //   title: "Algorithm Visualizer",
    //   description:
    //     "An interactive tool to visualize various algorithms including sorting, pathfinding, and graph algorithms.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["JavaScript", "React", "Data Structures", "Algorithms", "Canvas API"],
    //   github: "#",
    //   demo: "#",
    // },
    {
      title: "Competitive Programming Solutions",
      description:
        "A collection of solutions to competitive programming problems from platforms like LeetCode, GFG, CodingNinjas, and HackerRank.",
      image: "/DSA.png",
      tags: ["Java", "Python", "C/C++", "Algorithms", "Data Structures", "Problem Solving"],
      github: "https://github.com/Avinash415/DS_Problems.git",
      demo: "#",
      featured: true,
    },
    // {
    //   title: "DSA Playground",
    //   description:
    //     "An interactive platform to practice and visualize data structures and algorithms with real-time feedback.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["Java", "JavaScript", "DSA", "Educational", "Interactive"],
    //   github: "#",
    //   demo: "#",
    // },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects, demonstrating my skills, problem-solving abilities, and passion for
            development.
          </p>
        </div>

        <Tabs defaultValue="development" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="development">
                <span className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Development
                </span>
              </TabsTrigger>
              <TabsTrigger value="competitive">
                <span className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  Competitive
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="development">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {devProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />

                      {hoveredProject === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/70 flex items-center justify-center"
                        >
                          <div className="flex gap-4">
                            <Button
                              size="sm"
                              variant="secondary"
                              asChild
                              className="hover:scale-105 transition-transform"
                            >
                              <Link href={project.github} target="_blank">
                                <span className="flex items-center">
                                  <Github className="mr-2 h-4 w-4" />
                                  Code
                                </span>
                              </Link>
                            </Button>
                            {/* <Button size="sm" className="hover:scale-105 transition-transform" onClick={handleDemo}>
                              <span className="flex items-center">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                              </span>
                            </Button> */}
                            {project.deploy ? (
                              <Button size="sm" className="hover:scale-105 transition-transform">
                                <Link href={project.demo} target="_blank">
                                  <span className="flex items-center">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                  </span>
                                </Link>
                              </Button>
                            ) : (
                              <Button size="sm" className="hover:scale-105 transition-transform" onClick={handleDemo}>
                                <span className="flex items-center">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Demo
                                </span>
                              </Button>
                            )
                            }
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardFooter>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="competitive">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {compProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredProject(index + 100)} // Offset to avoid conflict with dev projects
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />

                      {hoveredProject === index + 100 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/70 flex items-center justify-center"
                        >
                          <div className="flex gap-4">
                            <Button
                              size="sm"
                              variant="secondary"
                              asChild
                              className="hover:scale-105 transition-transform"
                            >
                              <Link href={project.github} target="_blank">
                                <span className="flex items-center">
                                  <Github className="mr-2 h-4 w-4" />
                                  Code
                                </span>
                              </Link>
                            </Button>
                            <Button size="sm" asChild className="hover:scale-105 transition-transform">
                              <Link href={project.demo} target="_blank">
                                <span className="flex items-center">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Demo
                                </span>
                              </Link>
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>

                    <CardFooter>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/projects">
              <span>View All Projects</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


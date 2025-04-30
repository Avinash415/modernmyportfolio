"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Code, Trophy, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import Swal from "sweetalert2"

export default function ProjectsPageContent() {
  const devProjects = [
    {
      title: "Deep Fake Detection Wep Application",
      description:
        "The Deep Fake Detection System is a MERN-stack project that enables users to upload video and check Fake or Real.",
      image: "/LibraryMang.png",
      tags: ["ReactJs", "TailwindCSS", "Node.js", "MongoDB", "ExpressJS", "Tenserflow"],
      github: "https://github.com/Avinash415/Deepfake-face-detect.git",
      demo: "#",
      featured: true,
      deploy: false,
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
      featured: false,
      deploy: true,
    },
   
    {
      title: "Modern-Portfolio-Design",
      description: "A modern portfolio design showcasing skills, projects, and contact information. And build with Nextjs, Tailwind CSS, and Framer Motion.",
      image: "/PortfilioImg.png",
      tags: ["NextJs", "TypeScript", "FrmaerMotion", "ShadCN", "TaiwindCSS"],
      github: "#",
      demo: "#",
      featured: true,
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
    //   featured: true,
    //   deploy: false,
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
      deploy: false,
    },
  ]

  // Handle the demo Alert : to show alert
  const handleDemo = () => {
    Swal.fire("Sorry, I'll deploy soon 😌")
  }
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filterProjects = (projects: any[], term: string) => {
    if (!term) return projects

    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(term.toLowerCase()) ||
        project.description.toLowerCase().includes(term.toLowerCase()) ||
        project.tags.some((tag: string) => tag.toLowerCase().includes(term.toLowerCase())),
    )
  }

  const filteredDevProjects = filterProjects(devProjects, searchTerm)
  const filteredCompProjects = filterProjects(compProjects, searchTerm)

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

  return (
    <div className="container px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my technical projects, demonstrating my skills, problem-solving abilities, and passion for
          development.
        </p>
      </motion.div>

      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects by name, description, or technology..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
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
          {filteredDevProjects.length > 0 ? (
            <>
              {filteredDevProjects.some((p) => p.featured) && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {filteredDevProjects
                      .filter((p) => p.featured)
                      .map((project, index) => (
                        <motion.div
                          key={`featured-${index}`}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
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
                  </div>
                </div>
              )}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredDevProjects
                  .filter((p) => !p.featured)
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredProject(index + 100)} // Offset to avoid conflict with featured projects
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
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No development projects found matching your search.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="competitive">
          {filteredCompProjects.length > 0 ? (
            <>
              {filteredCompProjects.some((p) => p.featured) && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {filteredCompProjects
                      .filter((p) => p.featured)
                      .map((project, index) => (
                        <motion.div
                          key={`featured-comp-${index}`}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          onMouseEnter={() => setHoveredProject(index + 200)}
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

                              {hoveredProject === index + 200 && (
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
                  </div>
                </div>
              )}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredCompProjects
                  .filter((p) => !p.featured)
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredProject(index + 300)}
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

                          {hoveredProject === index + 300 && (
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
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No competitive programming projects found matching your search.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}


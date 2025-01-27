'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}

const patMembers: TeamMember[] = [
  {
    name: "Prof. Dr. Avadhesh kuamr",
    role: "Vice-Chair UP Section/Pro Vice Chancellor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "john.doe@ieee.org"
  },
  {
    name: "Dr. Aanjey Mani Tripathi",
    role: "IEEE Counselor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "john.doe@ieee.org"
  },
];

const boardMembers: TeamMember[] = [
  
  {
    name: "Shubhranshu S. Dash",
    role: "Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "shubhranshudash@ieee.org"
  },
  {
    name: "Anurag Kumar Singh",
    role: "Vice Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "aunragkumarsingh@ieee.org"
  },
  {
    name: "Rashi Bajpai",
    role: "General Sceretary",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "rashibajpai@ieee.org"
  },
  {
    name: "Manas Saxena",
    role: "Tech Lead (Web Master)",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "manassaxena@ieee.org"
  },
  {
    name: "Siddartha Agrawal",
    role: "Treasurer in General",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John is a final year Computer Science student with a passion for AI and robotics.",
    email: "siddharthaagrawal07@ieee.org"
  },
  // Add 4 more board members here
];

const executiveCommittee: TeamMember[] = [
  {
    name: "Jane Smith",
    role: "Event Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jane is an Electronics major who loves to organize tech events and workshops.",
    email: "jane.smith@ieee.org"
  },
  // Add 20 more executive committee members here
];

const subCommunityA: TeamMember[] = [
  
  {
    name: "Gaurang Pant",
    role: "Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Bob is passionate about IoT and smart home technologies.",
    email: "gaurangpant22@ieee.org"
  },
  {
    name: "Anant Gangwar",
    role: "Vice chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Bob is passionate about IoT and smart home technologies.",
    email: "anantgangwar06@ieee.org"
  },
  {
    name: "Kshitij Bajpai",
    role: "Secretary",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Bob is passionate about IoT and smart home technologies.",
    email: "kshitijbajpai@ieee.org"
  },
  {
    name: "Mohammad Sahil",
    role: "Treasurer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Bob is passionate about IoT and smart home technologies.",
    email: "ms9811151061@gmail.com"
  },
  // Add 4 more members for Sub-Community A
];

const subCommunityB: TeamMember[] = [
  {
    name: "Shubham Pal",
    role: "Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Alice specializes in machine learning and leads the AI research group.",
    email: "shubham0568@ieee.org"
  },
  {
    name: "Adarsh Upadhyay",
    role: "Vice Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Alice specializes in machine learning and leads the AI research group.",
    email: "adarsh265@ieee.org"
  },
  {
    name: "Urvashi Rawat",
    role: "Secretary",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Alice specializes in machine learning and leads the AI research group.",
    email: "urvashirawat@ieee.org"
  },
  {
    name: "Ashish Kumar",
    role: "Web Master",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Alice specializes in machine learning and leads the AI research group.",
    email: "ashishbhardwaj@ieee.org"
  },
  {
    name: "Anant Chaubey",
    role: "Treasurer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Alice specializes in machine learning and leads the AI research group.",
    email: "anant92@ieee.org"
  },
  // Add 4 more members for Sub-Community B
];

const subCommunityC: TeamMember[] = [
  {
    name: "Monica Singh",
    role: "Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Carol leads the robotics team and organizes annual robotics competitions.",
    email: "mona_13@ieee.org"
  },
  {
    name: "Yashi Katiyar",
    role: "Vice Chairperson",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Carol leads the robotics team and organizes annual robotics competitions.",
    email: "yashikatiyar@ieee.org"
  },
  {
    name: "Tanisha Bhatnagar",
    role: "Secretary",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Carol leads the robotics team and organizes annual robotics competitions.",
    email: "tanishabhatnagar2703@ieee.org"
  },
  {
    name: "Anjali Yadav",
    role: "Treasurer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Carol leads the robotics team and organizes annual robotics competitions.",
    email: "anjaliyadav@ieee.org"
  },
  {
    name: "Arya Amoriya",
    role: "Outreach Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Carol leads the robotics team and organizes annual robotics competitions.",
    email: "aryaamoriya@ieee.org"
  },
  // Add 4 more members for Sub-Community C
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="bg-white bg-opacity-40 backdrop-blur-md rounded-xl shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-neumorphic">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-900">{member.name}</h3>
              <p className="text-blue-600 text-sm">{member.role}</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-neumorphic">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900">{member.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-neumorphic">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
            <p className="text-gray-700 mb-4">{member.bio}</p>
            <p className="text-blue-900">
              <strong>Contact:</strong> {member.email}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  )
}

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Team</h1>
        <Tabs defaultValue="board" className="w-auto mx-auto">
          <TabsList className="grid w-auto grid-cols-2 md:grid-cols-5 bg-blue-100 rounded-xl p-1 mb-8">
          <TabsTrigger value="PAT" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">PATRONS</TabsTrigger>
            <TabsTrigger value="board" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">Board</TabsTrigger>
            {/* <TabsTrigger value="executive" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">ExComm</TabsTrigger> */}
            <TabsTrigger value="subA" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">Computer Society</TabsTrigger>
            <TabsTrigger value="subB" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">Industry Applications Society</TabsTrigger>
            <TabsTrigger value="subC" className="data-[state=active]:bg-white data-[state=active]:text-blue-900">Women in Engineering</TabsTrigger>
          </TabsList>
          <TabsContent value="PAT">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">PATRONS</h2>
            <TeamGrid members={patMembers} />
          </TabsContent>
          <TabsContent value="board">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Board Team</h2>
            <TeamGrid members={boardMembers} />
          </TabsContent>
          <TabsContent value="executive">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Executive Committee</h2>
            <TeamGrid members={executiveCommittee} />
          </TabsContent>
          <TabsContent value="subA">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Computer Society</h2>
            <TeamGrid members={subCommunityA} />
          </TabsContent>
          <TabsContent value="subB">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Industry Applications Society</h2>
            <TeamGrid members={subCommunityB} />
          </TabsContent>
          <TabsContent value="subC">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Women in Engineering</h2>
            <TeamGrid members={subCommunityC} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}


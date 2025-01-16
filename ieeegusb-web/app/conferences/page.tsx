import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function ConferencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900 dark:text-blue-100">
          IEEE Conferences
        </h1>
        
        <section className="mb-16">
          <Card className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg rounded-xl p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-800 dark:text-blue-200">What are Research Conferences?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Research conferences are gatherings where professionals and academics come together to present their latest work, exchange ideas, and network with peers. These events typically include:
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300">
                <li>Paper presentations</li>
                <li>Keynote speeches</li>
                <li>Panel discussions</li>
                <li>Poster sessions</li>
                <li>Networking opportunities</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-blue-200">
            Flagship Conference
          </h2>
          <Card className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="ICCSAI 2025 Conference"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-8">
                <CardTitle className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  ICCSAI 2025
                </CardTitle>
                <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">
                  International Conference on Computer Science and Artificial Intelligence
                </Link>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Join us at Galgotias University for the premier conference on cutting-edge advancements in Computer Science and AI. ICCSAI 2025 brings together leading researchers, innovators, and industry experts.
                </p>
                <div className="mt-4">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-blue-200">
            Why Attend?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Present Your Research", description: "Share your work with a global audience and get valuable feedback." },
              { title: "Learn from Experts", description: "Attend talks and workshops led by renowned researchers and industry leaders." },
              { title: "Networking", description: "Connect with peers, potential collaborators, and future employers." }
            ].map((item, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-700 dark:text-blue-300">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


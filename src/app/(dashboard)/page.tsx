import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock testimonials data - this could be fetched from an API in a real scenario
const testimonials = [
  {
    id: 1,
    name: "Michael Jordan",
    role: "Sports Legend",
    comment: "This sports app revolutionized how I follow basketball stats. Incredible user experience!",
    avatar: "/basketball-logo.svg",
  },
  {
    id: 2,
    name: "Lisa Sherman",
    role: "Fantasy League Manager",
    comment: "The real-time updates and player insights give my fantasy team the competitive edge I needed.",
    avatar: "/basketball-logo.svg",
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    role: "Sports Analyst",
    comment: "As a professional analyst, I rely on accurate data. This platform delivers beyond expectations.",
    avatar: "/basketball-logo.svg",
  },
];

// Mock agenda items
const agendaItems = [
  {
    id: 1,
    time: "9:00 AM",
    title: "Live NBA Games",
    description: "Watch today's featured games with real-time commentary",
  },
  {
    id: 2,
    time: "12:30 PM",
    title: "Player Analysis",
    description: "In-depth statistics and performance trends for top players",
  },
  {
    id: 3,
    time: "4:00 PM",
    title: "League Updates",
    description: "Breaking news and important announcements from around the league",
  },
  {
    id: 4,
    time: "7:30 PM",
    title: "Expert Predictions",
    description: "Upcoming game forecasts from our sports analysts",
  },
];

export default async function Home() {
  return (
    <div className="p-4 min-h-full space-y-10">
      {/* Section 1: Topic - Our New Sports App */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white shadow-xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Next Generation Sports Analytics</h1>
            <p className="text-lg md:text-xl mb-6">
              Experience basketball like never before with our cutting-edge sports platform. 
              Real-time statistics, player insights, and game analytics designed for true fans.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Explore Features
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image 
                src="/github-copilot-main.jpeg" 
                alt="Sports App" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Agenda */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Today's Agenda</h2>
          <Button variant="ghost" className="text-blue-600">View Full Schedule</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agendaItems.map((item) => (
            <Card key={item.id} className="p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-800 p-3 rounded-md font-mono">
                  {item.time}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: What Clients Say */}
      <section className="max-w-6xl mx-auto bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 h-full flex flex-col">
              <div className="flex-1">
                <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Read More Testimonials
          </Button>
        </div>
      </section>
    </div>
  );
}

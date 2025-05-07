import { PlusCircle, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NoteCard } from "@/components/note-card"
import { Sidebar } from "@/components/sidebar"
import { ThoughtBubble } from "@/components/thought-bubble"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">My Digital Garden</h1>
            <div className="flex items-center gap-4">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search notes..." className="w-full bg-background pl-8" />
              </div>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Note
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ThoughtBubble position="top-left" className="absolute -left-4 -top-4 h-24 w-24 text-primary/10" />

            <NoteCard
              title="Building a Second Brain"
              excerpt="A methodology for saving and systematically reminding us of the ideas, inspirations, insights, and connections we've gained through our experience."
              tags={["productivity", "notes"]}
              date="2 days ago"
              color="bg-gradient-to-br from-pink-100 to-rose-100"
            />

            <NoteCard
              title="The Art of Slow Living"
              excerpt="Embracing a more intentional, mindful approach to daily life that emphasizes quality over quantity."
              tags={["lifestyle", "mindfulness"]}
              date="1 week ago"
              color="bg-gradient-to-br from-green-100 to-emerald-100"
            />

            <NoteCard
              title="Digital Minimalism"
              excerpt="A philosophy of technology use in which you focus your online time on a small number of carefully selected activities."
              tags={["technology", "minimalism"]}
              date="2 weeks ago"
              color="bg-gradient-to-br from-blue-100 to-sky-100"
            />

            <NoteCard
              title="The Power of Habit"
              excerpt="How habits work and how they can be changed. The key to exercising regularly, losing weight, raising exceptional children, and achieving success."
              tags={["psychology", "productivity"]}
              date="3 weeks ago"
              color="bg-gradient-to-br from-purple-100 to-violet-100"
            />

            <NoteCard
              title="Deep Work"
              excerpt="The ability to focus without distraction on a cognitively demanding task. A skill that allows you to quickly master complicated information."
              tags={["productivity", "focus"]}
              date="1 month ago"
              color="bg-gradient-to-br from-amber-100 to-yellow-100"
            />

            <NoteCard
              title="Atomic Habits"
              excerpt="Tiny changes, remarkable results. An easy and proven way to build good habits and break bad ones."
              tags={["habits", "self-improvement"]}
              date="1 month ago"
              color="bg-gradient-to-br from-teal-100 to-cyan-100"
            />

            <ThoughtBubble position="bottom-right" className="absolute -bottom-4 -right-4 h-32 w-32 text-primary/10" />
          </div>
        </div>
      </main>
    </div>
  )
}

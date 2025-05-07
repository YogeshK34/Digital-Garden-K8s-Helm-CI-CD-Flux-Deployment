import { CalendarDays } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface NoteCardProps {
  title: string
  excerpt: string
  tags: string[]
  date: string
  color?: string
}

export function NoteCard({ title, excerpt, tags, date, color = "bg-card" }: NoteCardProps) {
  return (
    <Link href="#" className="block transition-all hover:scale-[1.02]">
      <Card className={`h-full overflow-hidden ${color} border-none shadow-md`}>
        <CardHeader className="pb-2">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarDays className="mr-1 h-3 w-3" />
            {date}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

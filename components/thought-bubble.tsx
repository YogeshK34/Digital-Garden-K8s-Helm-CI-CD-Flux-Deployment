import { cn } from "@/lib/utils"

interface ThoughtBubbleProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  className?: string
}

export function ThoughtBubble({ position, className }: ThoughtBubbleProps) {
  return (
    <div className={cn("absolute opacity-30", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
        <circle cx="50" cy="50" r="30" />
        <circle cx="85" cy="40" r="10" />
        <circle cx="75" cy="75" r="15" />
        <circle cx="25" cy="75" r="15" />
        <circle cx="15" cy="40" r="10" />
      </svg>
    </div>
  )
}

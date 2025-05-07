"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Calendar, FolderTree, Hash, Home, Menu, PenSquare, Settings, Star, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Sidebar() {
  const [open, setOpen] = useState(false)

  const sidebarContent = (
    <>
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-5 w-5 text-primary" />
          <span>Digital Garden</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="grid gap-1">
          <Button variant="ghost" className="justify-start gap-2" asChild>
            <Link href="#">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2" asChild>
            <Link href="#">
              <PenSquare className="h-4 w-4" />
              All Notes
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2" asChild>
            <Link href="#">
              <Star className="h-4 w-4" />
              Favorites
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2" asChild>
            <Link href="#">
              <Calendar className="h-4 w-4" />
              Daily Notes
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2" asChild>
            <Link href="#">
              <Hash className="h-4 w-4" />
              Tags
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start gap-2" asChild>
            <Link href="#">
              <FolderTree className="h-4 w-4" />
              Folders
            </Link>
          </Button>
        </nav>
        <div className="mt-4 space-y-2 px-2">
          <div className="text-xs font-medium text-muted-foreground">Tags</div>
          <div className="grid grid-cols-2 gap-1 text-xs">
            <Button variant="outline" size="sm" className="h-7 justify-start">
              #productivity
            </Button>
            <Button variant="outline" size="sm" className="h-7 justify-start">
              #ideas
            </Button>
            <Button variant="outline" size="sm" className="h-7 justify-start">
              #books
            </Button>
            <Button variant="outline" size="sm" className="h-7 justify-start">
              #projects
            </Button>
            <Button variant="outline" size="sm" className="h-7 justify-start">
              #mindfulness
            </Button>
            <Button variant="outline" size="sm" className="h-7 justify-start">
              #technology
            </Button>
          </div>
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start gap-2" asChild>
          <Link href="#">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </Button>
      </div>
    </>
  )

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r md:flex md:flex-col">{sidebarContent}</aside>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex w-64 flex-col p-0">
          <div className="flex items-center justify-between border-b p-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Digital Garden</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <ScrollArea className="flex-1 px-2 py-4">
            <nav className="grid gap-1">
              <Button variant="ghost" className="justify-start gap-2" asChild onClick={() => setOpen(false)}>
                <Link href="#">
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start gap-2" asChild onClick={() => setOpen(false)}>
                <Link href="#">
                  <PenSquare className="h-4 w-4" />
                  All Notes
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start gap-2" asChild onClick={() => setOpen(false)}>
                <Link href="#">
                  <Star className="h-4 w-4" />
                  Favorites
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start gap-2" asChild onClick={() => setOpen(false)}>
                <Link href="#">
                  <Calendar className="h-4 w-4" />
                  Daily Notes
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start gap-2" asChild onClick={() => setOpen(false)}>
                <Link href="#">
                  <Hash className="h-4 w-4" />
                  Tags
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start gap-2" asChild onClick={() => setOpen(false)}>
                <Link href="#">
                  <FolderTree className="h-4 w-4" />
                  Folders
                </Link>
              </Button>
            </nav>
          </ScrollArea>
          <div className="border-t p-4">
            <Button variant="ghost" className="w-full justify-start gap-2" asChild onClick={() => setOpen(false)}>
              <Link href="#">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

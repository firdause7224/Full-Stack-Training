'use client'

import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, FileText, CheckCircle, Lock, Circle, Clock } from 'lucide-react'
import { cn } from "@/lib/utils"

// Mock data for the curriculum
const modules = [
  {
    id: "module-1",
    title: "Module 1: Introduction to Full-Stack",
    description: "Get started with the basics of web development and set up your environment.",
    lessons: [
      { 
        id: "1-1", 
        title: "Welcome to the Course", 
        type: "video", 
        duration: "5 min", 
        status: "completed" 
      },
      { 
        id: "1-2", 
        title: "Setting Up Your Environment", 
        type: "article", 
        duration: "15 min", 
        status: "completed" 
      },
      { 
        id: "1-3", 
        title: "How the Web Works", 
        type: "video", 
        duration: "12 min", 
        status: "in-progress" 
      },
      { 
        id: "1-4", 
        title: "Your First HTML Page", 
        type: "code", 
        duration: "20 min", 
        status: "locked" 
      },
    ]
  },
  {
    id: "module-2",
    title: "Module 2: HTML & CSS Fundamentals",
    description: "Master the building blocks of the web.",
    lessons: [
      { 
        id: "2-1", 
        title: "HTML5 Semantic Structure", 
        type: "video", 
        duration: "15 min", 
        status: "locked" 
      },
      { 
        id: "2-2", 
        title: "CSS Box Model", 
        type: "video", 
        duration: "18 min", 
        status: "locked" 
      },
      { 
        id: "2-3", 
        title: "Flexbox Layouts", 
        type: "code", 
        duration: "30 min", 
        status: "locked" 
      },
    ]
  },
  {
    id: "module-3",
    title: "Module 3: JavaScript Essentials",
    description: "Learn the programming language of the web.",
    lessons: [
      { 
        id: "3-1", 
        title: "Variables and Data Types", 
        type: "video", 
        duration: "20 min", 
        status: "locked" 
      },
      { 
        id: "3-2", 
        title: "Functions and Scope", 
        type: "video", 
        duration: "25 min", 
        status: "locked" 
      },
    ]
  }
]

export function CourseCurriculum() {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-800">Curriculum</h2>
        <p className="text-slate-500 mt-1">3 Modules • 9 Lessons • 2h 40m Total</p>
      </div>
      
      <Accordion type="single" collapsible defaultValue="module-1" className="w-full">
        {modules.map((module) => (
          <AccordionItem key={module.id} value={module.id} className="border-b border-slate-100 last:border-0">
            <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 hover:no-underline">
              <div className="flex flex-col items-start text-left gap-1">
                <span className="font-semibold text-slate-800 text-base">{module.title}</span>
                <span className="text-sm text-slate-500 font-normal">{module.description}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-0">
              <div className="bg-slate-50/50 divide-y divide-slate-100">
                {module.lessons.map((lesson) => (
                  <div 
                    key={lesson.id} 
                    className={cn(
                      "flex items-center justify-between px-6 py-4 transition-colors",
                      lesson.status === 'locked' ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-50/50 cursor-pointer"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-slate-400">
                        {lesson.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : lesson.status === 'in-progress' ? (
                          <Circle className="w-5 h-5 text-blue-600 fill-blue-100" />
                        ) : (
                          <Lock className="w-5 h-5 text-slate-300" />
                        )}
                      </div>
                      
                      <div>
                        <h4 className={cn(
                          "font-medium text-sm",
                          lesson.status === 'in-progress' ? "text-blue-700" : "text-slate-700"
                        )}>
                          {lesson.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            {lesson.type === 'video' ? <PlayCircle size={12} /> : <FileText size={12} />}
                            <span className="capitalize">{lesson.type}</span>
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock size={12} />
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      {lesson.status === 'in-progress' && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                          Resume
                        </Badge>
                      )}
                      {lesson.status === 'completed' && (
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          Completed
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

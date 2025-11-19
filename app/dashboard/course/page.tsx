import { CourseCurriculum } from "@/components/course-curriculum"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { PlayCircle } from 'lucide-react'

export default function CoursePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Full-Stack Development Bootcamp</h1>
          <p className="text-slate-500">Master modern web development from scratch.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
          <PlayCircle size={16} />
          Continue Learning
        </Button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-slate-700">Course Progress</h3>
          <span className="text-sm font-medium text-blue-600">15% Completed</span>
        </div>
        <Progress value={15} className="h-2 bg-slate-100" />
        <p className="text-xs text-slate-500 mt-2">
          You've completed 2 of 9 lessons. Keep it up!
        </p>
      </div>

      <CourseCurriculum />
    </div>
  )
}

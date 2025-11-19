import { Bell } from 'lucide-react'
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"

export async function DashboardHeader() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  // Fetch profile if needed, for now just use user metadata or email
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Student'
  const avatarUrl = user?.user_metadata?.avatar_url

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4 md:hidden">
        {/* Mobile menu trigger would go here */}
        <span className="font-bold text-lg text-slate-800">FullStack Inst.</span>
      </div>
      
      <div className="hidden md:block">
        <h2 className="text-lg font-medium text-slate-800">Welcome back, {displayName}</h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-700">{displayName}</p>
            <p className="text-xs text-slate-500">Student</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
            {avatarUrl ? (
              <img src={avatarUrl || "/placeholder.svg"} alt={displayName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
                {displayName[0].toUpperCase()}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

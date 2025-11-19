"use client"

import Link from "next/link"
import { LayoutDashboard, BookOpen, User, Settings, LogOut } from 'lucide-react'
import { createClient } from "@/lib/supabase/client"
import { useRouter } from 'next/navigation'

export function DashboardSidebar() {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/auth/login")
    router.refresh()
  }

  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col h-screen fixed left-0 top-0 z-10">
      <div className="p-6 border-b border-slate-100">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            FS
          </div>
          <span className="font-bold text-xl text-slate-800">FullStack Inst.</span>
        </Link>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
          Menu
        </div>
        
        <Link 
          href="/dashboard" 
          className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        
        <Link 
          href="/dashboard/course" 
          className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <BookOpen size={20} />
          <span>Course Content</span>
        </Link>
        
        <Link 
          href="/dashboard/profile" 
          className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <User size={20} />
          <span>Profile</span>
        </Link>
        
        <Link 
          href="/dashboard/settings" 
          className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
      
      <div className="p-4 border-t border-slate-100">
        <button 
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2 w-full text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  )
}

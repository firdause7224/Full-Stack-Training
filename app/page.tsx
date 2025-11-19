import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Terminal } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              FS
            </div>
            <span className="font-bold text-xl text-slate-800">FullStack Inst.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Log in
            </Link>
            <Link 
              href="/auth/sign-up" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              New Cohort Starting Soon
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight text-balance">
              Master Full-Stack Development <br/>
              <span className="text-blue-600">One Day at a Time</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
              A structured, hands-on curriculum designed to take you from beginner to pro. 
              Build real projects, track your progress, and join a community of learners.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                href="/auth/sign-up" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                Start Learning Free <ArrowRight size={20} />
              </Link>
              <Link 
                href="#curriculum" 
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3 rounded-xl font-semibold text-lg transition-all flex items-center justify-center"
              >
                View Curriculum
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-slate-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Hands-on Projects</h3>
                <p className="text-slate-600 leading-relaxed">
                  Don't just watch videos. Build real applications that you can add to your portfolio.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Modern Stack</h3>
                <p className="text-slate-600 leading-relaxed">
                  Learn the latest technologies including React, Next.js, TypeScript, and Supabase.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Track Progress</h3>
                <p className="text-slate-600 leading-relaxed">
                  Daily milestones and progress tracking to keep you motivated and on schedule.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-100 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-800 rounded-md flex items-center justify-center text-white text-xs font-bold">
              FS
            </div>
            <span className="font-bold text-slate-800">FullStack Institute</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} FullStack Institute. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

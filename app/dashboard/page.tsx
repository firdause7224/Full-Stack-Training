export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500">Track your progress and continue learning.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Course Progress</h3>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-800">0%</span>
            <span className="text-sm text-slate-400 mb-1">completed</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-4 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Current Streak</h3>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-800">0</span>
            <span className="text-sm text-slate-400 mb-1">days</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Assignments</h3>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-800">0</span>
            <span className="text-sm text-slate-400 mb-1">pending</span>
          </div>
        </div>
      </div>

      {/* Recent Activity / Next Lesson */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Continue Learning</h2>
          <div className="p-4 border border-slate-100 rounded-lg bg-slate-50 flex items-center justify-center h-40 text-slate-500">
            No active courses started yet.
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-sm text-slate-500 italic">No recent activity.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

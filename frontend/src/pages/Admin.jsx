import { motion } from 'framer-motion';
import { Search, ArrowRight, Activity, Database, CheckCircle2 } from 'lucide-react';

export default function Admin() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Monitoring</h1>
        <p className="text-gray-400">System health and scraping background jobs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col gap-2 border-t-4 border-t-emerald-500">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold">API Health</span>
          </div>
          <p className="text-3xl font-bold">100%</p>
          <p className="text-sm text-gray-400">All endpoints operational</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col gap-2 border-t-4 border-t-blue-500">
          <div className="flex items-center gap-2 text-blue-400">
            <Database className="w-5 h-5" />
            <span className="font-semibold">Database Status</span>
          </div>
          <p className="text-3xl font-bold">Connected</p>
          <p className="text-sm text-gray-400">MongoDB Atlas Cluster 0</p>
        </div>

        <div className="glass-card p-6 flex flex-col gap-2 border-t-4 border-t-accent">
          <div className="flex items-center gap-2 text-accent">
            <Activity className="w-5 h-5" />
            <span className="font-semibold">Active Jobs</span>
          </div>
          <p className="text-3xl font-bold">0</p>
          <p className="text-sm text-gray-400">Background scraping tasks</p>
        </div>
      </div>
      
      <div className="glass-card p-6">
         <h3 className="text-lg font-semibold mb-4">Recent Scraping Logs</h3>
         <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-300 h-64 overflow-y-auto">
            <p className="text-emerald-400">[2023-10-15 14:32:01] INFO: Scraping engine initialized.</p>
            <p>[2023-10-15 14:32:05] INFO: Waiting for tasks...</p>
         </div>
      </div>
    </motion.div>
  );
}

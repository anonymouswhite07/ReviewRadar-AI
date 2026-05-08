import { motion } from 'framer-motion';

export default function Compare() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Compare Products</h1>
        <p className="text-gray-400">Side-by-side sentiment and feature analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="glass-card p-6 min-h-[400px] flex flex-col items-center justify-center text-gray-500 border-dashed border-2 border-white/10">
            <p>Select Product 1</p>
         </div>
         <div className="glass-card p-6 min-h-[400px] flex flex-col items-center justify-center text-gray-500 border-dashed border-2 border-white/10">
            <p>Select Product 2</p>
         </div>
      </div>
    </motion.div>
  );
}

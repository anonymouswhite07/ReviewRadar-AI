import { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, AlertCircle, ThumbsUp, MessageSquare, Star } from 'lucide-react';

const sentimentData = [
  { name: 'Positive', value: 65, color: '#10B981' },
  { name: 'Neutral', value: 20, color: '#F59E0B' },
  { name: 'Negative', value: 15, color: '#EF4444' },
];

const timelineData = [
  { date: 'Jan', sentiment: 4.2 },
  { date: 'Feb', sentiment: 4.1 },
  { date: 'Mar', sentiment: 4.5 },
  { date: 'Apr', sentiment: 4.4 },
  { date: 'May', sentiment: 4.8 },
];

const reviews = [
  { id: 1, user: 'Alex D.', rating: 5, text: 'Amazing product! Battery life is incredible.', sentiment: 'positive', conf: 0.98, date: '2023-10-12' },
  { id: 2, user: 'Sam K.', rating: 3, text: 'Good but heats up during charging.', sentiment: 'neutral', conf: 0.75, date: '2023-10-14' },
  { id: 3, user: 'Jordan P.', rating: 1, text: 'Terrible customer support and broken screen.', sentiment: 'negative', conf: 0.99, date: '2023-10-15' },
];

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Product Analytics</h1>
          <p className="text-gray-400">Apple iPhone 15 Pro Max</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
          <Download className="w-4 h-4" /> Export Report
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Total Reviews" value="1,284" icon={<MessageSquare className="w-5 h-5 text-primary" />} />
        <MetricCard title="Average Rating" value="4.6 / 5" icon={<Star className="w-5 h-5 text-yellow-400" />} />
        <MetricCard title="Positive Sentiment" value="65%" icon={<ThumbsUp className="w-5 h-5 text-secondary" />} />
        <MetricCard title="Critical Issues" value="15%" icon={<AlertCircle className="w-5 h-5 text-red-500" />} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="glass-card p-6 col-span-1">
          <h3 className="text-lg font-semibold mb-4">Sentiment Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sentimentData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#15151A', borderColor: '#333' }} itemStyle={{ color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 text-sm mt-4">
            {sentimentData.map(d => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></div>
                {d.name} ({d.value}%)
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 col-span-2">
          <h3 className="text-lg font-semibold mb-4">Sentiment Timeline</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="date" stroke="#666" />
                <YAxis domain={[0, 5]} stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#15151A', borderColor: '#333' }} itemStyle={{ color: '#fff' }} />
                <Area type="monotone" dataKey="sentiment" stroke="#4F46E5" fillOpacity={1} fill="url(#colorSentiment)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI Summary */}
      <div className="glass-card p-6 border-l-4 border-l-accent">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-accent" /> AI Generated Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-secondary font-medium mb-2">Most Praised Features</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Exceptional camera quality in low light</li>
              <li>Long-lasting battery performance</li>
              <li>Premium titanium build</li>
            </ul>
          </div>
          <div>
            <h4 className="text-red-400 font-medium mb-2">Common Complaints</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Overheating during fast charging</li>
              <li>High price point compared to previous gen</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h3 className="text-lg font-semibold">Recent Reviews</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-sm">
              <tr>
                <th className="p-4 font-medium">User</th>
                <th className="p-4 font-medium">Rating</th>
                <th className="p-4 font-medium w-1/2">Review</th>
                <th className="p-4 font-medium">Sentiment</th>
                <th className="p-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {reviews.map((review) => (
                <tr key={review.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 whitespace-nowrap">{review.user}</td>
                  <td className="p-4"><StarRating rating={review.rating} /></td>
                  <td className="p-4 text-sm text-gray-300">{review.text}</td>
                  <td className="p-4">
                    <SentimentBadge sentiment={review.sentiment} conf={review.conf} />
                  </td>
                  <td className="p-4 text-sm text-gray-400 whitespace-nowrap">{review.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

function MetricCard({ title, value, icon }) {
  return (
    <div className="glass-card p-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400 mb-1">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="p-3 bg-white/5 rounded-xl">{icon}</div>
    </div>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
      ))}
    </div>
  );
}

function SentimentBadge({ sentiment, conf }) {
  const colors = {
    positive: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    neutral: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    negative: 'bg-red-500/10 text-red-400 border-red-500/20',
  };
  return (
    <div className="flex flex-col gap-1">
      <span className={`inline-flex px-2 py-1 text-xs rounded-full border ${colors[sentiment]} capitalize w-fit`}>
        {sentiment}
      </span>
      <span className="text-[10px] text-gray-500">{(conf * 100).toFixed(1)}% conf</span>
    </div>
  );
}

function Sparkles(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  );
}

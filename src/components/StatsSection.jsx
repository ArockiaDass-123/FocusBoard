import React from 'react';
import StatsCard from './StatsCard';
import { Layers, Clock, CheckCircle2, TrendingUp } from 'lucide-react';

export default function StatsSection({ stats }) {
  const { total, inProgress, completed, completionPercentage } = stats;

  return (
    <section className="stats-section" aria-label="Dashboard Statistics">
      <div className="stats-grid">
        <StatsCard 
          title="Total Tasks" 
          value={total} 
          subtext="Active pipeline" 
          icon={Layers} 
          theme="total" 
        />
        <StatsCard 
          title="In Progress" 
          value={inProgress} 
          subtext="Under active focus" 
          icon={Clock} 
          theme="in-progress" 
        />
        <StatsCard 
          title="Completed" 
          value={completed} 
          subtext="Successfully resolved" 
          icon={CheckCircle2} 
          theme="completed" 
        />
        <StatsCard 
          title="Completion Rate" 
          value={`${completionPercentage}%`} 
          subtext="Goal progress" 
          icon={TrendingUp} 
          theme="percentage" 
          hasProgress={true}
          percentage={completionPercentage}
        />
      </div>
    </section>
  );
}

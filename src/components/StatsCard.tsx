import React from "react";
type StatsCardProps = {
  title: string;
  percentage: number;
  color: string;
  icon?: React.ReactNode;
};

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  percentage,
  color,
  icon,
}) => {
  return (
    <div
      className={`rounded-lg p-6 bg-gradient-to-r ${color} text-white w-full h-48 rounded-lg shadow-md`}
    >
      <div className="flex items-center">
        <h4 className="text-lg font-semibold">{title}</h4>
        {icon && <span className="mr-2">{icon}</span>}{" "}
      </div>

      <p className="text-2xl font-bold relative pt-12">{percentage}%</p>
      <p className="text-sm">Avg. Completed</p>
    </div>
  );
};

export default StatsCard;

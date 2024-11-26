import UserPageHeader from "../../../components/UserPageHeader/UserPageHeader";
import useAlljobs from "../../../hooks/useAlljobs";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useAppliedjob from "../../../hooks/useAppliedjob";
// import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Stats = () => {
  //// sob jobdata niye then ekhane amra proti job er applicant number ar job creator k bar chart kore dekhacchi , tar jonno notun obj
  const [alljobs] = useAlljobs();
  const [data, setData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [applicationData] = useAppliedjob();
  console.log(data);
  useEffect(() => {
    if (alljobs || applicationData) {
      const newData = alljobs.map((job) => ({
        applicant: Number(job.hiddenapplicationnumber),
        jobtitle: job.jobtitle,
      }));
      console.log(newData);
      setData(newData);
    }
    // ekhane amra status gulo alda vabe niye count kore niye nicchi
    if (applicationData) {
      const statusCount = applicationData.reduce((acc, app) => {
        // status pending jodi age theke theke thake then ager vaalue er sathe 1 jog kore count kortesi...output onekta amn ashbe statusCount = { pending: 2, approved: 1 };
        //obj hishebe pete chai tai initial value {} rakhsi

        // output holo :{accepted: 9,pending: 1,rejected: 8,undefined: 1}
        // accumulator hocche status er value, ar nitun value holo acc +1;
        acc[app.status] = (acc[app.status] || 0) + 1;
        return acc;
      }, {});
      console.log(typeof statusCount, statusCount);
      // jehetu obj ache so  map korte gele obosshoi array kore kaj korte hobe,...........egula kortesi karon pie chart e "value" ar "name" default e deya ache tai
      const pieData = Object.entries(statusCount).map(([key, value]) => ({
        name: key,
        value,
      }));
      console.log(pieData);
      setPieData(pieData);
    }
  }, [alljobs, applicationData]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <UserPageHeader userheading={"Platform Analytics"}></UserPageHeader>
      <div className="w-full h-[400px] mb-24">
        <h3 className="mx-12 font-semibold text-red-600 text-xl mb-4">
          Distribution of Job Application Statuses :
        </h3>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* Legend hocche amra j color use kore bujhacchi setar konta ki ta identify kore dey niche  */}
            <Legend></Legend>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* BarChart */}
      <div className="w-[100%] h-[400px]">
        <h3 className="mx-12 font-semibold text-red-600 text-xl mb-4">
          Application Count Across Jobs(title) :
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="jobtitle" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="jobtitle" fill="#8884d8" />
            <Bar dataKey="applicant" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;

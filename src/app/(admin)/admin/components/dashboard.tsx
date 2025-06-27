import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Link from "next/link";
import { GoPeople, GoListUnordered, GoGear, GoHome } from "react-icons/go";

const data = [
  { name: "Jan", sales: 4000, visitors: 2400 },
  { name: "Feb", sales: 3000, visitors: 1398 },
  { name: "Mar", sales: 2000, visitors: 9800 },
  { name: "Apr", sales: 2780, visitors: 3908 },
  { name: "May", sales: 1890, visitors: 4800 },
  { name: "Jun", sales: 2390, visitors: 3800 },
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Fashion", value: 300 },
  { name: "Books", value: 300 },
  { name: "Home", value: 200 },
];
const cards = [
    {
    title: "Dashboard",
    description: "Go to the main website",
    icon: GoHome,
    link: "/",
  },
  {
    title: "Articles",
    description: "Manage all registered articles",
    icon: GoPeople,
    link: "/admin/articles",
  },
  {
    title: "Requests",
    description: "Track and manage requests",
    icon: GoListUnordered,
    link: "/admin/requests",
  },
    {
    title: "Settings",
    description: "Customize your admin panel",
    icon: GoGear,
    link: "/admin/settings",
  },
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card, idx) => (
          <Link
            key={idx}
            href={card.link}
            className={`p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 bg-indigo-50 flex flex-col gap-4`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
              <card.icon className="text-indigo-400 w-10 h-10" />
            </div>
            <p className="text-sm text-gray-500">{card.description}</p>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Visitors Bar Chart */}
        <div className="col-span-1 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Visitors</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visitors" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Progress Cards */}
        <div className="col-span-1 bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-xl font-semibold">Goals Progress</h2>
          <div>
            <p className="text-sm font-medium">Marketing Campaign</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">Customer Retention</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">Product Launch</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
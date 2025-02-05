// DashboardPage component that serves as the main page for the dashboard

import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { overviewData, recentSalesData, topProducts } from "../../constants";

import {useTheme} from "../../hooks/user-theme";
import Footer from "../../layouts/footer";

const DashboardPage = () => {
    const {theme} = useTheme ();
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Dashboard</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Package
                                size={26}
                                className=""
                            />
                        </div>
                        <p className="card-title">Total Products</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">25,154</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            25%
                        </span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <DollarSign
                                size={26}
                            />
                        </div>
                        <p className="card-title">Total Paid Orders</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">$16,000</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            12%
                        </span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Users
                                size={26}
                            />
                        </div>
                        <p className="card-title">Total Customers</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">15,400k</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            15%
                        </span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <CreditCard
                                size={26}
                            />
                        </div>
                        <p className="card-title">Sales</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">12,340</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            19%
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                    <div className="card-header">
                        <p className="card-title">Overview  </p>
                    </div>
                    <div className="card-body p-0">
                        {/*  ResponsiveContainer is a wrapper component that renders a chart that automatically adjusts its size based on the parent container */}
                        <ResponsiveContainer width="100%" height={300}>
                            
                            {/*  AreaChart is a chart component that renders an area chart */}

                            <AreaChart data={overviewData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>

                            {/* // The <defs> element is used to store graphical objects that will be used at a later time */}

                                <defs>
                                    <linearGradient
                                    id="colorTotal"
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="1"
                                    >
                                        {/* // The <stop> element defines the color and opacity of the gradient at different points */}
                                     <stop
                                     offset="5%"
                                     stopColor="#256eb"
                                     stopOpacity={0.8}
                                     />
                                        <stop
                                        offset="95%"
                                        stopColor="#256eb"
                                        stopOpacity={0}
                                        
                                        />   
                                    </linearGradient>
                                </defs>
{/* // The <Tooltip> component is used to render a tooltip on the chart */}

                                <Tooltip 
                                cursor={false}
                                formatter={(value)=> `$${value}`}
                                />

                                {/* // The <XAxis> component is used to render the x-axis of the chart */}

                                <XAxis 
                                dataKey="name"
                                strokeWidth={0}
                                stroke={theme === "light"? "#475569": "#94a3b8"}
                                tickMargin={6} // space between the tick and the axis
                                />

                                {/* // The <YAxis> component is used to render the y-axis of the chart */}

                                <YAxis 
                                dataKey="total"
                                strokeWidth={0}
                                stroke={theme === "light"? "#475569": "#94a3b8"}
                                tickFormatter={(value)=> `$${value}`}
                                tickMargin={6} // space between the tick and the axis
                                />
                                <Area 
                                type="monotone"
                                dataKey="total"
                                stroke="#2563eb"
                                fillOpacity={1}
                                fill="url(#colorTotal)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Recents Sales</p>
                    </div>
                    <div className="card-body h-[300px] overflow-auto p-0">
                        {recentSalesData.map((sale)=>(
                            <div key={sale.id} className="flex items-center justify-between gap-x-4 py-2 pr-2" >
                                <div className="flex items-center gap-x-4">
                                    <img src={sale.image} alt={sale.name} className="size-10 flex-shrink-0 rounded-full object-cover" />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium text-slate-900 dark:text-slate-50">
                                            {sale.name}
                                        </p>
                                        <p className="text-base text-slate-600 dark:text-slate-400">
                                            {sale.email}
                                        </p>
                                    </div>
                                </div>
                                <p className="font-medium text-slate-900 dark:text-slate-50">
                                    ${sale.total}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">
                        Top Orders
                    </p>
                </div>
                <div className="card-body p-0">
                        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scollbar-width:_thin]">
                            <table className="table">
                                <thead className="table-header">
                                    <tr className="table-row">
                                        <th className="table-head">#</th>
                                        <th className="table-head">Product</th>
                                        <th className="table-head">Price</th>
                                        <th className="table-head">Status</th>
                                        <th className="table-head">Rating</th>
                                        <th className="table-head">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    {topProducts.map((product)=>(
                                        <tr className="table-row" key={product.number}>
                                            <td className="table-cell">
                                                {product.number}
                                            </td>
                                            <td className="table-cell">
                                                <div className="flex w-max gap-x-4">
                                                    <img src={product.image} alt={product.name} className="size-14 rounded-lg object-cover" />
                                                    <div className="flex flex-col">
                                                        <p className="">
                                                            {product.name}
                                                        </p>
                                                        <p className="font-normal text-slate-600 dark:text-slate-400">
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="table-cell">                                                
                                                    ${product.price}
                                            </td>
                                            <td className="table-cell">
                                                {product.status}
                                            </td>
                                            <td className="table-cell">
                                                <div className="flex items-center gap-x-2">
                                                    <Star size={18} className="fill-yellow-600 stroke-yellow-600"/>
                                                    {product.rating}</div>
                                            </td>
                                            <td className="table-cell">
                                                <div className="flex items-center gap-x-4">
                                                    <button className="text-blue-500 dark:text-blue-600">
                                                        <PencilLine size={20} />
                                                    </button>
                                                    <button className="text-red-500 ">
                                                        <Trash
                                                         size={20} />
                                                    </button>
                                                </div>
                                            </td>
                                                
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;

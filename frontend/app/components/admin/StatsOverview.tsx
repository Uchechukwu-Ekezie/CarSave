'use client'

import React from 'react'

export default function StatsOverview() {
  // Mock data - replace with actual data from your backend/smart contract
  const stats = [
    {
      label: 'Total Vehicles',
      value: '1,234',
      change: '+12.5%',
      trend: 'up',
      icon: '🚗',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Active Users',
      value: '856',
      change: '+8.2%',
      trend: 'up',
      icon: '👥',
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Total Transactions',
      value: '3,421',
      change: '+15.7%',
      trend: 'up',
      icon: '💳',
      color: 'from-green-500 to-emerald-500',
    },
    {
      label: 'Revenue (ETH)',
      value: '12.45',
      change: '+22.1%',
      trend: 'up',
      icon: '💰',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const recentActivity = [
    { id: 1, action: 'New vehicle registered', vehicle: 'BMW X5 2023', time: '2 mins ago', status: 'success' },
    { id: 2, action: 'Service record added', vehicle: 'Tesla Model 3', time: '15 mins ago', status: 'success' },
    { id: 3, action: 'Ownership transferred', vehicle: 'Mercedes C-Class', time: '1 hour ago', status: 'success' },
    { id: 4, action: 'Verification pending', vehicle: 'Audi A4 2022', time: '2 hours ago', status: 'pending' },
    { id: 5, action: 'Failed verification', vehicle: 'Toyota Camry', time: '3 hours ago', status: 'error' },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                stat.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 text-left flex items-center space-x-3">
              <span className="text-xl">➕</span>
              <span>Add New Vehicle</span>
            </button>
            <button className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-200 text-left flex items-center space-x-3">
              <span className="text-xl">✅</span>
              <span>Verify Pending Records</span>
            </button>
            <button className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-200 text-left flex items-center space-x-3">
              <span className="text-xl">📧</span>
              <span>Send Notifications</span>
            </button>
            <button className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-200 text-left flex items-center space-x-3">
              <span className="text-xl">📊</span>
              <span>Generate Report</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 pb-4 border-b border-gray-700 last:border-0">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-xs">{activity.vehicle}</p>
                  <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <p className="text-white font-semibold">Blockchain</p>
              <p className="text-green-400 text-sm">Connected</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <p className="text-white font-semibold">API Status</p>
              <p className="text-green-400 text-sm">Operational</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <p className="text-white font-semibold">Database</p>
              <p className="text-green-400 text-sm">Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


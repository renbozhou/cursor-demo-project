'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, ChartBarIcon, CogIcon, CubeIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">ERP研发平台</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#features" className="text-gray-900 hover:text-primary px-3 py-2">产品特性</a>
              <a href="#solutions" className="text-gray-900 hover:text-primary px-3 py-2">解决方案</a>
              <a href="#contact" className="text-gray-900 hover:text-primary px-3 py-2">联系我们</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                下一代企业资源规划研发平台
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                打造智能化、高效化的企业资源管理系统，助力企业数字化转型
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <a
                  href="#contact"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  开始使用
                </a>
                <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                  了解更多 <ArrowRightIcon className="inline-block w-4 h-4 ml-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">核心特性</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                全方位的企业资源管理解决方案
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative">
                <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <ChartBarIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">智能数据分析</h3>
                  <p className="mt-2 text-gray-600">
                    强大的数据分析能力，帮助企业做出明智决策
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <CogIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">流程自动化</h3>
                  <p className="mt-2 text-gray-600">
                    自动化工作流程，提高运营效率
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <CubeIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">模块化设计</h3>
                  <p className="mt-2 text-gray-600">
                    灵活的模块化架构，满足不同企业需求
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">联系我们</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                立即开始您的数字化转型之旅
              </p>
            </div>
            <div className="mt-16 max-w-xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    姓名
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    邮箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    留言
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    发送信息
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ERP研发平台. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import * as LucideIcons from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const forecastData = [
    { name: 'Week 1', cash: 45000, revenue: 52000 },
    { name: 'Week 2', cash: 48000, revenue: 54000 },
    { name: 'Week 3', cash: 42000, revenue: 49000 },
    { name: 'Week 4', cash: 55000, revenue: 61000 },
    { name: 'Week 5', cash: 52000, revenue: 58000 },
    { name: 'Week 6', cash: 38000, revenue: 45000 },
    { name: 'Week 7', cash: 49000, revenue: 56000 },
    { name: 'Week 8', cash: 58000, revenue: 65000 },
  ];

  const handleEarlyAccessSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thanks for your interest in FinPilot AI. The early-access form is currently a demo while the MVP is in development."
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            <div className="flex items-center gap-2">
              <LucideIcons.LineChart className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                FINPILOT AI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#product"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Product
              </a>

              <a
                href="#how-it-works"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                How it Works
              </a>

              <a
                href="#team"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Team
              </a>

              <a
                href="#early-access"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
              >
                Join Early Access
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <LucideIcons.X className="w-6 h-6" />
              ) : (
                <LucideIcons.Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">

            <a
              href="#product"
              className="block text-base font-medium text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </a>

            <a
              href="#how-it-works"
              className="block text-base font-medium text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>

            <a
              href="#team"
              className="block text-base font-medium text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>

            <a
              href="#early-access"
              className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg text-base font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Early Access
            </a>

          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-8">
          <LucideIcons.Terminal className="w-4 h-4" />
          MVP in Development
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          AI Financial Copilot
          <br className="hidden md:block" />
          for SMEs
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium max-w-3xl mx-auto">
          Turn financial data into insights, forecasts and better decisions.
        </p>

        <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
          FinPilot AI transforms accounting and banking data into clear
          financial insights, cash-flow forecasts and actionable
          recommendations — helping SMEs make better decisions without
          requiring a full finance team.
        </p>

        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Founded by Santiago Rojas Morales & Jennyfer Torres
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#early-access"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2"
          >
            Join Early Access
            <LucideIcons.ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#product"
            className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
          >
            Explore the Product
          </a>

        </div>
      </section>

      {/* Dashboard Preview */}
      <section
        id="product"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >

        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">

          <div className="bg-slate-900 px-6 py-4 flex justify-between items-center border-b border-slate-800">

            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-md">
              Demo Data — For Illustration Only
            </div>

          </div>

          <div className="p-6 lg:p-10 bg-slate-50">

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">

              {[
                {
                  label: 'Revenue',
                  value: 'COP 180M',
                  trend: '+12%'
                },
                {
                  label: 'Gross Margin',
                  value: '52.8%',
                  trend: '+2.1%'
                },
                {
                  label: 'Operating Exp.',
                  value: 'COP 62M',
                  trend: '-4%'
                },
                {
                  label: 'EBITDA',
                  value: 'COP 33M',
                  trend: '+18%'
                },
                {
                  label: 'Cash Flow',
                  value: '+COP 18.4M',
                  trend: '+5%'
                }
              ].map((kpi, i) => (

                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className="text-sm text-slate-500 mb-1">
                    {kpi.label}
                  </div>

                  <div className="text-xl font-bold text-slate-900 mb-2">
                    {kpi.value}
                  </div>

                  <div className="text-xs font-medium text-emerald-600 bg-emerald-50 inline-flex px-2 py-1 rounded-md">
                    {kpi.trend} vs last month
                  </div>
                </div>

              ))}

            </div>

            {/* Charts and AI */}
            <div className="grid lg:grid-cols-3 gap-8">

              <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">

                <div className="flex justify-between items-center mb-6">

                  <h3 className="text-lg font-bold text-slate-900">
                    8-Week Cash Flow Forecast
                  </h3>

                  <span className="text-xs text-slate-400 border border-slate-200 px-2 py-1 rounded">
                    Demo Data
                  </span>

                </div>

                <div className="h-72 w-full">

                  <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={forecastData}>

                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e2e8f0"
                      />

                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: '#64748b',
                          fontSize: 12
                        }}
                        dy={10}
                      />

                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: '#64748b',
                          fontSize: 12
                        }}
                        dx={-10}
                      />

                      <Tooltip
                        contentStyle={{
                          borderRadius: '12px',
                          border: 'none',
                          boxShadow:
                            '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                        }}
                      />

                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={false}
                        name="Revenue Forecast"
                      />

                      <Line
                        type="monotone"
                        dataKey="cash"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={false}
                        name="Cash Position"
                      />

                    </LineChart>

                  </ResponsiveContainer>

                </div>
              </div>

              {/* AI Chat */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full overflow-hidden">

                <div className="bg-blue-50/50 p-4 border-b border-slate-100 flex items-center gap-3">

                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <LucideIcons.Sparkles className="w-4 h-4 text-white" />
                  </div>

                  <div>
                    <div className="font-semibold text-sm text-slate-900">
                      FinPilot Assistant
                    </div>

                    <div className="text-xs text-blue-600 font-medium">
                      Demo Example
                    </div>
                  </div>

                </div>

                <div className="p-4 space-y-4 flex-1 overflow-y-auto text-sm">

                  <div className="flex justify-end">
                    <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                      Why did our cash flow decrease this month?
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] leading-relaxed">
                      Operating expenses increased by 12% compared with the
                      previous month, mainly driven by payroll and supplier
                      payments. Based on current trends, cash reserves may
                      tighten over the next 8 weeks.
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                      What should I watch next month?
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] leading-relaxed">
                      Monitor operating expenses, accounts receivable
                      collection and upcoming supplier payments. Your current
                      forecast indicates a potential cash-flow pressure point
                      in week 6.
                    </div>
                  </div>

                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50">

                  <div className="bg-white border border-slate-200 rounded-full px-4 py-2.5 text-sm text-slate-400 flex items-center justify-between shadow-inner">
                    Ask a financial question...
                    <LucideIcons.Send className="w-4 h-4 text-blue-600" />
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem and Solution */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>

              <div className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-6">
                The Problem
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                SMEs have financial data.
                <br />
                They need financial intelligence.
              </h2>

              <ul className="space-y-4">

                {[
                  'Financial information is scattered across banks, spreadsheets and accounting systems.',
                  'Reports often arrive too late to support decisions.',
                  'Cash-flow forecasting is frequently manual and prone to errors.',
                  'Business owners struggle to interpret complex financial statements.',
                  'Many SMEs cannot afford a full FP&A or finance team.'
                ].map((item, i) => (

                  <li
                    key={i}
                    className="flex gap-3 text-slate-600"
                  >
                    <LucideIcons.XCircle className="w-6 h-6 text-red-400 shrink-0" />
                    <span>{item}</span>
                  </li>

                ))}

              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">

              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
                The Solution
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                From financial data to business decisions.
              </h2>

              <div className="flex flex-col space-y-3 mb-10">

                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-center font-medium shadow-sm">
                  Bank & Accounting Data
                </div>

                <LucideIcons.ArrowDown className="w-5 h-5 text-slate-300 mx-auto" />

                <div className="bg-blue-600 p-4 rounded-xl border border-blue-700 text-white flex items-center justify-center font-bold shadow-md shadow-blue-200">
                  FinPilot AI
                </div>

                <LucideIcons.ArrowDown className="w-5 h-5 text-slate-300 mx-auto" />

                <div className="bg-emerald-500 p-4 rounded-xl border border-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-200">
                  AI Insights & Better Decisions
                </div>

              </div>

              <div className="grid grid-cols-2 gap-3">

                {[
                  'P&L Analysis',
                  'Cash-flow Forecasts',
                  'Financial KPIs',
                  'Variance Analysis',
                  'AI Recommendations',
                  'Natural-Language Q&A'
                ].map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-700 font-medium"
                  >
                    <LucideIcons.CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {feature}
                  </div>

                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-24 bg-slate-900 text-white"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How it works
            </h2>

            <p className="text-slate-400 text-lg">
              Four simple steps to automated financial intelligence.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                num: '01',
                title: 'Connect',
                desc: 'Bring together accounting and financial data securely.'
              },
              {
                num: '02',
                title: 'Analyze',
                desc: 'FinPilot AI identifies trends, anomalies and financial drivers.'
              },
              {
                num: '03',
                title: 'Forecast',
                desc: 'Generate cash-flow and financial forecasts based on available data.'
              },
              {
                num: '04',
                title: 'Decide',
                desc: 'Receive clear insights and recommendations in natural language.'
              }
            ].map((step, i) => (

              <div
                key={i}
                className="relative group"
              >

                <div className="text-6xl font-black text-slate-800 mb-4 group-hover:text-blue-500 transition-colors">
                  {step.num}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {step.desc}
                </p>

                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-slate-800"></div>
                )}

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Built for modern financial management
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: 'SME Founders',
                desc: 'Understand the financial health of the business without needing advanced financial expertise.'
              },
              {
                title: 'Finance Teams',
                desc: 'Automate recurring analysis and spend more time on strategic decisions.'
              },
              {
                title: 'Accountants & Bookkeepers',
                desc: 'Turn raw financial data into higher-value advisory insights for clients.'
              },
              {
                title: 'Fractional CFOs',
                desc: 'Scale financial analysis across multiple clients efficiently.'
              }
            ].map((user, i) => (

              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {user.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {user.desc}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Geographic Vision */}
      <section className="py-20 bg-white border-y border-slate-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <LucideIcons.Globe className="w-12 h-12 text-blue-600 mx-auto mb-6" />

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Built in Colombia. Designed for LATAM.
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            FinPilot AI is being developed in Bogotá, Colombia, with a vision
            to help SMEs across Latin America access practical financial
            intelligence and AI-powered decision support.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-slate-400 font-semibold tracking-wider uppercase text-sm">

            <span className="text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              Colombia
            </span>

            <LucideIcons.ArrowRight className="w-4 h-4" />

            <span className="bg-slate-100 px-4 py-2 rounded-full">
              Mexico
            </span>

            <LucideIcons.ArrowRight className="w-4 h-4" />

            <span className="bg-slate-100 px-4 py-2 rounded-full">
              LATAM
            </span>

          </div>

          <p className="text-xs text-slate-400 mt-6 font-medium uppercase tracking-widest">
            Expansion Vision
          </p>

        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Simple, scalable plans
            </h2>

            <p className="text-slate-500">
              Pricing will be introduced during the early-access phase.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {[
              {
                name: 'Starter',
                desc: 'For small businesses beginning to automate financial analysis.'
              },
              {
                name: 'Growth',
                desc: 'For growing SMEs with more complex financial needs.'
              },
              {
                name: 'Business',
                desc: 'For companies and finance teams requiring advanced financial intelligence.'
              }
            ].map((plan, i) => (

              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-200"
              >

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>

                <p className="text-slate-600 text-sm mb-8">
                  {plan.desc}
                </p>

                <div className="w-full bg-slate-100 text-slate-400 text-sm font-semibold py-3 rounded-xl text-center">
                  Coming Soon
                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section
        id="team"
        className="py-20 bg-white border-t border-slate-200"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Founding Team
            </h2>

            <p className="text-slate-600 text-lg">
              Built by professionals who understand the problem firsthand.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Santiago */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col h-full">

              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <LucideIcons.User className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                Santiago Rojas Morales
              </h3>

              <p className="text-blue-600 font-semibold mb-6">
                Co-Founder & Finance Lead
              </p>

              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Public Accountant with 8+ years of experience across
                accounting, FP&A, financial analysis, financial reporting,
                budgeting, forecasting and business performance.
              </p>

              <div>

                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Core Expertise
                </p>

                <div className="flex flex-wrap gap-2">

                  {[
                    'Financial Reporting',
                    'P&L Analysis',
                    'Forecasting',
                    'Budgeting',
                    'Excel',
                    'Power BI',
                    'SQL',
                    'SAP'
                  ].map((skill, i) => (

                    <span
                      key={i}
                      className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>

                  ))}

                </div>
              </div>
            </div>

            {/* Jennyfer */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col h-full">

              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <LucideIcons.User className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                Jennyfer Torres
              </h3>

              <p className="text-blue-600 font-semibold mb-6">
                Co-Founder
              </p>

              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Co-Founder of FinPilot AI, working alongside the team to build
                the next generation of SME financial management and
                AI-powered decision support.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Early Access */}
      <section
        id="early-access"
        className="py-24 bg-blue-600 relative overflow-hidden"
      >

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">

          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>

        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">

            <div className="text-center mb-8">

              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Help shape the future of SME financial intelligence.
              </h2>

              <p className="text-slate-600">
                FinPilot AI is currently in development. Join the
                early-access program to follow the product and participate in
                its next stage.
              </p>

            </div>

            <form
              className="space-y-5"
              onSubmit={handleEarlyAccessSubmit}
            >

              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>

                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    placeholder="John Doe"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    placeholder="john@company.com"
                  />

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Company
                  </label>

                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    placeholder="Company Name"
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Country
                  </label>

                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    placeholder="Colombia"
                  />

                </div>

              </div>

              <div>

                <label className="block text-sm font-medium text-slate-700 mb-1">
                  What would you like FinPilot AI to help you with?
                </label>

                <textarea
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                  placeholder="Tell us about your biggest financial data challenge..."
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Request Early Access
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-4 gap-8 mb-8">

            <div className="md:col-span-2">

              <div className="flex items-center gap-2 mb-4">

                <LucideIcons.LineChart className="w-6 h-6 text-blue-500" />

                <span className="text-xl font-bold text-white tracking-tight">
                  FINPILOT AI
                </span>

              </div>

              <p className="text-slate-400 mb-2 font-medium">
                AI Financial Copilot for SMEs
              </p>

              <p className="text-sm max-w-sm">
                Turn financial data into insights, forecasts and better
                decisions.
              </p>

            </div>

            <div>

              <h4 className="text-white font-semibold mb-4">
                Product
              </h4>

              <ul className="space-y-2 text-sm">

                <li>
                  <a
                    href="#product"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-blue-400 transition-colors"
                  >
                    How It Works
                  </a>
                </li>

                <li>
                  <span className="text-slate-500 cursor-not-allowed">
                    Pricing (Coming Soon)
                  </span>
                </li>

              </ul>

            </div>

            <div>

              <h4 className="text-white font-semibold mb-4">
                Company
              </h4>

              <ul className="space-y-2 text-sm">

                <li>
                  <a
                    href="#team"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Founding Team
                  </a>
                </li>

                <li>
                  <a
                    href="#early-access"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Early Access
                  </a>
                </li>

                <li>
                  <span className="text-slate-500 cursor-not-allowed">
                    Contact (Coming Soon)
                  </span>
                </li>

              </ul>

            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">

            <p>
              © 2026 FinPilot AI. All rights reserved.
            </p>

            <p className="mt-2 md:mt-0 text-slate-500">
              MVP in Development
            </p>

          </div>

        </div>
      </footer>

    </div>
  );
};

export default App;
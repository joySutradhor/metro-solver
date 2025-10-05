'use client'
import { useState } from 'react'
import { MdAutoGraph, MdInsights, MdArticle } from 'react-icons/md'
import { IoIosTrophy } from "react-icons/io";


const data = {
  'Success Stories': [
    {
      id: 1,
      title: 'The Future of Metro Systems by Company',
      desc: 'Provide a quick introduction to your metro solver company. Highlight your mission, core expertise',
      views: '50M+ Views',
      cpa: '39% Lower CPA',
      sales: '$2M+ Sales Generated',
      img: '/paint.jpg'
    },
    {
      id: 2,
      title: 'Transforming Business Operations',
      desc: 'Discover how Metro Solver helped businesses achieve automation and efficiency.',
      views: '30M+ Views',
      cpa: '25% Lower CPA',
      sales: '$1.5M+ Sales Generated',
      img: '/paint.jpg'
    },
    {
      id: 3,
      title: 'Innovation Through Data',
      desc: 'Learn how data-driven decisions elevated performance and profitability.',
      views: '70M+ Views',
      cpa: '41% Lower CPA',
      sales: '$3M+ Sales Generated',
      img: '/paint.jpg'
    },
    {
      id: 4,
      title: 'Global Reach, Local Success',
      desc: 'How Metro Solver supported localized solutions with global impact.',
      views: '45M+ Views',
      cpa: '33% Lower CPA',
      sales: '$2.5M+ Sales Generated',
      img: '/paint.jpg'
    }
  ],
  'Case Studies': [
    {
      id: 5,
      title: 'Case Study: Metro AI Solutions',
      desc: 'AI-powered analytics reshaping the customer experience journey.',
      views: '40M+ Views',
      cpa: '29% Lower CPA',
      sales: '$2.2M+ Sales Generated',
      img: '/paint.jpg'
    },
    {
      id: 6,
      title: 'Scaling Businesses with Smart Data',
      desc: 'Data and automation working together to boost ROI and performance.',
      views: '55M+ Views',
      cpa: '31% Lower CPA',
      sales: '$1.8M+ Sales Generated',
      img: '/paint.jpg'
    },
    {
      id: 7,
      title: 'Customer Retention Optimization',
      desc: 'Deep insights into how Metro Solver helped reduce churn by 50%.',
      views: '60M+ Views',
      cpa: '35% Lower CPA',
      sales: '$2.9M+ Sales Generated',
      img: '/paint.jpg'
    },
    {
      id: 8,
      title: 'Streamlining Enterprise Operations',
      desc: 'A large enterprise case on efficiency and digital transformation.',
      views: '48M+ Views',
      cpa: '28% Lower CPA',
      sales: '$2.1M+ Sales Generated',
      img: '/paint.jpg'
    }
  ],
  'Blog and News': [
    {
      id: 9,
      title: 'Metro Solver Achieves Major Milestone',
      desc: 'Celebrating our global growth and 2025 achievements.',
      views: '100K+ Reads',
      cpa: 'N/A',
      sales: 'Featured in 50+ Publications',
      img: '/paint.jpg'
    },
    {
      id: 10,
      title: 'Trends in Smart System Design',
      desc: 'What the future holds for metro system innovations.',
      views: '200K+ Reads',
      cpa: 'N/A',
      sales: 'Top Blog of the Month',
      img: '/paint.jpg'
    },
    {
      id: 11,
      title: 'Employee Spotlight: Tech Leaders',
      desc: 'Meet the minds behind our most successful deployments.',
      views: '150K+ Reads',
      cpa: 'N/A',
      sales: 'Internal Culture Series',
      img: '/paint.jpg'
    },
    {
      id: 12,
      title: 'How We Stay Ahead of the Curve',
      desc: 'Insights on our innovation strategies and thought leadership.',
      views: '180K+ Reads',
      cpa: 'N/A',
      sales: 'Global Thought Leadership',
      img: '/paint.jpg'
    }
  ]
}

const tabIcons = {
  'Success Stories': <IoIosTrophy className='text-xl md:text-2xl' />,
  'Case Studies': <MdInsights className='text-xl md:text-2xl' />,
  'Blog and News': <MdArticle className='text-xl md:text-2xl' />
}

export default function SuccessStories () {
  const [activeTab, setActiveTab] = useState('Success Stories')
  const [visibleCount, setVisibleCount] = useState(4)

  const currentData = data[activeTab].slice(0, visibleCount)

  return (
    <section className='w-full bg-[#28303F] text-white pt-[10vh] pb-[10vh] px-4 sm:px-6 lg:px-20 min-h-screen'>
      <div className='text-center mb-12 max-w-4xl mx-auto px-2'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight'>
          The Success Stories, Case Studies & Blog
        </h2>
        <p className='text-gray-300 text-base sm:text-lg'>
          Based on the description of Metro Solver and the image provided, here
          is a 6-step process that Metro Solver uses to scale a customer’s
          business.
        </p>
      </div>

      {/* Tabs */}
      <div className='flex flex-wrap  gap-4 mb-10'>
        {Object.keys(data).map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              setVisibleCount(4)
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? 'bg-gradient-to-t from-[#412178] to-[#361A67]'
                : 'bg-[#313847] text-white'
            }`}
          >
            {tabIcons[tab]} <span>{tab}</span>
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8'>
        {currentData.map(item => (
          <div
            key={item.id}
            className='bg-[#313847] rounded-3xl overflow-hidden group  transition-all duration-300'
          >
            <img
              src={item.img}
              alt={item.title}
              className='w-full h-[200px] sm:h-[220px] md:h-[200px] lg:h-[180px] object-cover opacity-80'
            />
            <div className='p-6 group-hover:bg-[linear-gradient(180deg,_#361A67,_#1B1B31,_#251F40,_#412178)] transition-all duration-500 h-full'>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>
                {item.title}
              </h3>
              <p className='text-gray-300 text-sm mb-6'>{item.desc}</p>
              <div className='flex flex-wrap gap-3 text-sm text-gray-300'>
                <span className='bg-[#39404E] group-hover:bg-[#fff]/10 px-4 py-1 rounded-full transition-all duration-300'>
                  {item.views}
                </span>
                <span className='bg-[#39404E] group-hover:bg-[#fff]/10 px-4 py-1 rounded-full transition-all duration-300'>
                  {item.cpa}
                </span>
                <span className='bg-[#39404E] group-hover:bg-[#fff]/10 px-4 py-1 rounded-full transition-all duration-300'>
                  {item.sales}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      {visibleCount < data[activeTab].length && (
        <div className='text-center mt-12'>
          <button
            onClick={() => setVisibleCount(prev => prev + 3)}
            className='bg-gradient-to-r from-purple-600 to-indigo-500 px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300'
          >
            View More
          </button>
        </div>
      )}
    </section>
  )
}

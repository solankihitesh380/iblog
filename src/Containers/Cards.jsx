import React from 'react'
import { blogs } from '../constants'

const Cards = () => {
  return (
    <section className='w-full px-16 p-6'>
    <div className='flex flex-wrap justify-between'>
    {
        blogs.map((blog)=>(
            <div key={blog.id} className="m-5 max-w-sm rounded overflow-hidden shadow-lg">
    <img
        className="w-full"
        src={blog.imageUrl}
        alt="Sunset in the mountains"
    />
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{blog.title}</div>
        <p className="text-gray-700 text-base">{blog.content.slice(0,150)}
        </p>
        <button className='text-white rounded-xl hover:bg-gray-400 mt-5 p-1'>Read more</button>
    </div>
    <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {blog.tags1}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {blog.tags2}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {blog.tags3}
        </span>
    </div>
    </div>
        ))
    }
    </div>    
    </section>
  )
}

export default Cards
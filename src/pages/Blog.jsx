import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="main">
      <h1 className='share'>Lets's share With  <span className='learn'>Learning</span></h1>

    <div className="blog-container">
      {/* 2. The Problem Section */}
      <section className="blog-section problem-section">
        <h2 className="section-title text-red">
          1. The Problem: Function Re-creation and Load on the Call Stack
        </h2>
        <p className="intro-text">
          As you illustrated with the <code className="inline-code">fetchcustomer()</code> example:
        </p>

        <ul className="blog-list">
          <li>
            Whenever a React component re-renders, any function defined inside it is <strong>created brand new again</strong> (it gets a new Heap Memory address).
          </li>
          <li>
            If this same function is repeatedly called or passed across different places (such as User, Booking, or Payment pages):
            <ul className="nested-list">
              <li>Unnecessary <strong>Memory Allocation</strong> occurs.</li>
              <li>Unnecessary load is placed on the <strong>Call Stack</strong>.</li>
              <li>Child components re-render unnecessarily as well.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* 3. The Solution Section */}
      <section className="blog-section solution-section">
        <h2 className="section-title text-green">
          * The Solution: React <code className="title-code">useCallback</code> Hook
        </h2>
        <blockquote className="quote-box">
          “a new function should be created only if the dependency changes, otherwise the old reference should be reused”
        </blockquote>
        <p className="conclusion-text">
          — this solution is called the <strong>useCallback Hook</strong> in React.
        </p>
      </section>
    </div>
    </div>
  );
}

export default Blog;
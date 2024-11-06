// src/LearningMaterial.js
import React from 'react';
import './LearningMaterial.css'; // Ensure to keep the updated CSS

const LearningMaterial = () => {
  return (
    <div className="learning-material">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>AlgoZenith</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Learn</li>
            <li>Forums</li>
            <li className="active">Upskill</li>
            <li>Contest</li>
            <li>Leaderboard</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header Tabs */}
        <header className="tabs">
          <button className="tab">Mentor Sessions</button>
          <button className="tab active">Learning Material</button>
          <button className="how-it-works">How it works</button>
        </header>

        <div className="content">
          {/* Chapter List */}
          <aside className="chapters">
            <h3>Chapters</h3>
            <ul>
              <li className="chapter active">Chapter 1 <span className="time">05:00:00</span></li>
              <li className="chapter">Chapter 2</li>
              <li className="chapter">Chapter 3</li>
              <li className="chapter">Chapter 4</li>
              <li className="chapter">Chapter 5</li>
            </ul>
          </aside>

          {/* Chapter Details */}
          <section className="chapter-details">
            <div className="part">
              <div className="part-header">
                <h3>Part 1 - Lorem Ipsum Dolor Sit Amet</h3>
                <div className="part-info">
                  <span>02:00:00</span>
                  <span>Medium</span>
                  <span>5 Resources</span>
                  <span>45% Completed</span>
                </div>
              </div>
              <ul className="resources">
                <li>Video 1 <span>10:00</span></li>
                <li>Article 1 <span>10:00</span></li>
                <li className="highlighted">Quiz 1 <span>10:00</span></li>
                <li>Coding Exercise 1 <span>10:00</span></li>
                <li>Combined Resource 1 <span>10:00</span></li>
              </ul>
            </div>

            {/* Additional Parts */}
            <div className="part">
              <div className="part-header">
                <h3>Part 2 - Lorem Ipsum Dolor Sit Amet</h3>
                <div className="part-info">
                  <span>02:00:00</span>
                  <span>Medium</span>
                  <span>12 Resources</span>
                  <span>20% Completed</span>
                </div>
              </div>
            </div>

            <div className="part">
              <div className="part-header">
                <h3>Part 3 - Lorem Ipsum Dolor Sit Amet</h3>
                <div className="part-info">
                  <span>02:00:00</span>
                  <span>Medium</span>
                  <span>12 Resources</span>
                  <span>0% Completed</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LearningMaterial;

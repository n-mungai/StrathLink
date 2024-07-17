// src/HomePage.jsx
import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/students'); // Replace with your backend API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Mock data for fallback
        const mockData = [
          {
            "id": 1,
            "title": "Drama Club Auditions",
            "content": "Join us for our annual drama club auditions!",
            "author": "Peter Kei",
            "venue": "School Auditorium",
            "date": "2024-08-15",
            "time": "3:00 PM"
          },
          {
            "id": 2,
            "title": "Tech Event: AI in Education",
            "content": "Learn about the latest advancements in AI in education.",
            "author": "Hozambee",
            "venue": "Conference Center",
            "date": "2024-09-20",
            "time": "6:00 PM"
          },
          {
            "id": 3,
            "title": "Sports Day: Basketball Tournament",
            "content": "Join us for a fun-filled day of basketball!",
            "author": "Billy Baker",
            "venue": "School BasketBall Pitch",
            "date": "2024-08-22",
            "time": "5:00 PM"
          },
          {
            "id": 4,
            "title": "Mental Awareness Week",
            "content": "Join us for a week of mental health awareness and support.",
            "author": "Abdi",
            "venue": "Amani Counselling Centre",
            "date": "2024-07-25",
            "time": "12:00 PM"
          },
          {
            "id": 5,
            "title": "Community Outreach",
            "content": "Join us for a weekend where we turn frowns into smiles.",
            "author": "Nyakio",
            "venue": "Hope Childrens Home",
            "date": "2024-07-31",
            "time": "12:00 PM"
          }
        ];
        setArticles(mockData);
      }
    };

    fetchData();
  }, []);

  const categorizeArticles = (articles) => {
    const categories = {
      'Drama': [],
      'Sports': [],
      'Tech Events': [],
      'Community Outreach': [],
      'Mentorship': []
    };

    articles.forEach(article => {
      if (article.title.toLowerCase().includes('drama')) {
        categories['Drama'].push(article);
      } else if (article.title.toLowerCase().includes('sports')) {
        categories['Sports'].push(article);
      } else if (article.title.toLowerCase().includes('tech')) {
        categories['Tech Events'].push(article);
      } else if (article.title.toLowerCase().includes('community')) {
        categories['Community Outreach'].push(article);
      } else if (article.title.toLowerCase().includes('mentorship')) {
        categories['Mentorship'].push(article);
      }
    });

    return categories;
  };

  const categorizedArticles = categorizeArticles(articles);

  const renderArticles = (category) => {
    return categorizedArticles[category].map((article, index) => (
      <div className="article" key={index}>
        <div className="article-content">
          <h3>"{article.title}"</h3>
          <p>{article.content}</p>
          <div className="meta-info">
            <span>{article.author}</span>
            <span>{article.date}</span>
            <span>{article.time}</span>
            <span>{article.venue}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      {Object.keys(categorizedArticles).map((category, index) => (
        <div className="category-section" key={index}>
          <h2>{category}</h2>
          <div className="articles">
            {renderArticles(category)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

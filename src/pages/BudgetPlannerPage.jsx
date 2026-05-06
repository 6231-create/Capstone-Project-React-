import { useState, useEffect } from "react";
import "../styles/budget-planner.css";

export default function BudgetPlannerPage() {
  const [tripName, setTripName] = useState("");
  const [totalBudget, setTotalBudget] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("Accommodation");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);

  const categories = [
    "Accommodation",
    "Transportation",
    "Food & Dining",
    "Activities",
    "Shopping",
    "Other"
  ];

  const categoryIcons = {
    "Accommodation": "fa-hotel",
    "Transportation": "fa-car",
    "Food & Dining": "fa-utensils",
    "Activities": "fa-hiking",
    "Shopping": "fa-shopping-bag",
    "Other": "fa-ellipsis-h"
  };

  // Travel stories data with detailed breakdowns
  const travelStories = [
    {
      id: 1,
      destination: "Southeast Asia",
      duration: "3 weeks",
      totalBudget: 2500,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
      traveler: "Sarah & Mike",
      countries: "Thailand, Vietnam, Cambodia",
      description: "An incredible journey through three countries with amazing food, temples, and beaches.",
      breakdown: [
        { category: "Accommodation", amount: 630, description: "Hostels & budget hotels" },
        { category: "Food & Dining", amount: 450, description: "Street food & local restaurants" },
        { category: "Transportation", amount: 420, description: "Buses, trains & flights" },
        { category: "Activities", amount: 600, description: "Tours, temples & diving" },
        { category: "Shopping", amount: 200, description: "Souvenirs & local crafts" },
        { category: "Other", amount: 200, description: "Miscellaneous expenses" }
      ],
      highlights: [
        "Explored Angkor Wat temples",
        "Street food tours in Bangkok",
        "Ha Long Bay cruise",
        "Scuba diving in Koh Tao"
      ],
      tips: [
        "Book accommodations in advance during peak season",
        "Use local transportation to save money",
        "Try street food - it's delicious and cheap!",
        "Negotiate prices at markets"
      ]
    },
    {
      id: 2,
      destination: "European Adventure",
      duration: "2 weeks",
      totalBudget: 4200,
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
      traveler: "Alex Johnson",
      countries: "France, Italy, Spain",
      description: "A whirlwind tour of Europe's most iconic cities with rich culture, art, and cuisine.",
      breakdown: [
        { category: "Accommodation", amount: 1120, description: "Mid-range hotels & Airbnbs" },
        { category: "Food & Dining", amount: 980, description: "Cafes, restaurants & wine" },
        { category: "Transportation", amount: 840, description: "Trains & local transit" },
        { category: "Activities", amount: 840, description: "Museums, tours & shows" },
        { category: "Shopping", amount: 280, description: "Fashion & gifts" },
        { category: "Other", amount: 140, description: "Tips & extras" }
      ],
      highlights: [
        "Eiffel Tower at sunset",
        "Vatican Museums tour",
        "Sagrada Familia Barcelona",
        "Wine tasting in Tuscany"
      ],
      tips: [
        "Get a Eurail pass for unlimited train travel",
        "Visit museums on free days",
        "Book skip-the-line tickets online",
        "Stay in neighborhoods outside tourist centers"
      ]
    },
    {
      id: 3,
      destination: "Tropical Paradise",
      duration: "10 days",
      totalBudget: 1800,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      traveler: "Emma & David",
      countries: "Maldives",
      description: "A romantic getaway to pristine beaches, crystal clear waters, and luxury resorts.",
      breakdown: [
        { category: "Accommodation", amount: 720, description: "Beach resort all-inclusive" },
        { category: "Food & Dining", amount: 360, description: "Included in resort package" },
        { category: "Transportation", amount: 270, description: "Flights & boat transfers" },
        { category: "Activities", amount: 360, description: "Snorkeling & spa treatments" },
        { category: "Shopping", amount: 54, description: "Local handicrafts" },
        { category: "Other", amount: 36, description: "Extras & tips" }
      ],
      highlights: [
        "Overwater bungalow stay",
        "Snorkeling with manta rays",
        "Sunset dolphin cruise",
        "Couples spa day"
      ],
      tips: [
        "Book all-inclusive packages for better value",
        "Visit during shoulder season for lower prices",
        "Bring reef-safe sunscreen",
        "Plan excursions through hotel for convenience"
      ]
    },
    {
      id: 4,
      destination: "Island Hopping",
      duration: "2 weeks",
      totalBudget: 3100,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
      traveler: "Chris & Lisa",
      countries: "Greece",
      description: "Exploring the beautiful Greek islands with stunning sunsets, ancient ruins, and Mediterranean cuisine.",
      breakdown: [
        { category: "Accommodation", amount: 930, description: "Island hotels & villas" },
        { category: "Food & Dining", amount: 775, description: "Tavernas & seaside dining" },
        { category: "Transportation", amount: 620, description: "Ferries & car rentals" },
        { category: "Activities", amount: 465, description: "Boat tours & archaeological sites" },
        { category: "Shopping", amount: 217, description: "Olive oil, wine & ceramics" },
        { category: "Other", amount: 93, description: "Miscellaneous" }
      ],
      highlights: [
        "Santorini sunset in Oia",
        "Ancient ruins of Delos",
        "Beach clubs in Mykonos",
        "Traditional Greek cooking class"
      ],
      tips: [
        "Book ferry tickets in advance in summer",
        "Rent ATVs to explore islands independently",
        "Try local tavernas away from waterfronts",
        "Visit smaller islands for authentic experiences"
      ]
    }
  ];

  const addExpense = (e) => {
    e.preventDefault();
    if (description && amount && parseFloat(amount) > 0) {
      const newExpense = {
        id: Date.now(),
        category,
        description,
        amount: parseFloat(amount),
        date: new Date().toLocaleDateString()
      };
      setExpenses([...expenses, newExpense]);
      setDescription("");
      setAmount("");
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = totalBudget ? parseFloat(totalBudget) - totalSpent : 0;
  const percentSpent = totalBudget ? (totalSpent / parseFloat(totalBudget)) * 100 : 0;

  const categoryTotals = categories.map(cat => ({
    category: cat,
    total: expenses.filter(e => e.category === cat).reduce((sum, e) => sum + e.amount, 0)
  }));

  const openStory = (story) => {
    setSelectedStory(story);
    document.body.style.overflow = 'hidden';
  };

  const closeStory = () => {
    setSelectedStory(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeStory();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="budget-planner-page">
      {/* Hero Section with Background Image */}
      <section className="budget-hero">
        <div className="budget-hero-overlay"></div>
        <div className="budget-hero-bg" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1554224311-beee813a77ca?w=1600&q=80)'
        }}></div>
        <div className="container">
          <div className="budget-hero-content">
            <span className="section-tag">| Budget Planner</span>
            <h1>Plan Your <strong>Dream Trip</strong> Budget</h1>
            <p>Keep track of your travel expenses and stay within budget</p>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <i className="fas fa-wallet"></i>
                <div>
                  <strong>Smart Planning</strong>
                  <span>Track every expense</span>
                </div>
              </div>
              <div className="hero-stat-item">
                <i className="fas fa-chart-line"></i>
                <div>
                  <strong>Real-Time Updates</strong>
                  <span>See your budget live</span>
                </div>
              </div>
              <div className="hero-stat-item">
                <i className="fas fa-piggy-bank"></i>
                <div>
                  <strong>Stay on Track</strong>
                  <span>Never overspend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Budget Tips Section */}
      <section className="budget-intro">
        <div className="container featured-grid">
          <div className="featured-image">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
              alt="Budget Planning"
            />
            <div className="featured-badge">
              <i className="fas fa-lightbulb"></i> Smart Tips
            </div>
          </div>

          <div className="featured-content">
            <span className="section-tag">| Budget Smarter</span>
            <h2>Travel More, <strong>Spend Less</strong></h2>
            <p>
              Our budget planner helps you organize your trip expenses efficiently. 
              Track everything from accommodation to activities, and never worry about 
              unexpected costs ruining your adventure.
            </p>
            <ul className="feat-list">
              <li><i className="fas fa-circle-check"></i> Categorize all your expenses</li>
              <li><i className="fas fa-circle-check"></i> Real-time budget tracking</li>
              <li><i className="fas fa-circle-check"></i> Visual spending breakdown</li>
              <li><i className="fas fa-circle-check"></i> Export and share your budget</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Budget Section */}
      <section className="budget-main">
        <div className="container">
          {/* Quick Stats Cards */}
          <div className="quick-stats-grid">
            <div className="quick-stat-card">
              <div className="stat-icon" style={{background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)'}}>
                <i className="fas fa-sack-dollar"></i>
              </div>
              <div className="stat-info">
                <h4>Total Budget</h4>
                <p className="stat-number">${totalBudget || "0"}</p>
                <span className="stat-label">Set your trip budget</span>
              </div>
            </div>

            <div className="quick-stat-card">
              <div className="stat-icon" style={{background: 'linear-gradient(135deg, #E07070 0%, #F08080 100%)'}}>
                <i className="fas fa-money-bill-trend-up"></i>
              </div>
              <div className="stat-info">
                <h4>Total Spent</h4>
                <p className="stat-number">${totalSpent.toFixed(2)}</p>
                <span className="stat-label">{expenses.length} expenses logged</span>
              </div>
            </div>

            <div className="quick-stat-card">
              <div className="stat-icon" style={{background: remaining >= 0 ? 'linear-gradient(135deg, #7DC87D 0%, #90D890 100%)' : 'linear-gradient(135deg, #C84040 0%, #E07070 100%)'}}>
                <i className={`fas ${remaining >= 0 ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
              </div>
              <div className="stat-info">
                <h4>{remaining >= 0 ? 'Remaining' : 'Over Budget'}</h4>
                <p className="stat-number">${Math.abs(remaining).toFixed(2)}</p>
                <span className="stat-label">{percentSpent.toFixed(1)}% of budget used</span>
              </div>
            </div>
          </div>

          <div className="budget-grid">
            {/* Left Column - Budget Setup & Form */}
            <div className="budget-left">
              {/* Trip Setup */}
              <div className="budget-card">
                <h3><i className="fas fa-plane-departure"></i> Trip Details</h3>
                <div className="budget-form-group">
                  <label>Trip Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Europe Adventure 2026"
                    value={tripName}
                    onChange={(e) => setTripName(e.target.value)}
                  />
                </div>
                <div className="budget-form-group">
                  <label>Total Budget ($)</label>
                  <input
                    type="number"
                    placeholder="Enter your total budget"
                    value={totalBudget}
                    onChange={(e) => setTotalBudget(e.target.value)}
                  />
                </div>
              </div>

              {/* Add Expense Form */}
              <div className="budget-card">
                <h3><i className="fas fa-plus-circle"></i> Add Expense</h3>
                <form onSubmit={addExpense}>
                  <div className="budget-form-group">
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="budget-form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      placeholder="e.g., Hotel booking, Flight ticket"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="budget-form-group">
                    <label>Amount ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    <i className="fas fa-plus"></i> Add Expense
                  </button>
                </form>
              </div>

              {/* Category Breakdown */}
              <div className="budget-card">
                <h3><i className="fas fa-chart-pie"></i> Category Breakdown</h3>
                <div className="category-breakdown">
                  {categoryTotals.map(({ category, total }) => (
                    total > 0 && (
                      <div key={category} className="category-item">
                        <div className="category-info">
                          <i className={`fas ${categoryIcons[category]}`}></i>
                          <span>{category}</span>
                        </div>
                        <span className="category-amount">${total.toFixed(2)}</span>
                      </div>
                    )
                  ))}
                  {categoryTotals.every(c => c.total === 0) && (
                    <p className="empty-state">No expenses added yet</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Overview & Expenses */}
            <div className="budget-right">
              {/* Budget Overview */}
              <div className="budget-card budget-overview">
                <h3><i className="fas fa-wallet"></i> Budget Overview</h3>
                
                <div className="budget-stats">
                  <div className="stat-item">
                    <span className="stat-label">Total Budget</span>
                    <span className="stat-value budget-total">
                      ${totalBudget || "0.00"}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Total Spent</span>
                    <span className="stat-value spent">
                      ${totalSpent.toFixed(2)}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Remaining</span>
                    <span className={`stat-value ${remaining < 0 ? 'over-budget' : 'remaining'}`}>
                      ${Math.abs(remaining).toFixed(2)}
                      {remaining < 0 && " over"}
                    </span>
                  </div>
                </div>

                {totalBudget && (
                  <div className="budget-progress">
                    <div className="progress-bar">
                      <div 
                        className={`progress-fill ${percentSpent > 100 ? 'over' : ''}`}
                        style={{ width: `${Math.min(percentSpent, 100)}%` }}
                      ></div>
                    </div>
                    <span className="progress-label">{percentSpent.toFixed(1)}% Used</span>
                  </div>
                )}
              </div>

              {/* Expenses List */}
              <div className="budget-card expenses-list">
                <h3><i className="fas fa-list"></i> Recent Expenses</h3>
                {expenses.length === 0 ? (
                  <div className="empty-state">
                    <i className="fas fa-receipt"></i>
                    <p>No expenses recorded yet</p>
                    <span>Start adding your trip expenses above</span>
                  </div>
                ) : (
                  <div className="expenses-items">
                    {[...expenses].reverse().map(exp => (
                      <div key={exp.id} className="expense-item">
                        <div className="expense-left">
                          <div className="expense-icon">
                            <i className={`fas ${categoryIcons[exp.category]}`}></i>
                          </div>
                          <div className="expense-details">
                            <h4>{exp.description}</h4>
                            <span className="expense-meta">
                              {exp.category} • {exp.date}
                            </span>
                          </div>
                        </div>
                        <div className="expense-right">
                          <span className="expense-amount">${exp.amount.toFixed(2)}</span>
                          <button 
                            className="delete-btn"
                            onClick={() => deleteExpense(exp.id)}
                            title="Delete expense"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tips Card */}
              <div className="budget-card tips-card">
                <h3><i className="fas fa-lightbulb"></i> Budget Tips</h3>
                <ul className="tips-list">
                  <li><i className="fas fa-check"></i> Book flights and hotels in advance for better rates</li>
                  <li><i className="fas fa-check"></i> Set aside 10-15% for unexpected expenses</li>
                  <li><i className="fas fa-check"></i> Use local transportation to save on travel costs</li>
                  <li><i className="fas fa-check"></i> Look for free activities and attractions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="budget-gallery">
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '48px'}}>
            <span className="section-tag">| Budget Inspiration</span>
            <h2>Smart Travelers <strong>Share Their Stories</strong></h2>
            <p style={{color: 'var(--text-muted)', maxWidth: '700px', margin: '16px auto 0'}}>
              Click on any trip to see detailed budget breakdowns, tips, and highlights from real travelers
            </p>
          </div>
          <div className="gallery-grid">
            {travelStories.map((story) => (
              <div 
                key={story.id} 
                className="gallery-item"
                onClick={() => openStory(story)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && openStory(story)}
              >
                <img src={story.image} alt={story.destination} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>{story.destination}</h4>
                    <p className="story-traveler">
                      <i className="fas fa-user"></i> {story.traveler}
                    </p>
                    <p className="story-budget">
                      <i className="fas fa-coins"></i> ${story.totalBudget.toLocaleString()} / {story.duration}
                    </p>
                    <p className="story-countries">
                      <i className="fas fa-map-marker-alt"></i> {story.countries}
                    </p>
                  </div>
                  <div className="gallery-cta">
                    <span>Click to view details</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="story-modal" onClick={closeStory}>
          <div className="story-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeStory}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <div className="modal-image">
                <img src={selectedStory.image} alt={selectedStory.destination} />
              </div>
              <div className="modal-header-content">
                <span className="section-tag">| Travel Story</span>
                <h2>{selectedStory.destination}</h2>
                <div className="modal-meta">
                  <span><i className="fas fa-user"></i> {selectedStory.traveler}</span>
                  <span><i className="fas fa-calendar"></i> {selectedStory.duration}</span>
                  <span><i className="fas fa-map-marker-alt"></i> {selectedStory.countries}</span>
                </div>
                <p className="modal-description">{selectedStory.description}</p>
                <div className="modal-total">
                  <span>Total Budget</span>
                  <strong>${selectedStory.totalBudget.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="modal-body">
              {/* Budget Breakdown */}
              <div className="modal-section">
                <h3><i className="fas fa-chart-pie"></i> Budget Breakdown</h3>
                <div className="breakdown-list">
                  {selectedStory.breakdown.map((item, index) => {
                    const percentage = ((item.amount / selectedStory.totalBudget) * 100).toFixed(1);
                    return (
                      <div key={index} className="breakdown-item">
                        <div className="breakdown-header">
                          <div className="breakdown-title">
                            <i className={`fas ${categoryIcons[item.category]}`}></i>
                            <div>
                              <h4>{item.category}</h4>
                              <p>{item.description}</p>
                            </div>
                          </div>
                          <div className="breakdown-amount">
                            <strong>${item.amount.toLocaleString()}</strong>
                            <span>{percentage}%</span>
                          </div>
                        </div>
                        <div className="breakdown-bar">
                          <div 
                            className="breakdown-bar-fill" 
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Highlights & Tips */}
              <div className="modal-columns">
                <div className="modal-section">
                  <h3><i className="fas fa-star"></i> Trip Highlights</h3>
                  <ul className="highlight-list">
                    {selectedStory.highlights.map((highlight, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3><i className="fas fa-lightbulb"></i> Budget Tips</h3>
                  <ul className="highlight-list">
                    {selectedStory.tips.map((tip, index) => (
                      <li key={index}>
                        <i className="fas fa-circle-check"></i>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="budget-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <i className="fas fa-chart-pie"></i>
            </div>
            <div className="cta-text">
              <h3>Ready to Start Your Budget?</h3>
              <p>Join thousands of travelers who plan smarter and travel better with our budget planner</p>
            </div>
            <button className="btn-cta" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Start Planning Now <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

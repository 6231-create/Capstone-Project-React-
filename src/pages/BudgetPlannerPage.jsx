import { useState, useEffect } from "react";
import "../styles/budget-planner.css";

export default function BudgetPlannerPage() {
  const [tripName, setTripName] = useState("");
  const [totalBudget, setTotalBudget] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("Accommodation");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

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

  return (
    <div className="budget-planner-page">
      {/* Hero Section */}
      <section className="budget-hero">
        <div className="container">
          <div className="budget-hero-content">
            <span className="section-tag">| Budget Planner</span>
            <h1>Plan Your <strong>Dream Trip</strong> Budget</h1>
            <p>Keep track of your travel expenses and stay within budget</p>
          </div>
        </div>
      </section>

      {/* Main Budget Section */}
      <section className="budget-main">
        <div className="container">
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
    </div>
  );
}

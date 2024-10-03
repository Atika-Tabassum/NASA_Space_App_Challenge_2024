import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "./daily.css"; // Import your CSS for styling

const DailyGoal= () => {
    // Sample goals
    const initialGoals = [
        { id: 1, title: "Exercise for 30 minutes", completed: false },
        { id: 2, title: "Read a chapter of a book", completed: false },
        { id: 3, title: "Meditate for 10 minutes", completed: false },
        { id: 4, title: "Complete a work task", completed: false },
    ];

    const [goals, setGoals] = useState(initialGoals);

    // Toggle goal completion
    const toggleGoalCompletion = (id) => {
        const updatedGoals = goals.map((goal) =>
            goal.id === id ? { ...goal, completed: !goal.completed } : goal
        );
        setGoals(updatedGoals);
    };

    // Calculate completed and remaining goals
    const completedGoalsCount = goals.filter(goal => goal.completed).length;
    const remainingGoalsCount = goals.length - completedGoalsCount;

    // Chart data
    const data = {
        labels: ["Completed", "Remaining"],
        datasets: [
            {
                data: [completedGoalsCount, remainingGoalsCount],
                backgroundColor: ["#588061", "#E7B5AC"],
                hoverBackgroundColor: ["#45a049", "#ff6384"],
            },
        ],
    };

    return (
        <div className="daily-goal-challenge">
            <div style={{fontWeight:600, fontSize:50, margin:70}}>Daily Goal Challenge</div>
            <div className="goal-list">
                {goals.map((goal) => (
                    <div
                        key={goal.id}
                        className={`goal-card ${goal.completed ? "completed" : ""}`}
                        onClick={() => toggleGoalCompletion(goal.id)}
                    >
                        <input
                            type="checkbox"
                            checked={goal.completed}
                            readOnly
                        />
                        <span className="goal-title">{goal.title}</span>
                    </div>
                ))}
            </div>
            <div className="chart-container">
                <Pie data={data} />
            </div>
        </div>
    );
};

export default DailyGoal;

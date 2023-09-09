import React, { Component } from 'react';
import '../styling/new-calendar.css';

class GitHubContributionGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squaresData: [],
            userHabits: {},
            selectedColor: '',
        };
    }

    componentDidMount() {
        this.generateRandomHabitsData();
        this.generateSquaresData();
    }

    generateRandomHabitsData() {
        const randomHabitsData = {};
        for (let i = 1; i < 365; i++) {
            if (Math.random() < 0.2) { 
                const date = new Date(2023, 0, i);
                const dateString = date.toISOString().slice(0, 10);
                randomHabitsData[dateString] = '#800080';
            }
        }
        this.setState({ userHabits: randomHabitsData }, () => {
            this.generateSquaresData(); 
        });
    }

    generateSquaresData() {
        const squaresData = [];
        for (let i = 1; i < 365; i++) {
            const date = new Date(2023, 0, i); 
            const dateString = date.toISOString().slice(0, 10);

            const color = this.state.userHabits[dateString] || this.state.selectedColor;

            squaresData.push({ level: color });
        }
        this.setState({ squaresData });
    }

    handleSquareClick(dateString) {
        const updatedUserHabits = { ...this.state.userHabits };
        updatedUserHabits[dateString] = this.state.selectedColor;
        this.setState({ userHabits: updatedUserHabits }, () => {
            this.generateSquaresData(); 
        });
    }

    render() {
        const getDateStringForIndex = (index) => {
            const date = new Date(2023, 0, index + 1);
            return date.toISOString().slice(0, 10);
        };

        return (
            <div className="graph">
                <ul className="months">
                    <li>Jan</li>
                    <li>Feb</li>
                    <li>Mar</li>
                    <li>Apr</li>
                    <li>May</li>
                    <li>Jun</li>
                    <li>Jul</li>
                    <li>Aug</li>
                    <li>Sep</li>
                    <li>Oct</li>
                    <li>Nov</li>
                    <li>Dec</li>
                </ul>
                <ul className="days">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul className="squares">
                    {this.state.squaresData.map((square, index) => (
                        <li
                            key={index}
                            style={{ backgroundColor: square.level }}
                            onClick={() => this.handleSquareClick(getDateStringForIndex(index))}
                        ></li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default GitHubContributionGraph;

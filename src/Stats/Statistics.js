import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Fragment } from 'react';
import Header from '../general/Header';
import '../general/general.css';
import './stat.css';

const Statistics = () => {
    return (
        <Fragment>
            <Header title="Statistics"/>
            <div className="stats-container">
                <div className='datacard stat1'>
                    <Line
                        data={
                            {
                                labels: ['A', 'B', 'C'],
                                datasets: [
                                    {
                                        label: 'Points',
                                        data: [3, 2, 1],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)'
                                        ],
                                        borderWidth: 1
                                    }
                                ]
                            }
                        }
                    />
                </div>
                <div className='dataGrid'>
                    <div className="datacard stat2">
                        <Bar
                            data={
                                {
                                    labels: ['A', 'B', 'C'],
                                    datasets: [
                                        {
                                            label: 'Points',
                                            data: [3, 2, 1],
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)'
                                            ],
                                            borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(255, 206, 86, 1)'
                                            ],
                                            borderWidth: 1
                                        }
                                    ]
                                }
                            }
                        />
                    </div>
                    <div className='datacard stat3'>
                        <Doughnut
                            data={
                                {
                                    labels: ['A', 'B', 'C'],
                                    datasets: [
                                        {
                                            label: 'Points',
                                            data: [3, 2, 1],
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)'
                                            ],
                                            borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(255, 206, 86, 1)'
                                            ],
                                            borderWidth: 1
                                        }
                                    ]
                                }
                            }
                        />
                    </div>

                </div>

            </div>
        </Fragment>
    );
}

export default Statistics;

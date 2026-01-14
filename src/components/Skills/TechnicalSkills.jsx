import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/src/vanta.globe';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Radar, Pie, PolarArea, Bar, Doughnut, Line, Scatter, Bubble } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const TechnicalSkills = () => {
  const vantaRef = useRef(null);

  // Vanta.js effect
  useEffect(() => {
    let vantaEffect = null;

    if (vantaRef.current) {
      vantaEffect = GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f83f8,
        backgroundColor: 0xf8fafc,
        size: 0.8
      });
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  // Chart data and options
  const chartData = {
    aiSkills: {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'AI/ML Skills',
      data: [
        { x: 1, y: 3, label: 'Machine Learning' },
        { x: 2, y: 2, label: 'Deep Learning' },
        { x: 3, y: 4, label: 'Computer Vision' },
        { x: 4, y: 5, label: 'LLM Integration' },
        { x: 5, y: 7, label: 'Data Analysis' },
        { x: 6, y: 6, label: 'Model Deployment' }
      ],
      backgroundColor: 'rgba(196, 230, 4, 0.7)',
      borderColor: 'rgba(183, 214, 7, 0.81)',
      borderWidth: 2,
      pointRadius: 8,
      pointHoverRadius: 10
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: 0,
        max: 7,
        title: {
          display: true,
          text: 'Skill Categories'
        }
      },
      y: {
        min: 0,
        max: 10,
        title: {
          display: true,
          text: 'Expertise Level'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.raw.label + ': ' + context.parsed.y;
          }
        }
      },
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12,
          padding: 15
        }
      }
    }
  }
},
    languages: {
      type: 'radar',
      data: {
        labels: ['Java', 'C#', 'Python', 'SQL', 'JavaScript', 'XML', 'HTML', 'CSS', 'R'],
        datasets: [{
          label: 'Expertise Level',
          data: [6, 6, 5, 7, 7, 6, 8, 8, 5],
          backgroundColor: 'rgba(79, 70, 229, 0.2)',
          borderColor: 'rgba(79, 70, 229, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(79, 70, 229, 1)',
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        scales: {
          r: {
            angleLines: { display: true },
            suggestedMin: 0,
            suggestedMax: 10
          }
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          }
        }
      }
    },
    frameworks: {
      type: 'pie',
      data: {
        labels: ['Spring Boot', 'RestAssured', 'React', 'Tailwind CSS', 'Lucid React', 'Vite', 'JUnit', 'TestNG', 'Maven', 'Selenium', 'Appium'],
        datasets: [{
          data: [6, 5, 6, 5, 6, 4, 6, 5, 5,5,4],
          backgroundColor: [
            'rgba(126, 34, 206, 0.7)',
            'rgba(107, 33, 168, 0.7)',
            'rgba(88, 28, 135, 0.7)',
            'rgba(76, 29, 149, 0.7)',
            'rgba(91, 33, 182, 0.7)',
            'rgba(109, 40, 217, 0.7)',
            'rgba(124, 58, 237, 0.7)',
            'rgba(139, 92, 246, 0.7)',
            'rgba(107, 33, 150, 0.7)',
            'rgba(107, 7, 243, 0.7)',
            'rgba(139, 92, 246, 0.7)'
          ],
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          }
        }
      }
    },
    testing: {
      type: 'polarArea',
      data: {
        labels: ['Selenium', 'HP QC/QTP', 'Jira', 'Confluence', 'Smartsheet', 'Excel', 'Power BI', 'Tableau', 'Postman', 'BugZilla', 'Jupyter'],
        datasets: [{
          data: [6, 5, 8, 7, 6, 7, 5, 6, 6, 6, 6],
          backgroundColor: [
            'rgba(236, 72, 153, 0.7)',
            'rgba(219, 39, 119, 0.7)',
            'rgba(190, 24, 93, 0.7)',
            'rgba(157, 23, 77, 0.7)',
            'rgba(131, 24, 67, 0.7)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(249, 168, 212, 0.7)',
            'rgba(244, 114, 182, 0.7)',
            'rgba(240, 171, 252, 0.7)',
            'rgba(253, 164, 175, 0.7)'
          ],
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          }
        }
      }
    },
    databases: {
      type: 'bar',
      data: {
        labels: ['Excel', 'Oracle', 'SQL Server', 'MySQL', 'DB2', 'Teradata', 'Derby', 'Squirrel', 'NoSQL', 'Snowflake', 'R', 'DataBricks'],
        datasets: [{
          label: 'Expertise Level',
          data: [8, 4, 7, 6, 6, 5, 4, 5, 3, 6, 3, 2],
          backgroundColor: 'rgba(37, 99, 235, 0.7)',
          borderColor: 'rgba(37, 99, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          }
        }
      }
    },
    servers: {
      type: 'doughnut',
      data: {
        labels: ['Windows Server', 'Node JS','Apache Tomcat', 'IIS', 'WebSphere'],
        datasets: [{
          data: [ 6, 5, 5, 4, 7],
          backgroundColor: [
            'rgba(22, 163, 74, 0.7)',
            'rgba(20, 83, 45, 0.7)',
            'rgba(74, 222, 128, 0.7)',
            'rgba(134, 239, 172, 0.7)',
            'rgba(187, 247, 208, 0.7)'
          ],
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          }
        }
      }
    },
    networking: {
      type: 'line',
      data: {
        labels: ['DHCP', 'VPN', 'FTP', 'DNS', 'Subnet Mask', 'IPv4/6', 'LAN/WAN', 'WEP/WPA'],
        datasets: [{
          label: 'Expertise Level',
          data: [7, 8, 6, 8, 7, 6, 7, 6],
          fill: true,
          backgroundColor: 'rgba(234, 179, 8, 0.2)',
          borderColor: 'rgba(234, 179, 8, 1)',
          tension: 0.3,
          pointBackgroundColor: 'rgba(234, 179, 8, 1)',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          }
        }
      }
    },

    dataAnalytics: {
  type: 'bubble', // Changed from 'bar'
  data: {
    datasets: [{
      label: 'Expertise Level',
      // Map labels to x, values to y, and scale y for radius r
      data: [
        { x: 10, y: 6, r: 15 }, // Power BI
        { x: 20, y: 5, r: 12 }, // Tableau
        { x: 30, y: 8, r: 20 }, // Excel
        { x: 40, y: 7, r: 18 }, // Google Sheets
        { x: 50, y: 6, r: 15 }, // BigQuery
        { x: 60, y: 6, r: 15 }, // Jupyter
        { x: 70, y: 7, r: 18 }, // SQL Analysis
        { x: 80, y: 6, r: 15 }  // Data Cleaning
      ],
      backgroundColor: 'rgba(16, 185, 129, 0.7)',
      borderColor: 'rgba(5, 150, 105, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { 
        beginAtZero: true, 
        max: 10,
        title: { display: true, text: 'Expertise Level' }
      },
      x: { 
        display: false, // Hide X axis as it's only used for spacing
        suggestedMin: 0,
        suggestedMax: 90 
      }
    },
    plugins: {
      legend: { position: 'right', labels: { boxWidth: 12, padding: 15 } },
      tooltip: {
        callbacks: {
          // This maps the skill name back to the bubble on hover
          label: function(context) {
            const labels = ['Power BI', 'Tableau', 'Excel', 'Google Sheets', 'BigQuery', 'Jupyter', 'SQL Analysis', 'Data Cleaning'];
            const label = labels[context.dataIndex];
            return `${label}: Level ${context.raw.y}`;
          }
        }
      }
    }
  }
},


  itSupport: {
    type: 'bar',
    data: {
      labels: ['CompTIA IT Fundamentals', 'Network+', 'Windows OS', 'Linux OS', 'macOS', 'RaspBerry Pi','VirtualBox', 'VMware', 'Troubleshooting'],
      datasets: [{
        data: [7, 6, 9, 7, 8, 6, 6, 8],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(37, 99, 235, 0.7)',
          'rgba(14, 165, 233, 0.7)',
          'rgba(6, 182, 212, 0.7)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(22, 163, 74, 0.7)',
          'rgba(5, 150, 48, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(13, 224, 224, 0.7)'
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: { position: 'right', labels: { boxWidth: 12, padding: 15 } }
      }
    }
  }

  };

  const chartComponents = {
    radar: Radar,
    pie: Pie,
    polarArea: PolarArea,
    bar: Bar,
    doughnut: Doughnut,
    line: Line,
    scatter: Scatter,
    bubble: Bubble
  };

  const charts = [
    { id: 'aiSkills', title: 'AI/ML Skills', color: 'text-teal-700' },
    { id: 'languages', title: 'Programming Languages', color: 'text-indigo-700' },
    { id: 'frameworks', title: 'Frameworks & Testing', color: 'text-purple-700' },
    { id: 'testing', title: 'Testing & Analysis Tools', color: 'text-pink-700' },
    { id: 'databases', title: 'Databases', color: 'text-blue-700' },
    { id: 'servers', title: 'Servers & OS', color: 'text-green-700' },
    { id: 'networking', title: 'Networking', color: 'text-yellow-600' },
    { id: 'dataAnalytics', title: 'Data Analytics', color: 'text-emerald-600' },
    { id: 'itSupport', title: 'IT Support', color: 'text-cyan-600' }
  ];

  return (
    <div className="relative min-h-screen">
      <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-50"></div>
      <div className="space-y-8 relative z-10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {charts.map(({ id, title, color }) => {
            const ChartComponent = chartComponents[chartData[id].type];
            return (
              <div
                key={id}
                className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className={`text-2xl font-bold text-center mb-6 ${color}`}>{title}</h2>
                <div className="h-80 w-full">  {/* Fixed height container */}
                  <ChartComponent
                    data={chartData[id].data}
                    options={chartData[id].options}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
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
import { Radar, Pie, PolarArea, Bar, Doughnut, Line } from 'react-chartjs-2';

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
    languages: {
      type: 'radar',
      data: {
        labels: ['Java', 'C#', 'Python', 'SQL', 'JavaScript', 'XML', 'HTML', 'CSS', 'R'],
        datasets: [{
          label: 'Expertise Level',
          data: [9, 8, 9, 8, 7, 6, 8, 8, 5],
          backgroundColor: 'rgba(79, 70, 229, 0.2)',
          borderColor: 'rgba(79, 70, 229, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(79, 70, 229, 1)',
          pointRadius: 4
        }]
      },
      options: {
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
        },
        layout: {
          padding: {
            right: 20
          }
        }
      }
    },
    frameworks: {
      type: 'pie',
      data: {
        labels: ['Spring Boot', '.NET', 'Django', 'Flask', 'JUnit', 'TestNG', 'Maven', 'Selenium', 'Appium'],
        datasets: [{
          data: [7, 8, 6, 5, 8, 7, 6, 9, 5],
          backgroundColor: [
            'rgba(126, 34, 206, 0.7)',
            'rgba(107, 33, 168, 0.7)',
            'rgba(88, 28, 135, 0.7)',
            'rgba(76, 29, 149, 0.7)',
            'rgba(91, 33, 182, 0.7)',
            'rgba(109, 40, 217, 0.7)',
            'rgba(124, 58, 237, 0.7)',
            'rgba(139, 92, 246, 0.7)',
            'rgba(165, 180, 252, 0.7)'
          ],
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          }
        },
        layout: {
          padding: {
            right: 20
          }
        }
      }
    },
    testing: {
      type: 'polarArea',
      data: {
        labels: ['Selenium', 'HP QC/QTP', 'Jira', 'Confluence', 'Smartsheet', 'Power BI', 'Tableau', 'Postman', 'BugZilla', 'Jupyter'],
        datasets: [{
          data: [9, 7, 8, 7, 6, 5, 6, 8, 6, 7],
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
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          }
        },
        layout: {
          padding: {
            right: 20
          }
        }
      }
    },
    databases: {
      type: 'bar',
      data: {
        labels: ['Oracle', 'SQL Server', 'MySQL', 'DB2', 'Teradata', 'Derby', 'Squirrel', 'NoSQL', 'Snowflake'],
        datasets: [{
          label: 'Expertise Level',
          data: [8, 8, 9, 6, 5, 4, 5, 7, 6],
          backgroundColor: 'rgba(37, 99, 235, 0.7)',
          borderColor: 'rgba(37, 99, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
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
        },
        layout: {
          padding: {
            right: 20
          }
        }
      }
    },
    servers: {
      type: 'doughnut',
      data: {
        labels: ['Windows 7-11', 'Linux', 'macOS', 'Windows Server', 'Apache Tomcat', 'IIS', 'WebSphere', 'Raspberry Pi'],
        datasets: [{
          data: [9, 7, 8, 6, 5, 5, 4, 7],
          backgroundColor: [
            'rgba(22, 163, 74, 0.7)',
            'rgba(21, 128, 61, 0.7)',
            'rgba(22, 101, 52, 0.7)',
            'rgba(20, 83, 45, 0.7)',
            'rgba(74, 222, 128, 0.7)',
            'rgba(134, 239, 172, 0.7)',
            'rgba(187, 247, 208, 0.7)',
            'rgba(220, 252, 231, 0.7)'
          ],
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          }
        },
        layout: {
          padding: {
            right: 20
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
        },
        layout: {
          padding: {
            right: 20
          }
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
    line: Line
  };

  const charts = [
    { id: 'languages', title: 'Programming Languages', color: 'indigo-700' },
    { id: 'frameworks', title: 'Frameworks & Testing', color: 'purple-700' },
    { id: 'testing', title: 'Testing & Analysis Tools', color: 'pink-700' },
    { id: 'databases', title: 'Databases', color: 'blue-700' },
    { id: 'servers', title: 'Servers & OS', color: 'green-700' },
    { id: 'networking', title: 'Networking', color: 'yellow-600' }
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
                <h2 className={`text-2xl font-bold text-center mb-6 text-${color}`}>{title}</h2>
                <div className="h-80 w-full">
                  <ChartComponent 
                    data={chartData[id].data} 
                    options={{
                      ...chartData[id].options,
                      responsive: true,
                      maintainAspectRatio: false
                    }} 
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
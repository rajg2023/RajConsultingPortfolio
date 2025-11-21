// src/components/common/ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white">
                    {/* Night Sky Background */}
                    <div className="fixed inset-0 overflow-hidden">
                        {/* Stars */}
                        {[...Array(100)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute bg-white rounded-full animate-pulse"
                                style={{
                                    width: `${Math.random() * 3}px`,
                                    height: `${Math.random() * 3}px`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    opacity: Math.random(),
                                    animationDuration: `${2 + Math.random() * 3}s`,
                                    animationDelay: `${Math.random() * 2}s`
                                }}
                            />
                        ))}

                        {/* Shooting Stars */}
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={`shooting-${i}`}
                                className="absolute h-0.5 bg-gradient-to-r from-white to-transparent"
                                style={{
                                    width: '100px',
                                    transform: 'rotate(-45deg)',
                                    top: `${10 + Math.random() * 80}%`,
                                    left: `${Math.random() * 100}%`,
                                    animation: `shooting ${3 + Math.random() * 2}s ${Math.random() * 5}s infinite`
                                }}
                            />
                        ))}
                    </div>

                    {/* Enhanced Error Content */}
                    <div className="relative z-10 min-h-screen flex items-start py-12 px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-6xl mx-auto">
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
                                <div className="p-8">
                                    <div className="text-center mb-8">
                                        <div className="text-6xl mb-4">🚀</div>
                                        <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                            Houston, We Have a Problem
                                        </h1>
                                        <p className="text-slate-300 text-lg">
                                            We've encountered an unexpected error. Our team has been notified.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 mb-8 overflow-hidden">
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-slate-200 mb-4">Error Details</h3>
                                            <div className="bg-black/30 p-4 rounded-lg mb-4">
                                                <code className="text-red-400 font-mono text-sm break-words">
                                                    {this.state.error && this.state.error.toString()}
                                                </code>
                                            </div>

                                            <details className="w-full">
                                                <summary className="text-blue-400 hover:text-blue-300 cursor-pointer text-sm font-medium mb-2 flex items-center">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                    Show Technical Details
                                                </summary>
                                                <div className="mt-3 bg-black/40 p-4 rounded-lg overflow-auto max-h-96">
                                                    <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap break-words">
                                                        {this.state.errorInfo?.componentStack || 'No stack trace available'}
                                                    </pre>
                                                </div>
                                            </details>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                                        <button
                                            onClick={this.handleReload}
                                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center group"
                                        >
                                            <svg
                                                className="w-5 h-5 mr-2 group-hover:animate-spin"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                            Reload Application
                                        </button>

                                        <button
                                            onClick={() => {
                                                const errorReport = `Error: ${this.state.error && this.state.error.toString()}\n\nStack Trace:\n${this.state.errorInfo?.componentStack || 'No stack trace available'}`;
                                                navigator.clipboard.writeText(errorReport);
                                            }}
                                            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                            Copy Error
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <style jsx global>{`
            @keyframes shooting {
              0% {
                transform: translateX(0) rotate(-45deg);
                opacity: 1;
              }
              100% {
                transform: translateX(1000px) rotate(-45deg);
                opacity: 0;
              }
            }
          `}</style>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
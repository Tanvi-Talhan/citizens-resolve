import React, { useState } from 'react';

function IssueTracker() {
    // Sample state to hold issues
    const [issues, setIssues] = useState([
        {
            id: 1,
            fullName: 'John Doe',
            phoneNumber: '+1234567890',
            email: 'johndoe@example.com',
            issueType: 'Water Problem',
            location: '1234 Elm Street, Springfield',
            dateOfOccurrence: '07-08-2024',
            timeOfOccurrence: '14:30',
            severityLevel: 'Low',
            issueStatus: 'Pending',
            description: 'There is a persistent leak in the main water pipe.',
            supportingDocument: 'leak.jpg',
            confirmInfo: true,
            agreePolicy: true,
        },
        // Add more issue objects here...
    ]);

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-8">Personal Issue Tracker</h1>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Full Name</th>
                                    <th className="py-3 px-6 text-left">Issue Type</th>
                                    <th className="py-3 px-6 text-left">Location</th>
                                    <th className="py-3 px-6 text-left">Date</th>
                                    <th className="py-3 px-6 text-left">Severity</th>
                                    <th className="py-3 px-6 text-left">Status</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {issues.map((issue) => (
                                    <tr key={issue.id} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left">{issue.fullName}</td>
                                        <td className="py-3 px-6 text-left">{issue.issueType}</td>
                                        <td className="py-3 px-6 text-left">{issue.location}</td>
                                        <td className="py-3 px-6 text-left">{issue.dateOfOccurrence}</td>
                                        <td className="py-3 px-6 text-left">{issue.severityLevel}</td>
                                        <td className="py-3 px-6 text-left">{issue.issueStatus}</td>
                                        <td className="py-3 px-6 text-left">
                                            <button className="bg-blue-500 text-white px-4 py-1 rounded shadow-lg hover:bg-blue-600 transition-all">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {issues.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4">No issues reported yet.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default IssueTracker

import React from 'react'

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Security</h1>
          <p className="text-xl text-gray-600">
            Learn how we keep your data and interactions safe on Flourish.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We use industry-standard encryption to protect your personal information and conversations.
              All data is encrypted both in transit and at rest.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>End-to-end encryption for messages</li>
              <li>Secure data storage with regular backups</li>
              <li>Regular security audits and updates</li>
              <li>Compliance with data protection regulations</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Safety</h2>
            <p className="text-gray-600 mb-4">
              Your safety is our top priority. We have multiple systems in place to ensure a safe
              dating environment.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Profile verification system</li>
              <li>AI-powered content moderation</li>
              <li>24/7 support team monitoring</li>
              <li>Easy reporting and blocking tools</li>
              <li>Background check integration (optional)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy Controls</h2>
            <p className="text-gray-600 mb-4">
              You have full control over your privacy settings and what information you share.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Granular privacy settings</li>
              <li>Control who can see your profile</li>
              <li>Anonymous browsing options</li>
              <li>Data deletion tools</li>
              <li>Location privacy controls</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reporting Issues</h2>
            <p className="text-gray-600 mb-4">
              If you encounter any security issues or suspicious behavior, please report it immediately.
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
              Report Security Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityPage


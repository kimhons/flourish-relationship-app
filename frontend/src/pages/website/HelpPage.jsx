import React from 'react'

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions and get support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-gray-900">How do I create an account?</h3>
                <p className="text-gray-600 text-sm">Click "Sign Up" and follow the onboarding process.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">How does AI matching work?</h3>
                <p className="text-gray-600 text-sm">Our AI analyzes your preferences and behavior to find compatible matches.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Is Flourish free to use?</h3>
                <p className="text-gray-600 text-sm">Yes, basic features are free. Premium features require a subscription.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Account & Profile</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-gray-900">How do I update my profile?</h3>
                <p className="text-gray-600 text-sm">Go to Settings > Profile to edit your information.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Can I delete my account?</h3>
                <p className="text-gray-600 text-sm">Yes, you can delete your account in Settings > Account.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">How do I change my preferences?</h3>
                <p className="text-gray-600 text-sm">Update your matching preferences in the Discover settings.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Safety & Security</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-gray-900">How do I report someone?</h3>
                <p className="text-gray-600 text-sm">Use the report button on their profile or in messages.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Is my data secure?</h3>
                <p className="text-gray-600 text-sm">Yes, we use industry-standard encryption to protect your data.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">How do I block someone?</h3>
                <p className="text-gray-600 text-sm">Go to their profile and select "Block User".</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h2>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpPage


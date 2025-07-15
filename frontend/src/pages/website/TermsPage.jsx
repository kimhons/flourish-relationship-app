import React from 'react'

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using Flourish.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Flourish, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily use Flourish for personal, non-commercial
              transitory viewing only.
            </p>

            <h2>User Conduct</h2>
            <p>
              You agree to use Flourish in a respectful manner and not to engage in any
              behavior that could harm other users or the platform.
            </p>

            <h2>Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also
              governs your use of the service.
            </p>

            <h2>Modifications</h2>
            <p>
              Flourish may revise these terms of service at any time without notice. By using
              this service, you are agreeing to be bound by the current version of these terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage


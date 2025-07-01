import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const OnboardingFlow = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Onboarding Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Onboarding process coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default OnboardingFlow

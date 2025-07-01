import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const MatchesPage = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your matches coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default MatchesPage

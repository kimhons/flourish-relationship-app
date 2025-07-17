import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { FlourishButton, FlourishCard, FlourishLogo } from '../../components/flourish'
import { Input } from '@/components/ui/input'
import { useAuth } from '../../contexts/AuthContext'
import { useNotification } from '../../contexts/NotificationContext'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const { login } = useAuth()
  const { showError, showSuccess } = useNotification()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await login(email, password)
      showSuccess('Welcome back!')
      navigate('/dashboard')
    } catch (error) {
      showError(error.message || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flourish-min-h-screen flourish-flex-center flourish-p-md" style={{ background: 'var(--flourish-background)' }}>
      <div className="flourish-container-sm">
        <div className="flourish-text-center flourish-mb-2xl">
          <div className="flourish-mb-lg">
            <FlourishLogo size={80} showText={false} />
          </div>
          <h1 className="flourish-heading-1 flourish-mb-sm">Welcome Back</h1>
          <p className="flourish-body">Sign in to continue your journey</p>
        </div>

        <FlourishCard padding="large" shadow="lg" className="flourish-fade-in">
          <div className="flourish-mb-lg">
            <h2 className="flourish-heading-4 flourish-text-center">Sign In</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="flourish-flex-col" style={{ gap: 'var(--flourish-space-md)' }}>
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  borderRadius: 'var(--flourish-radius-lg)',
                  border: '1px solid var(--flourish-border)',
                  padding: 'var(--flourish-space-sm) var(--flourish-space-md)',
                  fontSize: 'var(--flourish-font-size-base)',
                  transition: 'var(--flourish-transition-fast)'
                }}
              />
            </div>
            
            <div className="flourish-relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  borderRadius: 'var(--flourish-radius-lg)',
                  border: '1px solid var(--flourish-border)',
                  padding: 'var(--flourish-space-sm) var(--flourish-space-md)',
                  fontSize: 'var(--flourish-font-size-base)',
                  transition: 'var(--flourish-transition-fast)',
                  paddingRight: '2.5rem'
                }}
              />
              <button
                type="button"
                className="flourish-absolute"
                style={{
                  right: 'var(--flourish-space-sm)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--flourish-text-tertiary)',
                  padding: 'var(--flourish-space-xs)'
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <FlourishButton 
              type="submit" 
              variant="primary"
              size="large"
              fullWidth
              loading={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </FlourishButton>
          </form>

          <div className="flourish-mt-xl flourish-text-center">
            <p className="flourish-body-sm">
              Don't have an account?{' '}
              <Link 
                to="/register" 
                className="flourish-text-gradient"
                style={{ textDecoration: 'none', fontWeight: 'var(--flourish-font-weight-medium)' }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </FlourishCard>
      </div>
    </div>
  )
}

export default LoginPage


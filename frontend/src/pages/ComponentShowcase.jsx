import React, { useState } from 'react';
import {
  FlourishButton,
  FlourishCard,
  FlourishLogo,
  FlourishInput,
  FlourishBadge,
  FlourishModal,
  ConfirmModal,
  FlourishAvatar,
  FlourishAvatarGroup,
  FlourishProgress,
  FlourishStepProgress,
  FlourishMultiProgress
} from '../components/flourish';
import { 
  Heart, 
  Star, 
  User, 
  Mail, 
  Lock,
  Camera,
  Bell,
  Settings,
  Download,
  Upload,
  Check,
  X
} from 'lucide-react';
import '../styles/flourish-design-system.css';

const ComponentShowcase = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [progress, setProgress] = useState(65);
  const [currentStep, setCurrentStep] = useState(2);

  const avatarData = [
    { name: 'Alice Johnson', src: null },
    { name: 'Bob Smith', status: 'online' },
    { name: 'Carol Williams', status: 'busy' },
    { name: 'David Brown', status: 'away' },
    { name: 'Eve Davis', status: 'offline' }
  ];

  const steps = [
    { label: 'Account' },
    { label: 'Profile' },
    { label: 'Preferences' },
    { label: 'Review' },
    { label: 'Complete' }
  ];

  const multiProgressData = [
    { value: 30, variant: 'primary', label: 'Completed' },
    { value: 20, variant: 'warning', label: 'In Progress' },
    { value: 10, variant: 'error', label: 'Failed' },
    { value: 40, variant: 'secondary', label: 'Pending' }
  ];

  return (
    <div className="flourish-showcase" style={{ padding: 'var(--flourish-space-2xl)', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--flourish-space-3xl)' }}>
        <FlourishLogo size="large" animated />
        <h1 className="flourish-heading-1" style={{ marginTop: 'var(--flourish-space-xl)' }}>
          Flourish Component Library
        </h1>
        <p className="flourish-body-lg" style={{ color: 'var(--flourish-text-secondary)' }}>
          Beautiful, accessible, and production-ready React components
        </p>
      </div>

      {/* Buttons Section */}
      <section style={{ marginBottom: 'var(--flourish-space-3xl)' }}>
        <h2 className="flourish-heading-2 flourish-mb-lg">Buttons</h2>
        <FlourishCard>
          <div style={{ display: 'flex', gap: 'var(--flourish-space-md)', flexWrap: 'wrap', marginBottom: 'var(--flourish-space-lg)' }}>
            <FlourishButton variant="primary">Primary</FlourishButton>
            <FlourishButton variant="secondary">Secondary</FlourishButton>
            <FlourishButton variant="gradient">Gradient</FlourishButton>
            <FlourishButton variant="outline">Outline</FlourishButton>
            <FlourishButton variant="ghost">Ghost</FlourishButton>
            <FlourishButton variant="primary" disabled>Disabled</FlourishButton>
          </div>
          
          <div style={{ display: 'flex', gap: 'var(--flourish-space-md)', flexWrap: 'wrap', marginBottom: 'var(--flourish-space-lg)' }}>
            <FlourishButton size="small" icon={<Heart className="h-4 w-4" />}>Small</FlourishButton>
            <FlourishButton size="medium" icon={<Star className="h-5 w-5" />}>Medium</FlourishButton>
            <FlourishButton size="large" icon={<User className="h-6 w-6" />}>Large</FlourishButton>
            <FlourishButton size="xlarge" fullWidth>Extra Large Full Width</FlourishButton>
          </div>

          <div style={{ display: 'flex', gap: 'var(--flourish-space-md)', flexWrap: 'wrap' }}>
            <FlourishButton loading>Loading...</FlourishButton>
            <FlourishButton variant="gradient" icon={<Download className="h-5 w-5" />} iconPosition="right">
              Download
            </FlourishButton>
            <FlourishButton variant="outline" icon={<Upload className="h-5 w-5" />}>
              Upload
            </FlourishButton>
          </div>
        </FlourishCard>
      </section>

      {/* Inputs Section */}
      <section style={{ marginBottom: 'var(--flourish-space-3xl)' }}>
        <h2 className="flourish-heading-2 flourish-mb-lg">Inputs</h2>
        <FlourishCard>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--flourish-space-lg)' }}>
            <FlourishInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              icon={<Mail className="h-4 w-4" />}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <FlourishInput
              label="Password"
              type="password"
              placeholder="Enter password"
              icon={<Lock className="h-4 w-4" />}
              required
            />
            <FlourishInput
              label="Success State"
              placeholder="Valid input"
              success="Great! This looks good."
              icon={<Check className="h-4 w-4" />}
            />
            <FlourishInput
              label="Error State"
              placeholder="Invalid input"
              error="This field is required"
              icon={<X className="h-4 w-4" />}
            />
            <FlourishInput
              label="With Helper Text"
              placeholder="Enter description"
              helperText="Maximum 500 characters"
              fullWidth
            />
            <FlourishInput
              label="Disabled Input"
              placeholder="Cannot edit"
              disabled
              fullWidth
            />
          </div>
        </FlourishCard>
      </section>

      {/* Badges Section */}
      <section style={{ marginBottom: 'var(--flourish-space-3xl)' }}>
        <h2 className="flourish-heading-2 flourish-mb-lg">Badges</h2>
        <FlourishCard>
          <div className="flourish-badge-group" style={{ marginBottom: 'var(--flourish-space-lg)' }}>
            <FlourishBadge>Default</FlourishBadge>
            <FlourishBadge variant="primary">Primary</FlourishBadge>
            <FlourishBadge variant="secondary">Secondary</FlourishBadge>
            <FlourishBadge variant="success">Success</FlourishBadge>
            <FlourishBadge variant="warning">Warning</FlourishBadge>
            <FlourishBadge variant="error">Error</FlourishBadge>
            <FlourishBadge variant="info">Info</FlourishBadge>
            <FlourishBadge variant="gradient">Gradient</FlourishBadge>
          </div>

          <div className="flourish-badge-group" style={{ marginBottom: 'var(--flourish-space-lg)' }}>
            <FlourishBadge size="small" icon={<Star className="h-3 w-3" />}>Small</FlourishBadge>
            <FlourishBadge size="medium" icon={<Heart className="h-4 w-4" />}>Medium</FlourishBadge>
            <FlourishBadge size="large" icon={<Bell className="h-5 w-5" />}>Large</FlourishBadge>
            <FlourishBadge variant="primary" count={42} />
            <FlourishBadge variant="error" count={999} maxCount={99} />
            <FlourishBadge variant="success" dot />
          </div>

          <div className="flourish-badge-group">
            <FlourishBadge variant="primary" onRemove={() => console.log('Remove')}>Removable</FlourishBadge>
            <FlourishBadge variant="secondary" onClick={() => console.log('Click')}>Clickable</FlourishBadge>
          </div>
        </FlourishCard>
      </section>

      {/* Avatars Section */}
      <section style={{ marginBottom: 'var(--flourish-space-3xl)' }}>
        <h2 className="flourish-heading-2 flourish-mb-lg">Avatars</h2>
        <FlourishCard>
          <div style={{ display: 'flex', gap: 'var(--flourish-space-lg)', alignItems: 'center', flexWrap: 'wrap', marginBottom: 'var(--flourish-space-lg)' }}>
            <FlourishAvatar size="tiny" name="John Doe" />
            <FlourishAvatar size="small" name="Jane Smith" status="online" />
            <FlourishAvatar size="medium" name="Bob Johnson" status="busy" />
            <FlourishAvatar size="large" name="Alice Brown" status="away" badge={<FlourishBadge variant="error" count={3} />} />
            <FlourishAvatar size="xlarge" name="Charlie Wilson" editable onEdit={() => console.log('Edit')} />
          </div>

          <div style={{ display: 'flex', gap: 'var(--flourish-space-lg)', alignItems: 'center', flexWrap: 'wrap', marginBottom: 'var(--flourish-space-lg)' }}>
            <FlourishAvatar shape="square" name="Square Avatar" />
            <FlourishAvatar shape="rounded" name="Rounded Avatar" />
            <FlourishAvatar shape="circle" />
            <FlourishAvatar onClick={() => console.log('Click')} name="Clickable" />
          </div>

          <div>
            <h3 className="flourish-heading-6 flourish-mb-md">Avatar Group</h3>
            <FlourishAvatarGroup avatars={avatarData} max={4} size="medium" />
          </div>
        </FlourishCard>
      </section>

      {/* Progress Section */}
      <section style={{ marginBottom: 'var(--flourish-space-3xl)' }}>
        <h2 className="flourish-heading-2 flourish-mb-lg">Progress Indicators</h2>
        <FlourishCard>
          <div style={{ display: 'grid', gap: 'var(--flourish-space-lg)' }}>
            <FlourishProgress value={progress} label="Upload Progress" showValue />
            <FlourishProgress value={75} variant="success" label="Success Progress" showValue striped animated />
            <FlourishProgress value={45} variant="warning" size="large" showValue />
            <FlourishProgress value={90} variant="gradient" />
            
            <div style={{ display: 'flex', gap: 'var(--flourish-space-xl)', alignItems: 'center', flexWrap: 'wrap' }}>
              <FlourishProgress type="circular" value={65} size="small" variant="primary" showValue />
              <FlourishProgress type="circular" value={80} size="medium" variant="success" showValue label="Complete" />
              <FlourishProgress type="circular" value={35} size="large" variant="warning" showValue />
            </div>

            <div>
              <h3 className="flourish-heading-6 flourish-mb-md">Step Progress</h3>
              <FlourishStepProgress steps={steps} currentStep={currentStep} />
              <div style={{ display: 'flex', gap: 'var(--flourish-space-md)', marginTop: 'var(--flourish-space-lg)' }}>
                <FlourishButton 
                  variant="outline" 
                  size="small"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous
                </FlourishButton>
                <FlourishButton 
                  variant="primary" 
                  size="small"
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={currentStep === steps.length - 1}
                >
                  Next
                </FlourishButton>
              </div>
            </div>

            <div>
              <h3 className="flourish-heading-6 flourish-mb-md">Multi Progress</h3>
              <FlourishMultiProgress segments={multiProgressData} height={12} />
            </div>
          </div>
        </FlourishCard>
      </section>

      {/* Modals Section */}
      <section style={{ marginBottom: 'var(--flourish-space-3xl)' }}>
        <h2 className="flourish-heading-2 flourish-mb-lg">Modals</h2>
        <FlourishCard>
          <div style={{ display: 'flex', gap: 'var(--flourish-space-md)', flexWrap: 'wrap' }}>
            <FlourishButton onClick={() => setModalOpen(true)}>Open Modal</FlourishButton>
            <FlourishButton variant="secondary" onClick={() => setConfirmOpen(true)}>Confirm Dialog</FlourishButton>
          </div>
        </FlourishCard>
      </section>

      {/* Modals */}
      <FlourishModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Welcome to Flourish"
        footer={
          <div style={{ display: 'flex', gap: 'var(--flourish-space-md)', justifyContent: 'flex-end' }}>
            <FlourishButton variant="ghost" onClick={() => setModalOpen(false)}>Cancel</FlourishButton>
            <FlourishButton variant="primary" onClick={() => setModalOpen(false)}>Save Changes</FlourishButton>
          </div>
        }
      >
        <p className="flourish-body">
          This is a beautiful modal component with smooth animations and proper focus management.
        </p>
        <FlourishInput
          label="Example Input"
          placeholder="Type something..."
          fullWidth
          style={{ marginTop: 'var(--flourish-space-md)' }}
        />
      </FlourishModal>

      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => {
          console.log('Confirmed!');
          setConfirmOpen(false);
        }}
        title="Confirm Action"
        message="Are you sure you want to proceed? This action cannot be undone."
        confirmLabel="Yes, Proceed"
        confirmVariant="primary"
      />
    </div>
  );
};

export default ComponentShowcase;
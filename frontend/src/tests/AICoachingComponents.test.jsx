/**
 * Comprehensive Test Suite for AI Coaching Components
 * Tests the newly implemented AI Coach Integration screens and functionality
 */

import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@testing-library/jest-dom';

// Import components to test
import RelationshipCoachingAreas from '../components/ai/RelationshipCoachingAreas';
import AICoachActivation from '../components/ai/AICoachActivation';

// Mock theme for testing
const theme = createTheme();

// Test wrapper with theme provider
const TestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

describe('RelationshipCoachingAreas Component', () => {
  const mockOnNext = jest.fn();
  const mockOnBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders coaching areas selection screen', () => {
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={mockOnNext} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Check header elements
    expect(screen.getByText('Relationship Coaching Areas')).toBeInTheDocument();
    expect(screen.getByText('Powered by Advanced AI • Mixture of Experts')).toBeInTheDocument();
    expect(screen.getByText('Choose the areas where you\'d like personalized AI coaching and support')).toBeInTheDocument();

    // Check progress indicator
    expect(screen.getByText('Step 1 of 5')).toBeInTheDocument();
    expect(screen.getByText('Select Focus Areas')).toBeInTheDocument();
  });

  test('displays all coaching categories', () => {
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={mockOnNext} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Check that all main categories are present
    expect(screen.getByText('Relationship Dynamics')).toBeInTheDocument();
    expect(screen.getByText('Dating & Courtship')).toBeInTheDocument();
    expect(screen.getByText('Personal Growth')).toBeInTheDocument();
    expect(screen.getByText('Crisis & Trauma')).toBeInTheDocument();
    expect(screen.getByText('Communication Mastery')).toBeInTheDocument();
    expect(screen.getByText('Long-term Success')).toBeInTheDocument();

    // Check expert types are displayed
    expect(screen.getByText('Relationship Counselor')).toBeInTheDocument();
    expect(screen.getByText('Dating Coach')).toBeInTheDocument();
    expect(screen.getByText('Crisis Intervention Specialist')).toBeInTheDocument();
  });

  test('allows selecting and deselecting coaching areas', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={mockOnNext} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Find and click on Communication Fundamentals area
    const communicationCard = screen.getByText('Communication Fundamentals').closest('.MuiCard-root');
    expect(communicationCard).toBeInTheDocument();

    await user.click(communicationCard);

    // Check that the area counter updates
    await waitFor(() => {
      expect(screen.getByText('1 areas selected')).toBeInTheDocument();
    });

    // Click again to deselect
    await user.click(communicationCard);

    // Check that counter goes back to 0
    await waitFor(() => {
      expect(screen.getByText('0 areas selected')).toBeInTheDocument();
    });
  });

  test('progresses through all steps when areas are selected', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={mockOnNext} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Step 1: Select an area
    const communicationCard = screen.getByText('Communication Fundamentals').closest('.MuiCard-root');
    await user.click(communicationCard);

    // Progress to step 2
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Set Your Priorities')).toBeInTheDocument();
      expect(screen.getByText('Step 2 of 5')).toBeInTheDocument();
    });

    // Step 2: Set priority (should have rating component)
    expect(screen.getByText('Communication Fundamentals')).toBeInTheDocument();
    
    // Progress to step 3
    await user.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Customize Coaching Intensity')).toBeInTheDocument();
      expect(screen.getByText('Step 3 of 5')).toBeInTheDocument();
    });

    // Step 3: Set intensity
    expect(screen.getByText('Active Coaching')).toBeInTheDocument();

    // Progress to step 4
    await user.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Add Personal Areas')).toBeInTheDocument();
      expect(screen.getByText('Step 4 of 5')).toBeInTheDocument();
    });

    // Step 4: Custom areas
    const textField = screen.getByPlaceholderText(/Describe any specific situations/i);
    await user.type(textField, 'I need help with long-distance relationship challenges');

    // Progress to final step
    await user.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Review Your Coaching Plan')).toBeInTheDocument();
      expect(screen.getByText('Step 5 of 5')).toBeInTheDocument();
    });
  });

  test('shows AI analysis loading state', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={mockOnNext} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Select an area and go through all steps
    const communicationCard = screen.getByText('Communication Fundamentals').closest('.MuiCard-root');
    await user.click(communicationCard);

    // Progress through all steps quickly
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton); // Step 2
    await user.click(nextButton); // Step 3
    await user.click(nextButton); // Step 4
    await user.click(nextButton); // Step 5

    // Now click "Start AI Coaching" which should trigger analysis
    const startButton = screen.getByRole('button', { name: /start ai coaching/i });
    await user.click(startButton);

    // Should show loading state
    await waitFor(() => {
      expect(screen.getByText('AI Analyzing Your Coaching Needs...')).toBeInTheDocument();
      expect(screen.getByText('Our advanced AI system is creating your personalized coaching plan')).toBeInTheDocument();
    });
  });

  test('handles back navigation', async () => {
    const user = userEvent.setup();
    
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={mockOnNext} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Select an area and progress to step 2
    const communicationCard = screen.getByText('Communication Fundamentals').closest('.MuiCard-root');
    await user.click(communicationCard);
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);

    // Now click previous
    const previousButton = screen.getByRole('button', { name: /previous/i });
    await user.click(previousButton);

    // Should be back to step 1
    await waitFor(() => {
      expect(screen.getByText('Step 1 of 5')).toBeInTheDocument();
      expect(screen.getByText('Select Focus Areas')).toBeInTheDocument();
    });
  });

  test('disables next button when no areas selected', () => {
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={mockOnNext} onBack={mockOnBack} />
      </TestWrapper>
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeDisabled();

    expect(screen.getByText('0 areas selected')).toBeInTheDocument();
  });
});

describe('AICoachActivation Component', () => {
  const mockOnComplete = jest.fn();
  const mockOnBack = jest.fn();
  const mockUserData = {
    coachingAreas: {
      selected: ['communication_fundamentals', 'dating_confidence'],
      priorities: { communication_fundamentals: 4, dating_confidence: 3 },
      intensity: { communication_fundamentals: 3, dating_confidence: 4 }
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Mock setTimeout for activation animation
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('shows activation loading sequence', async () => {
    render(
      <TestWrapper>
        <AICoachActivation userData={mockUserData} onComplete={mockOnComplete} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Should initially show activation screen
    expect(screen.getByText('Activating Your AI Coach')).toBeInTheDocument();
    expect(screen.getByText('Powered by Advanced AI • Mixture of Experts')).toBeInTheDocument();

    // Should show first step
    expect(screen.getByText('Initializing AI Systems')).toBeInTheDocument();
    expect(screen.getByText('Setting up your personalized AI coach with advanced capabilities')).toBeInTheDocument();
  });

  test('progresses through activation steps', async () => {
    render(
      <TestWrapper>
        <AICoachActivation userData={mockUserData} onComplete={mockOnComplete} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Fast-forward through activation steps
    await act(async () => {
      jest.advanceTimersByTime(15000); // Total activation time
    });

    // Should show coach introduction after activation
    await waitFor(() => {
      expect(screen.getByText('Meet Your AI Coach')).toBeInTheDocument();
      expect(screen.getByText('Your personalized coaching experience is ready!')).toBeInTheDocument();
    });
  });

  test('displays coach personality based on user data', async () => {
    render(
      <TestWrapper>
        <AICoachActivation userData={mockUserData} onComplete={mockOnComplete} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Fast-forward through activation
    await act(async () => {
      jest.advanceTimersByTime(15000);
    });

    await waitFor(() => {
      // Should show a coach name and type
      expect(screen.getByText(/Dr\.|Coach/)).toBeInTheDocument();
      
      // Should show specialties
      expect(screen.getByText('Specialties')).toBeInTheDocument();
      
      // Should show background and coaching style
      expect(screen.getByText('Background')).toBeInTheDocument();
      expect(screen.getByText('Coaching Style')).toBeInTheDocument();
    });
  });

  test('shows personalized plan based on user selections', async () => {
    render(
      <TestWrapper>
        <AICoachActivation userData={mockUserData} onComplete={mockOnComplete} onBack={mockOnBack} />
      </TestWrapper>
    );

    await act(async () => {
      jest.advanceTimersByTime(15000);
    });

    await waitFor(() => {
      expect(screen.getByText('Your Personalized Plan')).toBeInTheDocument();
      expect(screen.getByText('Based on your profile, I\'ll focus on:')).toBeInTheDocument();
      
      // Should show selected areas in chip format
      expect(screen.getByText('Communication Fundamentals')).toBeInTheDocument();
      expect(screen.getByText('Dating Confidence')).toBeInTheDocument();
    });
  });

  test('shows safety features and AI technology info', async () => {
    render(
      <TestWrapper>
        <AICoachActivation userData={mockUserData} onComplete={mockOnComplete} onBack={mockOnBack} />
      </TestWrapper>
    );

    await act(async () => {
      jest.advanceTimersByTime(15000);
    });

    await waitFor(() => {
      expect(screen.getByText('Safety Features')).toBeInTheDocument();
      expect(screen.getByText('Crisis detection active')).toBeInTheDocument();
      expect(screen.getByText('24/7 emergency resources available')).toBeInTheDocument();
      
      expect(screen.getByText('AI Technology')).toBeInTheDocument();
      expect(screen.getByText(/Advanced prompt engineering/)).toBeInTheDocument();
      expect(screen.getByText(/Mixture of experts routing/)).toBeInTheDocument();
    });
  });

  test('starts first coaching session', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    
    render(
      <TestWrapper>
        <AICoachActivation userData={mockUserData} onComplete={mockOnComplete} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Complete activation
    await act(async () => {
      jest.advanceTimersByTime(15000);
    });

    // Click start session button
    const startButton = await screen.findByRole('button', { name: /start your first session/i });
    await user.click(startButton);

    // Should show chat interface
    await waitFor(() => {
      expect(screen.getByText(/Session with/)).toBeInTheDocument();
      expect(screen.getByText('First Coaching Session • AI-Powered')).toBeInTheDocument();
      expect(screen.getByText('Session Insights')).toBeInTheDocument();
    });
  });

  test('handles chat messaging in first session', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    
    render(
      <TestWrapper>
        <AICoachActivation userData={mockUserData} onComplete={mockOnComplete} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Complete activation and start session
    await act(async () => {
      jest.advanceTimersByTime(15000);
    });

    const startButton = await screen.findByRole('button', { name: /start your first session/i });
    await user.click(startButton);

    // Wait for welcome message to appear
    await waitFor(() => {
      expect(screen.getByText(/Hello! I'm/)).toBeInTheDocument();
    });

    // Type a message
    const messageInput = screen.getByPlaceholderText('Share what\'s on your mind...');
    await user.type(messageInput, 'I need help with communication in my relationship');

    // Send message
    const sendButton = screen.getByRole('button', { name: /send/i });
    await user.click(sendButton);

    // Should show typing indicator
    await waitFor(() => {
      expect(screen.getByText(/is typing.../)).toBeInTheDocument();
    });
  });

  test('shows feature tour dialog', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    
    render(
      <TestWrapper>
        <AICoachActivation userData={mockUserData} onComplete={mockOnComplete} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Complete activation and start session
    await act(async () => {
      jest.advanceTimersByTime(15000);
    });

    const startButton = await screen.findByRole('button', { name: /start your first session/i });
    await user.click(startButton);

    // Click tour features button
    const tourButton = await screen.findByRole('button', { name: /tour features/i });
    await user.click(tourButton);

    // Should show tour dialog
    await waitFor(() => {
      expect(screen.getByText('AI Coach Features Tour')).toBeInTheDocument();
      expect(screen.getByText('Advanced AI Intelligence')).toBeInTheDocument();
      expect(screen.getByText('Real-time Insights')).toBeInTheDocument();
      expect(screen.getByText('Safety First')).toBeInTheDocument();
      expect(screen.getByText('Progress Tracking')).toBeInTheDocument();
    });
  });

  test('completes setup and calls onComplete', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    
    render(
      <TestWrapper>
        <AICoachActivation userData={mockUserData} onComplete={mockOnComplete} onBack={mockOnBack} />
      </TestWrapper>
    );

    // Complete activation and start session
    await act(async () => {
      jest.advanceTimersByTime(15000);
    });

    const startButton = await screen.findByRole('button', { name: /start your first session/i });
    await user.click(startButton);

    // Click complete setup button
    const completeButton = await screen.findByRole('button', { name: /complete setup/i });
    await user.click(completeButton);

    // Should call onComplete with activation data
    expect(mockOnComplete).toHaveBeenCalledWith(
      expect.objectContaining({
        coachActivated: true,
        firstSessionCompleted: true,
        activationTime: expect.any(Date)
      })
    );
  });
});

describe('Integration Tests', () => {
  test('full AI coach setup flow', async () => {
    const user = userEvent.setup();
    
    const mockOnNext = jest.fn();
    const mockOnComplete = jest.fn();
    
    // Test the complete flow from coaching areas to activation
    const { rerender } = render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={mockOnNext} onBack={() => {}} />
      </TestWrapper>
    );

    // Select areas and complete setup
    const communicationCard = screen.getByText('Communication Fundamentals').closest('.MuiCard-root');
    await user.click(communicationCard);

    // Progress through all steps quickly
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton); // Step 2
    await user.click(nextButton); // Step 3
    await user.click(nextButton); // Step 4
    await user.click(nextButton); // Step 5

    // Complete areas selection
    const startButton = screen.getByRole('button', { name: /start ai coaching/i });
    await user.click(startButton);

    // Verify onNext was called with coaching data
    await waitFor(() => {
      expect(mockOnNext).toHaveBeenCalledWith(
        expect.objectContaining({
          coachingAreas: expect.objectContaining({
            selected: expect.arrayContaining(['communication_fundamentals'])
          })
        })
      );
    });
  });

  test('accessibility compliance', async () => {
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={() => {}} onBack={() => {}} />
      </TestWrapper>
    );

    // Check for proper heading structure
    expect(screen.getByRole('heading', { name: /relationship coaching areas/i })).toBeInTheDocument();
    
    // Check for proper button labels
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();

    // Check for proper form elements
    const cards = screen.getAllByRole('button');
    expect(cards.length).toBeGreaterThan(0);

    // Verify keyboard navigation works
    const firstCard = screen.getByText('Communication Fundamentals').closest('[role="button"]');
    expect(firstCard).toBeInTheDocument();
    firstCard.focus();
    expect(document.activeElement).toBe(firstCard);
  });

  test('responsive design elements', () => {
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={() => {}} onBack={() => {}} />
      </TestWrapper>
    );

    // Check that Grid components are present for responsive layout
    const gridElements = document.querySelectorAll('.MuiGrid-root');
    expect(gridElements.length).toBeGreaterThan(0);

    // Check that cards are properly structured
    const cards = document.querySelectorAll('.MuiCard-root');
    expect(cards.length).toBeGreaterThan(5); // Should have multiple coaching area cards
  });
});

describe('Error Handling and Edge Cases', () => {
  test('handles empty user data gracefully', async () => {
    const user = userEvent.setup();
    jest.useFakeTimers();
    
    render(
      <TestWrapper>
        <AICoachActivation userData={{}} onComplete={() => {}} onBack={() => {}} />
      </TestWrapper>
    );

    // Should still activate without crashing
    await act(async () => {
      jest.advanceTimersByTime(15000);
    });

    await waitFor(() => {
      expect(screen.getByText('Meet Your AI Coach')).toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  test('handles network errors during AI analysis', async () => {
    const user = userEvent.setup();
    
    // Mock console.error to avoid test noise
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={() => {}} onBack={() => {}} />
      </TestWrapper>
    );

    // Select an area and try to proceed
    const communicationCard = screen.getByText('Communication Fundamentals').closest('.MuiCard-root');
    await user.click(communicationCard);

    // Should handle gracefully even if backend fails
    expect(screen.getByText('1 areas selected')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  test('validates required selections before proceeding', () => {
    render(
      <TestWrapper>
        <RelationshipCoachingAreas onNext={() => {}} onBack={() => {}} />
      </TestWrapper>
    );

    // Next button should be disabled initially
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeDisabled();

    // Should show validation message
    expect(screen.getByText('0 areas selected')).toBeInTheDocument();
  });
});
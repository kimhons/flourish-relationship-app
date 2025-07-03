import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, X, Crown, Zap, Shield, Star, 
  CreditCard, Calendar, Gift, ArrowRight, 
  HelpCircle, Award, Users, Sparkles, 
  Heart, Briefcase, Clock, ChevronDown, ChevronUp
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Switch } from '../../components/ui/switch';
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogHeader, DialogTitle, DialogTrigger, DialogFooter 
} from '../../components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';

const PremiumSubscriptionTiers = () => {
  const { toast } = useToast();
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' or 'annual'
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  // Calculate savings percentage for annual billing
  const calculateSavings = (monthlyPrice, annualPrice) => {
    const monthlyCost = monthlyPrice;
    const annualMonthlyCost = annualPrice / 12;
    return Math.round(((monthlyCost - annualMonthlyCost) / monthlyCost) * 100);
  };

  // Subscription plans data
  const plans = {
    basic: {
      name: 'Basic',
      icon: <Star className="h-6 w-6 text-blue-500" />,
      color: 'blue',
      description: 'Essential tools for relationship growth',
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      features: [
        { name: 'Daily Connection Hub', included: true },
        { name: 'Couples Games & Quizzes', included: true },
        { name: 'Relationship Toolkit', included: true },
        { name: 'Basic Dr. Love AI Integration', included: true },
        { name: 'Relationship Health Score', included: true },
        { name: 'Basic Analytics Dashboard', included: true },
        { name: 'Advanced Analytics Dashboard', included: false },
        { name: 'Professional Coaching Access', included: false },
        { name: 'Enterprise Wellness Programs', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Offline Access', included: false },
        { name: 'Ad-Free Experience', included: true },
      ]
    },
    premium: {
      name: 'Premium',
      icon: <Crown className="h-6 w-6 text-purple-500" />,
      color: 'purple',
      description: 'Advanced features for deeper connection',
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: [
        { name: 'Daily Connection Hub', included: true },
        { name: 'Couples Games & Quizzes', included: true },
        { name: 'Relationship Toolkit', included: true },
        { name: 'Advanced Dr. Love AI Integration', included: true },
        { name: 'Relationship Health Score', included: true },
        { name: 'Advanced Analytics Dashboard', included: true },
        { name: 'Professional Coaching (2 sessions/month)', included: true },
        { name: 'Enterprise Wellness Programs', included: false },
        { name: 'Priority Support', included: true },
        { name: 'Offline Access', included: true },
        { name: 'Ad-Free Experience', included: true },
      ]
    },
    ultimate: {
      name: 'Ultimate',
      icon: <Sparkles className="h-6 w-6 text-amber-500" />,
      color: 'amber',
      description: 'Complete relationship transformation suite',
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      features: [
        { name: 'Daily Connection Hub', included: true },
        { name: 'Couples Games & Quizzes', included: true },
        { name: 'Relationship Toolkit', included: true },
        { name: 'Premium Dr. Love AI Integration', included: true },
        { name: 'Relationship Health Score', included: true },
        { name: 'Advanced Analytics Dashboard', included: true },
        { name: 'Unlimited Professional Coaching', included: true },
        { name: 'Enterprise Wellness Programs', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Offline Access', included: true },
        { name: 'Ad-Free Experience', included: true },
      ]
    }
  };

  // FAQ data
  const faqs = [
    {
      question: 'How does billing work?',
      answer: 'You can choose between monthly or annual billing. Annual billing offers significant savings. Your subscription will automatically renew at the end of your billing cycle, but you can cancel anytime.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, your new plan will take effect at the next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay. Your payment information is securely processed and stored.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, all plans come with a 14-day free trial. You won't be charged until the trial period ends, and you can cancel anytime during the trial.'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime from your account settings. If you cancel, you'll still have access to your premium features until the end of your current billing period.'
    }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    toast({
      title: `${plans[plan].name} plan selected`,
      description: `You've selected the ${plans[plan].name} plan with ${billingCycle} billing.`,
      duration: 3000,
    });
  };

  const handleSubscribe = () => {
    toast({
      title: 'Subscription Successful!',
      description: `You've subscribed to the ${plans[selectedPlan].name} plan with ${billingCycle} billing.`,
      duration: 5000,
    });
    // In a real app, this would handle the payment processing and subscription activation
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container max-w-6xl py-8"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Premium Subscription Tiers</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Unlock the full potential of your relationship with our premium features designed to deepen connection and foster growth.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <span className={cn(
          "text-sm font-medium",
          billingCycle === 'monthly' ? 'text-primary' : 'text-muted-foreground'
        )}>
          Monthly
        </span>
        <Switch
          checked={billingCycle === 'annual'}
          onCheckedChange={(checked) => setBillingCycle(checked ? 'annual' : 'monthly')}
        />
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-sm font-medium",
            billingCycle === 'annual' ? 'text-primary' : 'text-muted-foreground'
          )}>
            Annual
          </span>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Save up to 20%
          </Badge>
        </div>
      </div>

      {/* Subscription Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {Object.keys(plans).map((planKey) => {
          const plan = plans[planKey];
          const isSelected = selectedPlan === planKey;
          const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
          const savings = calculateSavings(plan.monthlyPrice, plan.annualPrice);
          
          return (
            <Card 
              key={planKey}
              className={cn(
                "relative overflow-hidden transition-all",
                isSelected ? `border-2 border-${plan.color}-500 shadow-lg` : "border"
              )}
            >
              {planKey === 'premium' && (
                <div className="absolute top-0 left-0 w-full bg-purple-500 text-white text-center text-xs py-1">
                  MOST POPULAR
                </div>
              )}
              
              <div className={cn(
                "p-6",
                planKey === 'premium' ? "pt-8" : ""
              )}>
                <div className="flex items-center gap-2 mb-2">
                  {plan.icon}
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">${price.toFixed(2)}</span>
                    <span className="text-muted-foreground mb-1">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-green-600 mt-1">
                      Save {savings}% with annual billing
                    </div>
                  )}
                </div>
                
                <Button 
                  className={cn(
                    "w-full mb-6",
                    isSelected ? `bg-${plan.color}-500 hover:bg-${plan.color}-600` : ""
                  )}
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => handleSelectPlan(planKey)}
                >
                  {isSelected ? 'Selected' : 'Select Plan'}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground" />
                      )}
                      <span className={cn(
                        "text-sm",
                        feature.included ? "" : "text-muted-foreground"
                      )}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Subscribe Button */}
      <div className="flex justify-center mb-12">
        <Button 
          size="lg" 
          className="px-8 py-6 text-lg"
          onClick={handleSubscribe}
        >
          <CreditCard className="mr-2 h-5 w-5" />
          Subscribe Now
        </Button>
      </div>

      {/* Comparison Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Feature</th>
                <th className="p-4 text-center">Basic</th>
                <th className="p-4 text-center">Premium</th>
                <th className="p-4 text-center">Ultimate</th>
              </tr>
            </thead>
            <tbody>
              {plans.premium.features.map((feature, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-4">{feature.name}</td>
                  <td className="p-4 text-center">
                    {plans.basic.features[idx]?.included ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {plans.premium.features[idx]?.included ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {plans.ultimate.features[idx]?.included ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="font-medium">{faq.question}</span>
                {expandedFAQ === idx ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {expandedFAQ === idx && (
                <div className="p-4 pt-0 border-t">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Money Back Guarantee */}
      <div className="bg-muted rounded-lg p-6 text-center max-w-3xl mx-auto">
        <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
        <h3 className="text-xl font-bold mb-2">30-Day Money Back Guarantee</h3>
        <p className="text-muted-foreground">
          If you're not completely satisfied with your subscription, we offer a full refund within the first 30 days. No questions asked.
        </p>
      </div>
    </motion.div>
  );
};

export default PremiumSubscriptionTiers;


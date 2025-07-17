-- Flourish Database Initialization Script
-- Creates all necessary tables, indexes, and initial data

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create database
CREATE DATABASE IF NOT EXISTS flourish;
\c flourish;

-- Create schemas
CREATE SCHEMA IF NOT EXISTS public;
CREATE SCHEMA IF NOT EXISTS auth;
CREATE SCHEMA IF NOT EXISTS profiles;
CREATE SCHEMA IF NOT EXISTS matching;
CREATE SCHEMA IF NOT EXISTS messaging;
CREATE SCHEMA IF NOT EXISTS ai;

-- Set search path
SET search_path TO public, auth, profiles, matching, messaging, ai;

-- Users table
CREATE TABLE IF NOT EXISTS auth.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(50) UNIQUE,
    phone_number VARCHAR(20),
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    two_factor_enabled BOOLEAN DEFAULT FALSE,
    two_factor_secret VARCHAR(255),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended', 'deleted')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP WITH TIME ZONE,
    deleted_at TIMESTAMP WITH TIME ZONE
);

-- User profiles table
CREATE TABLE IF NOT EXISTS profiles.user_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    display_name VARCHAR(100),
    bio TEXT,
    birth_date DATE,
    gender VARCHAR(20),
    sexual_orientation VARCHAR(50),
    relationship_status VARCHAR(50),
    looking_for VARCHAR(100),
    height_cm INTEGER,
    body_type VARCHAR(50),
    ethnicity VARCHAR(50),
    religion VARCHAR(50),
    education_level VARCHAR(50),
    occupation VARCHAR(100),
    income_range VARCHAR(50),
    smoking VARCHAR(20),
    drinking VARCHAR(20),
    children VARCHAR(50),
    wants_children VARCHAR(50),
    location_lat DECIMAL(10, 8),
    location_lng DECIMAL(11, 8),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    timezone VARCHAR(50),
    profile_photo_url VARCHAR(500),
    cover_photo_url VARCHAR(500),
    verification_status VARCHAR(20) DEFAULT 'unverified',
    profile_completion_percentage INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User photos table
CREATE TABLE IF NOT EXISTS profiles.user_photos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    photo_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    caption TEXT,
    is_primary BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User preferences table
CREATE TABLE IF NOT EXISTS matching.user_preferences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    min_age INTEGER DEFAULT 18,
    max_age INTEGER DEFAULT 99,
    max_distance_km INTEGER DEFAULT 50,
    gender_preference JSONB,
    ethnicity_preference JSONB,
    religion_preference JSONB,
    education_preference JSONB,
    children_preference JSONB,
    smoking_preference JSONB,
    drinking_preference JSONB,
    deal_breakers JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Matches table
CREATE TABLE IF NOT EXISTS matching.matches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user1_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    user2_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    compatibility_score DECIMAL(5, 2),
    match_type VARCHAR(20) DEFAULT 'standard',
    status VARCHAR(20) DEFAULT 'pending',
    user1_liked BOOLEAN DEFAULT FALSE,
    user2_liked BOOLEAN DEFAULT FALSE,
    user1_liked_at TIMESTAMP WITH TIME ZONE,
    user2_liked_at TIMESTAMP WITH TIME ZONE,
    matched_at TIMESTAMP WITH TIME ZONE,
    unmatched_at TIMESTAMP WITH TIME ZONE,
    unmatched_by UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user1_id, user2_id)
);

-- Conversations table
CREATE TABLE IF NOT EXISTS messaging.conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    match_id UUID REFERENCES matching.matches(id) ON DELETE CASCADE,
    last_message_id UUID,
    last_message_at TIMESTAMP WITH TIME ZONE,
    user1_unread_count INTEGER DEFAULT 0,
    user2_unread_count INTEGER DEFAULT 0,
    is_archived_user1 BOOLEAN DEFAULT FALSE,
    is_archived_user2 BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Messages table
CREATE TABLE IF NOT EXISTS messaging.messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID NOT NULL REFERENCES messaging.conversations(id) ON DELETE CASCADE,
    sender_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    message_type VARCHAR(20) DEFAULT 'text',
    content TEXT,
    media_url VARCHAR(500),
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP WITH TIME ZONE,
    is_deleted BOOLEAN DEFAULT FALSE,
    deleted_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- AI coaching sessions table
CREATE TABLE IF NOT EXISTS ai.coaching_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    session_type VARCHAR(50),
    topic VARCHAR(100),
    mood VARCHAR(50),
    ai_model VARCHAR(50),
    conversation_history JSONB,
    insights JSONB,
    recommendations JSONB,
    user_satisfaction_rating INTEGER,
    session_duration_seconds INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ended_at TIMESTAMP WITH TIME ZONE
);

-- User personality assessments table
CREATE TABLE IF NOT EXISTS ai.personality_assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    assessment_type VARCHAR(50),
    big_five_openness DECIMAL(3, 2),
    big_five_conscientiousness DECIMAL(3, 2),
    big_five_extraversion DECIMAL(3, 2),
    big_five_agreeableness DECIMAL(3, 2),
    big_five_neuroticism DECIMAL(3, 2),
    attachment_style VARCHAR(50),
    love_language_primary VARCHAR(50),
    love_language_secondary VARCHAR(50),
    relationship_readiness_score DECIMAL(3, 2),
    emotional_intelligence_score DECIMAL(3, 2),
    communication_style VARCHAR(50),
    conflict_resolution_style VARCHAR(50),
    raw_responses JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    plan_type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    stripe_customer_id VARCHAR(255),
    stripe_subscription_id VARCHAR(255),
    apple_subscription_id VARCHAR(255),
    google_subscription_id VARCHAR(255),
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP WITH TIME ZONE,
    cancelled_at TIMESTAMP WITH TIME ZONE,
    auto_renew BOOLEAN DEFAULT TRUE
);

-- Create indexes
CREATE INDEX idx_users_email ON auth.users(email);
CREATE INDEX idx_users_username ON auth.users(username);
CREATE INDEX idx_user_profiles_user_id ON profiles.user_profiles(user_id);
CREATE INDEX idx_user_profiles_location ON profiles.user_profiles(location_lat, location_lng);
CREATE INDEX idx_matches_users ON matching.matches(user1_id, user2_id);
CREATE INDEX idx_matches_status ON matching.matches(status);
CREATE INDEX idx_messages_conversation ON messaging.messages(conversation_id);
CREATE INDEX idx_messages_sender ON messaging.messages(sender_id);
CREATE INDEX idx_coaching_sessions_user ON ai.coaching_sessions(user_id);

-- Create full-text search indexes
CREATE INDEX idx_user_profiles_bio_search ON profiles.user_profiles USING gin(to_tsvector('english', bio));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON auth.users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON profiles.user_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_preferences_updated_at BEFORE UPDATE ON matching.user_preferences
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_conversations_updated_at BEFORE UPDATE ON messaging.conversations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO flourish;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA auth TO flourish;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA profiles TO flourish;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA matching TO flourish;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA messaging TO flourish;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA ai TO flourish;

-- Insert initial data (optional)
-- Add any initial data here if needed

COMMIT;
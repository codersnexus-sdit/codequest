import { NextRequest, NextResponse } from 'next/server';
import { saveRegistration, checkEmailExists } from '@/app/lib/database';
import { z } from 'zod';

const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  college: z.string().min(2, 'College name is required'),
  year_of_study: z.number().min(1).max(4),
  team_name: z.string().min(2, 'Team name is required'),
  team_size: z.number().min(1).max(4),
  programming_languages: z.array(z.string()).min(1),
  experience_level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  github_url: z.string().optional(),
  linkedin_url: z.string().optional(),
  motivation: z.string().min(10, 'Please provide more details'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = registrationSchema.parse(body);
    
    // Check if email already exists
    const emailExists = await checkEmailExists(validatedData.email);
    if (emailExists) {
      return NextResponse.json({
        success: false,
        message: 'Email already registered'
      }, { status: 400 });
    }
    
    const registration = await saveRegistration(validatedData);
    
    return NextResponse.json({
      success: true,
      message: 'Registration successful!',
      data: registration
    }, { status: 201 });
    
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        message: 'Validation error',
        errors: error.errors
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      message: 'Registration failed',
      error: error.message
    }, { status: 500 });
  }
}
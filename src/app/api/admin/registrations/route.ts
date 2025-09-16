import { NextRequest, NextResponse } from 'next/server';
import { getAllRegistrations } from '@/app/lib/database';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin-token')?.value;
    
    if (!token) {
      return NextResponse.json({ 
        success: false, 
        message: 'Unauthorized' 
      }, { status: 401 });
    }
    
    // Verify JWT token
    jwt.verify(token, process.env.JWT_SECRET!);
    
    const registrations = await getAllRegistrations();
    
    return NextResponse.json({
      success: true,
      registrations
    });
    
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch registrations' 
    }, { status: 500 });
  }
}
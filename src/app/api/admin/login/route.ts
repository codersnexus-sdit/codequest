import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid password' 
      }, { status: 401 });
    }
    
    const token = jwt.sign(
      { role: 'admin' },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );
    
    const response = NextResponse.json({ 
      success: true, 
      message: 'Login successful' 
    });
    
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400 // 24 hours
    });
    
    return response;
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Login failed' 
    }, { status: 500 });
  }
}
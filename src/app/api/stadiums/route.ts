import { NextRequest, NextResponse } from "next/server";
import stadiumsData from '@/data/stadiums.json';
import { headers } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    // Validate stadium data structure
    if (!stadiumsData || !stadiumsData.stadiums || !Array.isArray(stadiumsData.stadiums)) {
      throw new Error('Invalid stadium data format');
    }

    // Validate each stadium's data and ensure URLs are from Wikimedia
    const validatedStadiums = stadiumsData.stadiums.map(stadium => {
      if (!stadium.imageUrl.startsWith('https://upload.wikimedia.org/')) {
        stadium.imageUrl = '/basketball-logo.svg'; // Fallback to local image if not Wikimedia
      }
      return stadium;
    });

    const response = NextResponse.json({ stadiums: validatedStadiums });
    
    // Add cache control headers
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Error fetching stadium data:', error);
    return NextResponse.json(
      { error: "Failed to fetch stadium data" },
      { status: 500 }
    );
  }
}

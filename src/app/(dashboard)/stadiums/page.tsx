import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StadiumImage from "@/components/StadiumImage";

// Mark this route as dynamic
export const dynamic = 'force-dynamic';

interface Stadium {
  id: number;
  name: string;
  team: string;
  location: string;
  capacity: number;
  opened: number;
  imageUrl: string;
}

async function getStadiums() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/stadiums`, {
      next: {
        revalidate: 3600 // Revalidate every hour
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch stadiums: ${response.statusText}`);
    }
    
    const data = await response.json();
    if (!data.stadiums || !Array.isArray(data.stadiums)) {
      throw new Error('Invalid stadium data format');
    }
    
    return data.stadiums;
  } catch (error) {
    console.error('Error fetching stadiums:', error);
    throw new Error('Failed to load stadium information');
  }
}

export default async function StadiumsPage() {
  const stadiums = await getStadiums();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">NBA Stadiums</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stadiums.map((stadium: Stadium) => (
          <Card key={stadium.id} className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg p-4">
              <CardTitle className="text-xl font-bold">{stadium.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="aspect-video mb-4 overflow-hidden rounded-md relative bg-gray-100">
                <StadiumImage 
                  src={stadium.imageUrl} 
                  alt={`${stadium.name} stadium`}
                />
              </div>
              <div className="space-y-2">
                <p><span className="font-semibold">Team:</span> {stadium.team}</p>
                <p><span className="font-semibold">Location:</span> {stadium.location}</p>
                <p><span className="font-semibold">Capacity:</span> {stadium.capacity.toLocaleString()}</p>
                <p><span className="font-semibold">Opened:</span> {stadium.opened}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

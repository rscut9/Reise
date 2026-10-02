import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ iso: string }> }) {
  const { iso } = await params;
  const level = new URL(request.url).searchParams.get('level') ?? 'ADM0';
  if (!/^[A-Z]{3}$/.test(iso)) return NextResponse.json({ error: 'Invalid ISO code' }, { status: 400 });
  if (!/^ADM[0-5]$/.test(level)) return NextResponse.json({ error: 'Invalid administrative level' }, { status: 400 });

  try {
    const metadataResponse = await fetch(`https://www.geoboundaries.org/api/current/gbOpen/${iso}/${level}/`, { next: { revalidate: 86400 } });
    if (!metadataResponse.ok) throw new Error('Metadata unavailable');
    const metadata = await metadataResponse.json();
    const boundaryResponse = await fetch(metadata.simplifiedGeometryGeoJSON, { next: { revalidate: 86400 } });
    if (!boundaryResponse.ok) throw new Error('Boundary unavailable');
    return NextResponse.json(await boundaryResponse.json(), { headers: { 'Cache-Control': 'public, max-age=86400' } });
  } catch {
    return NextResponse.json({ error: 'Boundary unavailable' }, { status: 502 });
  }
}

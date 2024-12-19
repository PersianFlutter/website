export async function GET() {
  return new Response(
    JSON.stringify({
      serverTime: new Date().toISOString(),
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

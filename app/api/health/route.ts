export async function GET() {
  return Response.json({
    ok: true,
    service: "calmmind",
    timestamp: new Date().toISOString(),
  });
}

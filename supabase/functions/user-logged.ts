import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

serve(async (req: Request) => {
  try {
    const { email } = await req.json();
    console.log("Notifikasi: Pengguna login -", email);

    return new Response(JSON.stringify({
      message: "Log login diterima dan diproses"
    }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });

  } catch (error) {
    return new Response(JSON.stringify({
      message: "Ralat fungsi: " + error.message
    }), {
      headers: { "Content-Type": "application/json" },
      status: 500
    });
  }
});

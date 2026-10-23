
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data: vehicles, error: fetchError } = await supabase
    .from("cars_listing")
    .select(`
      id,
      title,
      slug,
      km,
      price,
      year,
      cars_listing_images (
        id,
        storage_path,
        alt_text
      )`)
    .eq("hot_sale", true)
    .eq("cars_listing_images.is_cover", true);

  return NextResponse.json(
    vehicles?.map((vehicle) => ({
      id: vehicle.id,
      title: vehicle.title,
      slug: vehicle.slug,
      km: vehicle.km,
      price: vehicle.price,
      year: vehicle.year,
      image: vehicle.cars_listing_images[0]?.storage_path || null,
      alt_image: vehicle.cars_listing_images[0]?.alt_text || null,
    }))
  );
}

// export async function POST(request: Request) {
//   const body = await request.json();

//   // Aquí guardarías el usuario en tu base de datos.

//   return NextResponse.json(
//     {
//       message: "Usuario creado correctamente",
//       user: body,
//     },
//     { status: 201 }
//   );
// }
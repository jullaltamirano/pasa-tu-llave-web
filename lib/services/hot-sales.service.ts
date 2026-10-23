
import { supabase } from "@/lib/supabase";

export async function getHotSales() {
  const { data, error } = await supabase
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
        alt_text,
        is_cover
      )
    `)
    .eq("hot_sale", true)
    .eq("cars_listing_images.is_cover", true);

  if (error) {
    throw new Error(`Error fetching hot sales: ${error.message}`);
  }

  const finalData = data?.map((vehicle) => ({
      id: vehicle.id,
      title: vehicle.title,
      slug: vehicle.slug,
      km: vehicle.km,
      price: vehicle.price,
      year: vehicle.year,
      image: vehicle.cars_listing_images[0]?.storage_path || null,
      alt_image: vehicle.cars_listing_images[0]?.alt_text || null,
    }))

  return finalData;

}

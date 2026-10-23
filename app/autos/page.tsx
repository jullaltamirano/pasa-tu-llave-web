"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  Filter,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Footer, SiteHeader } from "@/components/site-header";
import { VehicleCard, type Vehicle } from "@/components/Home/vehicle-card";

const vehicles: Vehicle[] = [
  {
    name: "Toyota Corolla XLE",
    year: "2022",
    price: "S/ 89,900",
    km: "32,400 km",
    location: "Lima",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=85",
    hot: true,
  },
  {
    name: "Mazda CX-5 Signature",
    year: "2021",
    price: "S/ 116,500",
    km: "41,200 km",
    location: "Surco",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Volkswagen Jetta Comfortline",
    year: "2023",
    price: "S/ 99,900",
    km: "18,700 km",
    location: "Miraflores",
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85",
    hot: true,
  },
  {
    name: "Kia Sportage EX",
    year: "2022",
    price: "S/ 108,900",
    km: "28,100 km",
    location: "La Molina",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Honda Civic Touring",
    year: "2020",
    price: "S/ 83,500",
    km: "52,600 km",
    location: "San Isidro",
    image:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Hyundai Tucson Limited",
    year: "2021",
    price: "S/ 96,900",
    km: "39,800 km",
    location: "Callao",
    image:
      "https://images.unsplash.com/photo-1625231334168-35067f8853f1?auto=format&fit=crop&w=900&q=85",
  },
];
const price = (value: string) => Number(value.replace(/[^0-9]/g, ""));
export default function AutosPage() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("Todas");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("recomendados");
  const brands = [
    "Todas",
    ...Array.from(new Set(vehicles.map((v) => v.name.split(" ")[0]))),
  ];
  const filtered = useMemo(() => {
    const result = vehicles.filter(
      (v) =>
        v.name.toLowerCase().includes(query.toLowerCase()) &&
        (brand === "Todas" || v.name.startsWith(brand)) &&
        (!maxPrice || price(v.price) <= Number(maxPrice)),
    );
    return [...result].sort((a, b) =>
      sort === "menor-precio"
        ? price(a.price) - price(b.price)
        : sort === "menor-km"
          ? Number(a.km.replace(/[^0-9]/g, "")) -
            Number(b.km.replace(/[^0-9]/g, ""))
          : 0,
    );
  }, [query, brand, maxPrice, sort]);
  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#0B2B45]">
      <div className="relative bg-[#0B2B45] text-white">
        <SiteHeader />
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-32 lg:px-8">
          <Link
            href="/"
            className="mb-7 inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#D4A72C]"
          >
            <ArrowLeft className="size-4" /> Inicio
          </Link>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D4A72C]">
            Catálogo verificado
          </p>
          <h1 className="max-w-2xl text-5xl font-black tracking-[-0.06em]">
            Encuentra el auto que va contigo.
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            Compara opciones reales de autos de segunda en Lima, con información
            clara y precios de mercado.
          </p>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#63717b]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar marca o modelo"
              className="w-full rounded-xl border border-[#0B2B45]/10 py-3 pl-11 pr-4 outline-none focus:border-[#D4A72C]"
            />
          </div>
          <div className="flex items-center gap-2 text-sm font-bold">
            <Filter className="size-4 text-[#D4A72C]" />
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="rounded-xl border border-[#0B2B45]/10 bg-white px-4 py-3 outline-none"
            >
              <option value="Todas">Todas las marcas</option>
              {brands.slice(1).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold">
            <SlidersHorizontal className="size-4 text-[#D4A72C]" />
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="rounded-xl border border-[#0B2B45]/10 bg-white px-4 py-3 outline-none"
            >
              <option value="">Precio máximo</option>
              <option value="90000">Hasta S/ 90,000</option>
              <option value="100000">Hasta S/ 100,000</option>
              <option value="120000">Hasta S/ 120,000</option>
            </select>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-[#0B2B45]/10 bg-white px-4 py-3 text-sm font-bold outline-none"
          >
            <option value="recomendados">Recomendados</option>
            <option value="menor-precio">Menor precio</option>
            <option value="menor-km">Menor kilometraje</option>
          </select>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#63717b]">
            {filtered.length} vehículos encontrados
          </p>
          <ChevronDown className="size-4 text-[#63717b]" />
        </div>
        {filtered.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((vehicle) => (
              <VehicleCard key={vehicle.name} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white py-20 text-center">
            <p className="text-xl font-black">
              No encontramos vehículos con esos filtros.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setBrand("Todas");
                setMaxPrice("");
              }}
              className="mt-4 font-bold text-[#D4A72C]"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}

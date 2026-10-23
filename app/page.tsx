import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Crown,
  FileCheck2,
  Gauge,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { VehicleCard } from "@/components/Home/vehicle-card";
import { getHotSales } from "@/lib/services/hot-sales.service";

export const metadata = {
  title: "PasaTuLlave | Comprar autos de segunda en Lima",
  description: "Encuentra autos de segunda inspeccionados, con kilometraje real validado y precios de mercado en Lima. Compra tu auto con confianza.",
};

const benefits = [
  {
    icon: FileCheck2,
    title: "Inspección antes de publicar",
    text: "Cada auto pasa por una revisión hecha por especialistas.",
  },
  {
    icon: Gauge,
    title: "Kilometraje real validado",
    text: "Verificamos el historial para que compres con información clara.",
  },
  {
    icon: ShieldCheck,
    title: "Precios acorde al mercado",
    text: "Datos reales para que pagues lo justo, sin sorpresas.",
  },
];

export default async function Page() {
  "use cache"

  const hotVehicles = await getHotSales()

  return (
    <main className="bg-[#f7f8f6] text-[#0B2B45]">
      <section className="relative min-h-[680px] overflow-hidden bg-[#0B2B45] text-white">
        <Image
          src="/images/hero-car.png"
          alt="Sedán premium en carretera al atardecer"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B45] via-[#0B2B45]/40 to-[#0B2B45]/20" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-16 pt-36 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A72C]">
              <Sparkles className="size-4" /> Compra con respaldo
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-7xl uppercase">
              Compra autos de segunda{" "}
              <span className="text-[#D4A72C]">sin dudas</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/75">
              Autos usados seleccionados, inspeccionados y con el precio justo.
              Encuentra tu próximo auto en Lima con la confianza que necesitas.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {/* <Link
                href="/autos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A72C] px-7 py-4 font-bold text-[#0B2B45] transition-transform hover:scale-[1.02]"
              >
                Explorar vehículos <ArrowRight className="size-4" />
              </Link> */}
              {/* <Link
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-bold text-white transition-colors hover:bg-white/10"
              >
                Conoce cómo funciona
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 bg-zinc-100 rounded-3xl p-10">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-l-2 border-[#D4A72C] pl-5">
              <Icon className="mb-5 size-7 text-[#D4A72C]" />
              <h2 className="text-lg font-black">{title}</h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#63717b]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="destacado" className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="mb-3 font-black uppercase tracking-[0.1em] text-[#D4A72C]">
              Selección destacada
            </p>
            <h2 className="text-4xl font-black tracking-[-0.05em] uppercase">
              Nuestras recomendaciones
            </h2>
            <p className="mt-3 max-w-xl leading-6 text-[#63717b]">
              Vehículos que te recomendamos.
            </p>
          </div>
          <Crown className="hidden size-10 text-[#D4A72C] sm:block" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              hotVehicles?.slice(0, 3).map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={ { ...vehicle, hot: true } }
                />
              ))
            }
        </div>
      </section>
      
      {/* <section id="vehiculos" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-black uppercase tracking-[0.1em] text-[#D4A72C]">
              Más opciones para ti
            </p>
            <h2 className="text-4xl uppercase font-black tracking-[-0.05em]">
              Todos los vehículos
            </h2>
          </div>
          <Link
            href="/autos"
            className="flex items-center gap-1 text-sm font-bold"
          >
            Ver todo el catálogo <ChevronRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vehicles?.slice(3).map((vehicle) => (
            <VehicleCard key={vehicle.title} vehicle={vehicle} />
          ))}
        </div>
      </section> */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#D4A72C] px-7 py-12 md:px-14 md:py-16">
          <div className="relative z-10 max-w-xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#0B2B45]/70">
              ¿Tienes un auto?
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] text-[#0B2B45]">
              Véndelo fácil y rápido.
            </h2>
            <p className="mt-4 max-w-md text-[#0B2B45]/75">
              Llega a compradores que valoran lo que tú has cuidado. Nosotros
              hacemos el resto.
            </p>
            <Link
              href="/vende-tu-auto"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B2B45] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#123c5b]"
            >
              Quiero vender mi auto <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="absolute -right-16 -top-20 size-80 rounded-full border-[35px] border-[#0B2B45]/10" />
        </div>
      </section>
    </main>
  );
}
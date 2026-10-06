// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   BadgeCheck,
//   CarFront,
//   ChevronRight,
//   CircleCheck,
//   Crown,
//   FileCheck2,
//   Gauge,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";
// import { Footer, SiteHeader } from "@/components/site-header";
// import { VehicleCard, type Vehicle } from "@/components/vehicle-card";

// const vehicles: Vehicle[] = [
//   {
//     name: "Toyota Corolla XLE",
//     year: "2022",
//     price: "S/ 89,900",
//     km: "32,400 km",
//     location: "Lima",
//     image:
//       "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=85",
//     hot: true,
//   },
//   {
//     name: "Mazda CX-5 Signature",
//     year: "2021",
//     price: "S/ 116,500",
//     km: "41,200 km",
//     location: "Surco",
//     image:
//       "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     name: "Volkswagen Jetta Comfortline",
//     year: "2023",
//     price: "S/ 99,900",
//     km: "18,700 km",
//     location: "Miraflores",
//     image:
//       "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85",
//     hot: true,
//   },
//   {
//     name: "Kia Sportage EX",
//     year: "2022",
//     price: "S/ 108,900",
//     km: "28,100 km",
//     location: "La Molina",
//     image:
//       "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     name: "Honda Civic Touring",
//     year: "2020",
//     price: "S/ 83,500",
//     km: "52,600 km",
//     location: "San Isidro",
//     image:
//       "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=900&q=85",
//   },
//   {
//     name: "Hyundai Tucson Limited",
//     year: "2021",
//     price: "S/ 96,900",
//     km: "39,800 km",
//     location: "Callao",
//     image:
//       "https://images.unsplash.com/photo-1625231334168-35067f8853f1?auto=format&fit=crop&w=900&q=85",
//   },
// ];

// const benefits = [
//   {
//     icon: FileCheck2,
//     title: "Inspección antes de publicar",
//     text: "Cada auto pasa por una revisión de 120 puntos hecha por especialistas.",
//   },
//   {
//     icon: Gauge,
//     title: "Kilometraje real validado",
//     text: "Verificamos el historial para que compres con información clara.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Precios acorde al mercado",
//     text: "Datos reales para que pagues lo justo, sin sorpresas.",
//   },
// ];

// export const metadata = {
//   title: "Comprar autos de segunda en Lima | PasaTuLlave",
//   description:
//     "Encuentra autos de segunda inspeccionados, con kilometraje real validado y precios de mercado en Lima. Compra tu auto con confianza.",
// };

// export default function Page() {
//   return (
//     <main className="bg-[#f7f8f6] text-[#0B2B45]">
//       <section className="relative min-h-[680px] overflow-hidden bg-[#0B2B45] text-white">
//         <Image
//           src="/images/hero-car.png"
//           alt="Sedán premium en carretera al atardecer"
//           fill
//           priority
//           className="object-cover object-center opacity-40"
//           sizes="100vw"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B45] via-[#0B2B45]/80 to-[#0B2B45]/20" />
//         <SiteHeader />
//         <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-16 pt-36 lg:px-8">
//           <div className="max-w-2xl">
//             <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A72C]">
//               <Sparkles className="size-4" /> Compra con respaldo
//             </div>
//             <h1 className="max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-7xl">
//               Compra autos de segunda{" "}
//               <span className="text-[#D4A72C]">sin dudas.</span>
//             </h1>
//             <p className="mt-7 max-w-lg text-lg leading-8 text-white/75">
//               Autos usados seleccionados, inspeccionados y con el precio justo.
//               Encuentra tu próximo auto en Lima con la confianza que necesitas.
//             </p>
//             <div className="mt-10 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href="/autos"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A72C] px-7 py-4 font-bold text-[#0B2B45] transition-transform hover:scale-[1.02]"
//               >
//                 Explorar vehículos <ArrowRight className="size-4" />
//               </Link>
//               <Link
//                 href="#como-funciona"
//                 className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-bold text-white transition-colors hover:bg-white/10"
//               >
//                 Conoce cómo funciona
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         id="como-funciona"
//         className="mx-auto max-w-7xl px-5 pb-16 pt-28 lg:px-8"
//       >
//         <div className="grid gap-10 md:grid-cols-3">
//           {benefits.map(({ icon: Icon, title, text }) => (
//             <div key={title} className="border-l-2 border-[#D4A72C] pl-5">
//               <Icon className="mb-5 size-7 text-[#D4A72C]" />
//               <h2 className="text-lg font-black">{title}</h2>
//               <p className="mt-2 max-w-xs text-sm leading-6 text-[#63717b]">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
//         <div className="mb-8 flex items-end justify-between gap-5">
//           <div>
//             <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D4A72C]">
//               Selección destacada
//             </p>
//             <h2 className="text-4xl font-black tracking-[-0.05em]">
//               Nuestras recomendaciones
//             </h2>
//             <p className="mt-3 max-w-xl text-sm leading-6 text-[#63717b]">
//               Vehículos premium que aparecen primero por su excelente relación
//               entre precio, historial y estado.
//             </p>
//           </div>
//           <Crown className="hidden size-10 text-[#D4A72C] sm:block" />
//         </div>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {vehicles.slice(0, 3).map((vehicle) => (
//             <VehicleCard
//               key={vehicle.name}
//               vehicle={{ ...vehicle, hot: true }}
//             />
//           ))}
//         </div>
//       </section>
//       <section id="vehiculos" className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
//         <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//           <div>
//             <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D4A72C]">
//               Más opciones para ti
//             </p>
//             <h2 className="text-4xl font-black tracking-[-0.05em]">
//               Todos los vehículos
//             </h2>
//           </div>
//           <Link
//             href="/autos"
//             className="flex items-center gap-1 text-sm font-bold"
//           >
//             Ver todo el inventario <ChevronRight className="size-4" />
//           </Link>
//         </div>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {vehicles.slice(3).map((vehicle) => (
//             <VehicleCard key={vehicle.name} vehicle={vehicle} />
//           ))}
//         </div>
//       </section>
//       <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
//         <div className="relative overflow-hidden rounded-3xl bg-[#D4A72C] px-7 py-12 md:px-14 md:py-16">
//           <div className="relative z-10 max-w-xl">
//             <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#0B2B45]/70">
//               ¿Tienes un auto?
//             </p>
//             <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] text-[#0B2B45]">
//               Véndelo fácil. Véndelo bien.
//             </h2>
//             <p className="mt-4 max-w-md text-[#0B2B45]/75">
//               Llega a compradores que valoran lo que tú has cuidado. Nosotros
//               hacemos el resto.
//             </p>
//             <Link
//               href="/vende-tu-auto"
//               className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B2B45] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#123c5b]"
//             >
//               Quiero vender mi auto <ArrowRight className="size-4" />
//             </Link>
//           </div>
//           <div className="absolute -right-16 -top-20 size-80 rounded-full border-[35px] border-[#0B2B45]/10" />
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TARGET_DATE = new Date("2026-10-16T00:00:00-05:00").getTime();

function calculateTimeLeft(): TimeLeft {
  const difference = Math.max(TARGET_DATE - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function formatNumber(value: number) {
  return value.toString().padStart(2, "0");
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const counterItems = [
    {
      value: timeLeft.days,
      label: "DÍAS",
    },
    {
      value: timeLeft.hours,
      label: "HORAS",
    },
    {
      value: timeLeft.minutes,
      label: "MINUTOS",
    },
    {
      value: timeLeft.seconds,
      label: "SEGUNDOS",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061321] text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/car-background.png')",
        }}
      />

      {/* Navy overlay */}
      <div className="absolute inset-0 bg-[#061321]/80" />

      {/* Blur + dark gradient */}
      <div className="absolute inset-0 backdrop-blur-[3px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#061321]/50 via-[#061321]/70 to-[#020812]/95" />

      {/* Content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
        {/* Small heading */}
        <p className="mb-4 text-xs font-medium tracking-[0.55em] text-[#D6A354] sm:text-sm">
          PRÓXIMAMENTE
        </p>

        {/* Main title */}
        <h1 className="text-4xl font-light tracking-[0.18em] text-[#D6A354] sm:text-6xl md:text-7xl">
          EN CONSTRUCCIÓN
        </h1>

        {/* Divider */}
        <div className="my-8 h-[1px] w-20 bg-[#D6A354] sm:w-32" />

        {/* Subtitle */}
        <p className="mb-10 max-w-md text-sm font-light leading-relaxed tracking-wide text-white/70 sm:text-base">
          Estamos preparando algo especial.
          <br />
          Muy pronto estaremos listos.
        </p>

        {/* Countdown */}
        <div className="grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {counterItems.map((item) => (
            <div
              key={item.label}
              className="
                group
                relative
                flex
                min-h-[130px]
                flex-col
                items-center
                justify-center
                border
                border-[#D6A354]/40
                bg-[#061321]/60
                px-4
                py-6
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#D6A354]
                hover:bg-[#061321]/75
                sm:min-h-[155px]
              "
            >
              {/* Top gold line */}
              <div className="absolute left-1/2 top-0 h-[1px] w-1/3 -translate-x-1/2 bg-[#D6A354]" />

              <span className="font-light tabular-nums text-[#D6A354] text-4xl sm:text-5xl md:text-6xl">
                {formatNumber(item.value)}
              </span>

              <span className="mt-3 text-[9px] font-medium tracking-[0.35em] text-white/70 sm:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="mt-12 text-[10px] uppercase tracking-[0.35em] text-white/30">
          16 · OCTUBRE · 2026
        </p>
      </section>
    </main>
  );
}
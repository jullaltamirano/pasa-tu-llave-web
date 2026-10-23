import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FormComponent } from "@/components/PageComponents/Vende-tu-auto/FormComponent";

export const metadata = {
  title: "Vender mi auto en Lima | PasaTuLlave",
  description:
    "Vende tu auto en Lima de forma rápida y segura. Obtén inspección gratuita inicial, fotos profesionales y conecta con compradores reales.",
};
const steps = [
  {
    icon: Clock3,
    title: "Rapidez en venta",
    text: "Publicamos tu auto donde sí están los compradores listos para decidir.",
  },
  {
    icon: ShieldCheck,
    title: "Inspección gratuita inicial",
    text: "Te damos claridad desde el principio, sin costo y sin compromiso.",
  },
  {
    icon: Camera,
    title: "Fotos y video profesional",
    text: "Presentamos tu auto de la mejor manera para atraer mejores ofertas.",
  },
];
export default function SellPage() {
  return (
    <main className="bg-[#f7f8f6] text-[#0B2B45]">
      <section className="relative min-h-[620px] overflow-hidden bg-[#0B2B45] text-white">
        <Image
          src="/images/car-catalog.png"
          alt="Auto preparado para una sesión profesional de venta"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B45] via-[#0B2B45]/40 to-[#0B2B45]/20" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 pt-24 lg:px-8">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[#D4A72C]"
            >
              <ArrowLeft className="size-4" /> Volver a comprar
            </Link>
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A72C]">
              <Sparkles className="size-4" /> La venta inteligente
            </div>
            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.06em] uppercase">
              Vender tu auto en Lima puede ser{" "}
              <span className="text-[#D4A72C]">simple.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/75">
              Véndelo en una plataforma que entiende su valor, lo presenta mejor y lo conecta con compradores reales.
            </p>
            <Link
              href="#formulario"
              className="uppercase mt-9 inline-flex items-center gap-2 rounded-full bg-[#D4A72C] px-7 py-4 font-bold text-[#0B2B45] hover:scale-[1.02]"
            >
              Quiero vender mi auto <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D4A72C]">
            Venta de autos en Lima
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em]">
            La mejor presentación para tu auto.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#63717b]">
            Si buscas vender tu auto sin perder tiempo negociando con desconocidos, nosotros te acompañamos desde la inspección hasta el cierre. Publicamos información transparente, validamos el vehículo y mostramos sus mejores atributos con contenido profesional.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/hero-car.png"
            alt="Vehículo verificado listo para publicación"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D4A72C]">
            ¿Por qué vender con nosotros?
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em]">
            Queremos que vender tu auto sea una buena experiencia para ti
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-7 shadow-[0_14px_40px_rgba(11,43,69,0.07)]"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#0B2B45] text-[#D4A72C]">
                  <Icon className="size-5" />
                </span>
                <span className="text-4xl font-black text-[#0B2B45]/10">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#63717b]">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="formulario"
        className="bg-[#0B2B45] px-5 py-20 text-white lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D4A72C]">
              Empieza hoy
            </p>
            <h2 className="max-w-lg text-4xl font-black tracking-[-0.05em]">
              Cuéntanos sobre tu auto.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-white/65">
              Déjanos tus datos y un asesor se pondrá en contacto contigo para
              una inspección inicial gratuita.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white/80">
              <span className="flex items-center gap-3">
                <Check className="size-4 text-[#D4A72C]" /> Sin costo de
                publicación
              </span>
              <span className="flex items-center gap-3">
                <Check className="size-4 text-[#D4A72C]" /> Acompañamiento
                personalizado
              </span>
              <span className="flex items-center gap-3">
                <Check className="size-4 text-[#D4A72C]" /> Compradores
                verificados
              </span>
            </div>
          </div>
          <FormComponent />
        </div>
      </section>
    </main>
  );
}

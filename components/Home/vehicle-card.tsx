import Image from 'next/image'
import { Gauge, MapPin } from 'lucide-react'
import { IndexVehicle } from '@/types'


export function VehicleCard({ vehicle }: { vehicle: IndexVehicle }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#0B2B45]/10 bg-white shadow-[0_14px_40px_rgba(11,43,69,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,43,69,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#edf0ef]">
        <Image src={vehicle.image} alt={vehicle.alt_image} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        {vehicle.hot && <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-[11px] font-black uppercase text-[#D4A72C]">RECOMENDADO</span>}
      </div>
      <div className="flex flex-col gap-4 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D4A72C]">{vehicle.year}</p><h3 className="mt-1 text-xl font-bold text-[#0B2B45]">{vehicle.title}</h3>
        </div>
        <p className="text-2xl font-black text-[#0B2B45]">$ {vehicle.price}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[#0B2B45]/10 pt-4 text-xs font-medium text-[#63717b]"><span className="flex items-center gap-1.5"><Gauge className="size-3.5" />{vehicle.km}</span><span className="flex items-center gap-1.5"><MapPin className="size-3.5" />Lima</span></div>
      </div>
    </article>
  )
}

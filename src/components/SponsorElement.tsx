export default function SponsorElement({title, icon : Icon} : {title : string, icon : React.ElementType }) {
    return (
        <div className="flex items-center gap-3">
             <Icon size={50} strokeWidth={3} className="text-black"/>
             <h2 className="font-bold text-black tracking-tight text-3xl">{title}</h2>
          </div>
    )
}
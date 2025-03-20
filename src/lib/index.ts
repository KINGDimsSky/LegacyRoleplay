export const FeaturesAnnoucementData : AnnoucementType[] = [
    { id : 1, title: "Apartmen And Flat ", date : "30 November 2025", desc : "Ini adalah Bagian dari Fitur Paling di Minati Di Legacy Roleplay Dengan Experience menebang Pohon, Selayaknya Pekerja Lumber", image: "/png/City.jpg" }, 
    { id : 2, title: "Bug Map Fixed", date: "7 April 2025", desc: "Fix Bug Untuk Payment Agar player tidak Kehilangan Payment saat Paycheck", image: "/png/MapSan.jpg"},
    { id : 3, title: "Added Families And Gang", date: "7 August 2025", desc : "Setiap wilayah dapat mempunyai FnG Untuk mengingkatkan Pengalaman Roleplay Di Legacy RP, Dengan Persyaratan Atau tipe FnG tertentu", image: "/png/2Car.png"},
    { id : 4, title: "Hauling And Crates Trucker", date: "12 January 2024", desc : "Menambahkan Job Trucker Dan Hauling Untuk meningkatkan Kualitas Roleplay Legacy RP", image : "/png/Trucker.png"}
]

export interface AnnoucementType{
    id : number,
    title : string,
    date : string,
    desc : string,
    image : string
}
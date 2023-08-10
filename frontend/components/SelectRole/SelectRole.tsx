import Link from 'next/link';

function RoleBlock({role, description, image, link} : {role: string, description: string, image: string, link: string}){
    return (
    <div className="flex flex-col relative rounded-3xl border-2 border-zinc-100 items-center">
        <div className="text-center text-black text-3xl font-bold py-4">{role}</div>
        <img className="w-1/2  h-1/2" src={image} />
        <Link href={link}>
            <div className=" px-7 py-2 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-3xl shadow justify-center items-center gap-2.5 inline-flex m-8">
                <div className="text-center text-white text-xl font-bold">{description}</div>
            </div>
        </Link>
    </div>
    )
}

export default function SelectRole(){
    const roles = [
        {
            role: "Promote",
            description: "Campaign Dashboard",
            image: "/1.png",
            link: "/protocol"
        },
        {
            role: "Earn Reward",
            description: "Explore Campaigns",
            image: "/2.png",
            link: "/influencer"
        },
    ]
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row gap-10">
                {roles.map((role) => <RoleBlock {...role} />)}
            </div>
        </div>
    )
}

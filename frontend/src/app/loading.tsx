import Image from "next/image"

function loading() {
    return (
        <div className="flex items-center justify-center min-h-screen h-full bg-[#0f172a]">
            <Image
                src="/images/logo.png"
                alt=""
                width={300}
                height={150}
            />
        </div>
    )
}

export default loading
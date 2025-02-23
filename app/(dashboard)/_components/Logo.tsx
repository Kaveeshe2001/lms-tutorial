import Image from "next/image"

export const Logo = () => {
    return (
        <Image
          src="/next.svg"
          height={130}
          width={130}
          alt="logo" 
        />
    )
}
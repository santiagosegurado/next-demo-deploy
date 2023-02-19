import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, CSSProperties } from 'react'


interface Props {
  text: string
  href: string
}

const style: CSSProperties = {
  color: '#0070f3' ,
  textDecoration: 'underline' , 
}

export const ActiveLink: FC<Props> = ({text, href}) => {
  
  const router = useRouter()

  return (
    <Link style={ router.asPath === href ?  style : undefined } href={href}>
      {text}
    </Link>
  )
}

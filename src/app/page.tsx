'use client'
import Logo from '@/stories/assets/logo'
import { Button } from '@/stories/components/button/Button'
import { Header } from '@/stories/components/header/Header'
import { renderIcon } from '@/stories/components/icon/icon'
import Image from 'next/image'

export default function Home() {
  const iconComponent = renderIcon('arrowDown')

  return (
    <>
      <Header logo={Logo} buttonText="eee" dropDownText="eeez" />
      <Button
        label="buto"
        type="pill"
        iconPosition="left"
        IconSource={iconComponent.src}
      />
      <Image src={iconComponent.src} alt="" width={24} height={24} />
    </>
  )
}

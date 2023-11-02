import Logo from '@/stories/assets/logo'
import { Button } from '@/stories/components/button/Button'
import { Header } from '@/stories/components/header/Header'

export default function Home() {
  return (
    <>
      <Header logo={Logo} buttonText="eee" dropDownText="eeez" />
      {/* <Button label="Button" />
      <Text>EZGİ</Text> */}
      <Button label="buto" type="pill" />
    </>
  )
}

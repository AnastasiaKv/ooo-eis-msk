import React, {useEffect} from 'react'

const disableSplashScreen = () => {
  const splashScreen = document.getElementById('splash')
  if (splashScreen) {
    splashScreen.style.setProperty('display', 'none')
  }
}
type Props = {
  children: React.ReactNode
}
const LayoutProvider: React.FC<Props> = ({children}: Props) => {
  useEffect(() => {
    disableSplashScreen()
  }, [])

  return <>{children}</>
}

export {LayoutProvider}

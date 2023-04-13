import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useRef } from 'react'
import { BackHandler } from 'react-native'
import ExitApp from 'react-native-exit-app'
import { ToastAtCenter } from '../components/Toast'

function useRootBackBehavior() {
  const lastTime = useRef()

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (lastTime.current && lastTime.current + 2000 >= new Date().getTime()) {
          ExitApp.exitApp()
          return true
        } else {
          lastTime.current = new Date().getTime()
          ToastAtCenter('再按一次退出应用')
          return true
        }
      }

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress)
      return () => subscription.remove()
    }, [])
  )
}

export default useRootBackBehavior

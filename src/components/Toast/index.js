import RootToast from 'react-native-root-toast'

const Toast = (msg, options) => {
  if (!msg) return
  return RootToast.show(msg, {
    duration: RootToast.durations.LONG,
    backgroundColor: '#666',
    opacity: 1,
    ...options
  })
}

export const ToastAtCenter = msg => Toast(msg, { position: 0 })

export default Toast

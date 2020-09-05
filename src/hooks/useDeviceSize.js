import { useMediaQuery } from 'react-responsive'

function useDeviceSize() {
  const isSmall = useMediaQuery({ query: '(min-width: 576px)' })
  const isMedium = useMediaQuery({ query: '(min-width: 768px)' })
  const isLarge = useMediaQuery({ query: '(min-width: 992px)' })
  const isExtraLarge = useMediaQuery({ query: '(min-width: 1200px)' })

  return { isSmall, isMedium, isLarge, isExtraLarge }
}

export default useDeviceSize

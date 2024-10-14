import { IconProps } from './types/IconProps.type'
const Icon = ({ iconType, style = '' }: IconProps) => {
  switch (iconType) {
    case 'boxTick':
      return (
        <svg
          className={style}
          width='49'
          height='48'
          viewBox='0 0 49 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M46.666 35.82C46.706 37.32 46.306 38.74 45.586 39.96C45.186 40.68 44.646 41.34 44.046 41.88C42.666 43.16 40.846 43.94 38.826 44C35.906 44.06 33.326 42.56 31.906 40.26C31.146 39.08 30.686 37.66 30.666 36.16C30.606 33.64 31.726 31.36 33.526 29.86C34.886 28.74 36.606 28.04 38.486 28C42.906 27.9 46.566 31.4 46.666 35.82Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M35.546 36.0601L37.566 37.98L41.746 33.9399'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7.0061 14.88L24.6661 25.1L42.2061 14.9399'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M24.666 43.22V25.08'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M43.886 18.34V29.6601C43.886 29.7601 43.886 29.84 43.866 29.94C42.466 28.72 40.666 28 38.666 28C36.786 28 35.046 28.66 33.666 29.76C31.826 31.22 30.666 33.48 30.666 36C30.666 37.5 31.086 38.92 31.826 40.12C32.006 40.44 32.226 40.7401 32.466 41.0201L28.806 43.0401C26.526 44.3201 22.806 44.3201 20.526 43.0401L9.84601 37.12C7.42601 35.78 5.44604 32.4201 5.44604 29.6601V18.34C5.44604 15.58 7.42601 12.22 9.84601 10.88L20.526 4.96C22.806 3.68 26.526 3.68 28.806 4.96L39.486 10.88C41.906 12.22 43.886 15.58 43.886 18.34Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'boxTickLarge':
      return (
        <svg
          className={style}
          width='49'
          height='48'
          viewBox='0 0 49 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M46.666 35.82C46.706 37.32 46.306 38.74 45.586 39.96C45.186 40.68 44.646 41.34 44.046 41.88C42.666 43.16 40.846 43.94 38.826 44C35.906 44.06 33.326 42.56 31.906 40.26C31.146 39.08 30.686 37.66 30.666 36.16C30.606 33.64 31.726 31.36 33.526 29.86C34.886 28.74 36.606 28.04 38.486 28C42.906 27.9 46.566 31.4 46.666 35.82Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M35.546 36.0601L37.566 37.98L41.746 33.9399'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7.0061 14.88L24.6661 25.1L42.2061 14.9399'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M24.666 43.22V25.08'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M43.886 18.34V29.6601C43.886 29.7601 43.886 29.84 43.866 29.94C42.466 28.72 40.666 28 38.666 28C36.786 28 35.046 28.66 33.666 29.76C31.826 31.22 30.666 33.48 30.666 36C30.666 37.5 31.086 38.92 31.826 40.12C32.006 40.44 32.226 40.7401 32.466 41.0201L28.806 43.0401C26.526 44.3201 22.806 44.3201 20.526 43.0401L9.84601 37.12C7.42601 35.78 5.44604 32.4201 5.44604 29.6601V18.34C5.44604 15.58 7.42601 12.22 9.84601 10.88L20.526 4.96C22.806 3.68 26.526 3.68 28.806 4.96L39.486 10.88C41.906 12.22 43.886 15.58 43.886 18.34Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'cartLarge':
      return (
        <svg
          className={style}
          width='53'
          height='53'
          viewBox='0 0 53 53'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.87335 4.51685H8.64336C10.9834 4.51685 12.825 6.53185 12.63 8.85018L10.8317 30.4302C10.5284 33.9618 13.3233 36.9952 16.8767 36.9952H39.9517C43.0717 36.9952 45.8017 34.4385 46.04 31.3402L47.21 15.0902C47.47 11.4935 44.74 8.5685 41.1217 8.5685H13.15'
            stroke='#292D32'
            strokeWidth='3'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M35.7484 47.8501C37.2441 47.8501 38.4567 46.6376 38.4567 45.1418C38.4567 43.646 37.2441 42.4335 35.7484 42.4335C34.2526 42.4335 33.04 43.646 33.04 45.1418C33.04 46.6376 34.2526 47.8501 35.7484 47.8501Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.4151 47.8501C19.9108 47.8501 21.1234 46.6376 21.1234 45.1418C21.1234 43.646 19.9108 42.4335 18.4151 42.4335C16.9193 42.4335 15.7067 43.646 15.7067 45.1418C15.7067 46.6376 16.9193 47.8501 18.4151 47.8501Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20.04 17.5168H46.04'
            stroke='#292D32'
            strokeWidth='3'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'cartSmall':
      return (
        <svg
          className={style}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9 8H21'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'category':
      return (
        <svg
          className={style}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.54 8.1628C18.8986 8.1628 20 7.06142 20 5.7028C20 4.34418 18.8986 3.2428 17.54 3.2428C16.1814 3.2428 15.08 4.34418 15.08 5.7028C15.08 7.06142 16.1814 8.1628 17.54 8.1628Z'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6.46001 8.1628C7.81863 8.1628 8.92 7.06142 8.92 5.7028C8.92 4.34418 7.81863 3.2428 6.46001 3.2428C5.10139 3.2428 4 4.34418 4 5.7028C4 7.06142 5.10139 8.1628 6.46001 8.1628Z'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M17.54 20.4628C18.8986 20.4628 20 19.3615 20 18.0028C20 16.6442 18.8986 15.5428 17.54 15.5428C16.1814 15.5428 15.08 16.6442 15.08 18.0028C15.08 19.3615 16.1814 20.4628 17.54 20.4628Z'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6.46001 20.4628C7.81863 20.4628 8.92 19.3615 8.92 18.0028C8.92 16.6442 7.81863 15.5428 6.46001 15.5428C5.10139 15.5428 4 16.6442 4 18.0028C4 19.3615 5.10139 20.4628 6.46001 20.4628Z'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'delivery':
      return (
        <svg
          className={style}
          width='49'
          height='48'
          viewBox='0 0 49 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M24.276 28H26.276C28.476 28 30.276 26.2 30.276 24V4H12.276C9.276 4 6.65602 5.65998 5.29602 8.09998'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M4.276 34C4.276 37.32 6.956 40 10.276 40H12.276C12.276 37.8 14.076 36 16.276 36C18.476 36 20.276 37.8 20.276 40H28.276C28.276 37.8 30.076 36 32.276 36C34.476 36 36.276 37.8 36.276 40H38.276C41.596 40 44.276 37.32 44.276 34V28H38.276C37.176 28 36.276 27.1 36.276 26V20C36.276 18.9 37.176 18 38.276 18H40.856L37.436 12.02C36.716 10.78 35.3961 10 33.9561 10H30.276V24C30.276 26.2 28.476 28 26.276 28H24.276'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.276 44C18.4851 44 20.276 42.2091 20.276 40C20.276 37.7909 18.4851 36 16.276 36C14.0669 36 12.276 37.7909 12.276 40C12.276 42.2091 14.0669 44 16.276 44Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M32.276 44C34.4851 44 36.276 42.2091 36.276 40C36.276 37.7909 34.4851 36 32.276 36C30.0669 36 28.276 37.7909 28.276 40C28.276 42.2091 30.0669 44 32.276 44Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M44.276 24V28H38.276C37.176 28 36.276 27.1 36.276 26V20C36.276 18.9 37.176 18 38.276 18H40.856L44.276 24Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M4.276 16H16.276'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M4.276 22H12.276'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M4.276 28H8.276'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'heart':
      return (
        <svg
          className={style}
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.953 20.6628C12.613 20.7828 12.053 20.7828 11.713 20.6628C8.81301 19.6728 2.33301 15.5428 2.33301 8.54276C2.33301 5.45276 4.82301 2.95276 7.89301 2.95276C9.71301 2.95276 11.323 3.83276 12.333 5.19276C13.343 3.83276 14.963 2.95276 16.773 2.95276C19.843 2.95276 22.333 5.45276 22.333 8.54276C22.333 15.5428 15.853 19.6728 12.953 20.6628Z'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'heartFilled':
      return (
        <svg
          className={style}
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.953 20.6628C12.613 20.7828 12.053 20.7828 11.713 20.6628C8.81301 19.6728 2.33301 15.5428 2.33301 8.54276C2.33301 5.45276 4.82301 2.95276 7.89301 2.95276C9.71301 2.95276 11.323 3.83276 12.333 5.19276C13.343 3.83276 14.963 2.95276 16.773 2.95276C19.843 2.95276 22.333 5.45276 22.333 8.54276C22.333 15.5428 15.853 19.6728 12.953 20.6628Z'
            fill='#292D32'
          />
        </svg>
      )
    case 'minus':
      return (
        <svg
          className={style}
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.6687 12H18.6687'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'plus':
      return (
        <svg
          className={style}
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.33301 12H18.333'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12.333 18V6'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'search':
      return (
        <svg
          className={style}
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.776 21C17.0227 21 21.276 16.7467 21.276 11.5C21.276 6.25329 17.0227 2 11.776 2C6.5293 2 2.276 6.25329 2.276 11.5C2.276 16.7467 6.5293 21 11.776 21Z'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M22.276 22L20.276 20'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'shop':
      return (
        <svg
          className={style}
          width='48'
          height='49'
          viewBox='0 0 48 49'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.02002 22.6234V31.6034C6.02002 40.5834 9.62002 44.1834 18.6 44.1834H29.38C38.36 44.1834 41.96 40.5834 41.96 31.6034V22.6234'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M24 24.1835C27.66 24.1835 30.36 21.2035 30 17.5435L28.68 4.18347H19.34L18 17.5435C17.64 21.2035 20.34 24.1835 24 24.1835Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M36.62 24.1835C40.66 24.1835 43.62 20.9035 43.22 16.8835L42.66 11.3835C41.94 6.18347 39.94 4.18347 34.7 4.18347H28.6L30 18.2035C30.34 21.5035 33.32 24.1835 36.62 24.1835Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.28 24.1835C14.58 24.1835 17.56 21.5035 17.88 18.2035L18.32 13.7835L19.28 4.18347H13.18C7.94001 4.18347 5.94001 6.18347 5.22001 11.3835L4.68001 16.8835C4.28001 20.9035 7.24001 24.1835 11.28 24.1835Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M24 34.1835C20.66 34.1835 19 35.8435 19 39.1835V44.1835H29V39.1835C29 35.8435 27.34 34.1835 24 34.1835Z'
            stroke='#292D32'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'trash':
      return (
        <svg
          className={style}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M10.33 16.5H13.66'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.5 12.5H14.5'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'user':
      return (
        <svg
          className={style}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg
          className={style}
          width='49'
          height='49'
          viewBox='0 0 49 49'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.149902 48.08L3.5239 35.754C1.4419 32.146 0.347902 28.056 0.349902 23.862C0.355902 10.75 11.0259 0.0799561 24.1359 0.0799561C30.4979 0.0819561 36.4699 2.55996 40.9619 7.05596C45.4519 11.552 47.9239 17.528 47.9219 23.884C47.9159 36.998 37.2459 47.668 24.1359 47.668C20.1559 47.666 16.2339 46.668 12.7599 44.772L0.149902 48.08ZM13.3439 40.466C16.6959 42.456 19.8959 43.648 24.1279 43.65C35.0239 43.65 43.8999 34.782 43.9059 23.88C43.9099 12.956 35.0759 4.09996 24.1439 4.09596C13.2399 4.09596 4.3699 12.964 4.3659 23.864C4.3639 28.314 5.6679 31.646 7.8579 35.132L5.8599 42.428L13.3439 40.466ZM36.1179 29.538C35.9699 29.29 35.5739 29.142 34.9779 28.844C34.3839 28.546 31.4619 27.108 30.9159 26.91C30.3719 26.712 29.9759 26.612 29.5779 27.208C29.1819 27.802 28.0419 29.142 27.6959 29.538C27.3499 29.934 27.0019 29.984 26.4079 29.686C25.8139 29.388 23.8979 28.762 21.6279 26.736C19.8619 25.16 18.6679 23.214 18.3219 22.618C17.9759 22.024 18.2859 21.702 18.5819 21.406C18.8499 21.14 19.1759 20.712 19.4739 20.364C19.7759 20.02 19.8739 19.772 20.0739 19.374C20.2719 18.978 20.1739 18.63 20.0239 18.332C19.8739 18.036 18.6859 15.11 18.1919 13.92C17.7079 12.762 17.2179 12.918 16.8539 12.9L15.7139 12.88C15.3179 12.88 14.6739 13.028 14.1299 13.624C13.5859 14.22 12.0499 15.656 12.0499 18.582C12.0499 21.508 14.1799 24.334 14.4759 24.73C14.7739 25.126 18.6659 31.13 24.6279 33.704C26.0459 34.316 27.1539 34.682 28.0159 34.956C29.4399 35.408 30.7359 35.344 31.7599 35.192C32.9019 35.022 35.2759 33.754 35.7719 32.366C36.2679 30.976 36.2679 29.786 36.1179 29.538Z'
            fill='#292D32'
          />
        </svg>
      )
    case 'rightArrow':
      return (
        <svg
          className={style}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3.5 12H20.33'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    case 'chev':
      return (
        <svg
          className={style}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.92 15.09L13.4 8.56996C12.63 7.79997 11.37 7.79997 10.6 8.56997L4.07996 15.09'
            stroke='#292D32'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
  }
}

export default Icon

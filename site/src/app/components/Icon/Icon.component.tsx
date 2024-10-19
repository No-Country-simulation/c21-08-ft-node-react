import { IconProps } from "./types/IconProps.type"
const Icon = ({ iconType, style = "" }: IconProps) => {
  switch (iconType) {
    case "hamburger": {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3 12H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3 17H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    }
    case "boxTick":
      return (
        <svg
          className={style}
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.666 35.82C46.706 37.32 46.306 38.74 45.586 39.96C45.186 40.68 44.646 41.34 44.046 41.88C42.666 43.16 40.846 43.94 38.826 44C35.906 44.06 33.326 42.56 31.906 40.26C31.146 39.08 30.686 37.66 30.666 36.16C30.606 33.64 31.726 31.36 33.526 29.86C34.886 28.74 36.606 28.04 38.486 28C42.906 27.9 46.566 31.4 46.666 35.82Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.546 36.0601L37.566 37.98L41.746 33.9399"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.0061 14.88L24.6661 25.1L42.2061 14.9399"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.666 43.22V25.08"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.886 18.34V29.6601C43.886 29.7601 43.886 29.84 43.866 29.94C42.466 28.72 40.666 28 38.666 28C36.786 28 35.046 28.66 33.666 29.76C31.826 31.22 30.666 33.48 30.666 36C30.666 37.5 31.086 38.92 31.826 40.12C32.006 40.44 32.226 40.7401 32.466 41.0201L28.806 43.0401C26.526 44.3201 22.806 44.3201 20.526 43.0401L9.84601 37.12C7.42601 35.78 5.44604 32.4201 5.44604 29.6601V18.34C5.44604 15.58 7.42601 12.22 9.84601 10.88L20.526 4.96C22.806 3.68 26.526 3.68 28.806 4.96L39.486 10.88C41.906 12.22 43.886 15.58 43.886 18.34Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "boxTickLarge":
      return (
        <svg
          className={style}
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.666 35.82C46.706 37.32 46.306 38.74 45.586 39.96C45.186 40.68 44.646 41.34 44.046 41.88C42.666 43.16 40.846 43.94 38.826 44C35.906 44.06 33.326 42.56 31.906 40.26C31.146 39.08 30.686 37.66 30.666 36.16C30.606 33.64 31.726 31.36 33.526 29.86C34.886 28.74 36.606 28.04 38.486 28C42.906 27.9 46.566 31.4 46.666 35.82Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.546 36.0601L37.566 37.98L41.746 33.9399"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.0061 14.88L24.6661 25.1L42.2061 14.9399"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.666 43.22V25.08"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.886 18.34V29.6601C43.886 29.7601 43.886 29.84 43.866 29.94C42.466 28.72 40.666 28 38.666 28C36.786 28 35.046 28.66 33.666 29.76C31.826 31.22 30.666 33.48 30.666 36C30.666 37.5 31.086 38.92 31.826 40.12C32.006 40.44 32.226 40.7401 32.466 41.0201L28.806 43.0401C26.526 44.3201 22.806 44.3201 20.526 43.0401L9.84601 37.12C7.42601 35.78 5.44604 32.4201 5.44604 29.6601V18.34C5.44604 15.58 7.42601 12.22 9.84601 10.88L20.526 4.96C22.806 3.68 26.526 3.68 28.806 4.96L39.486 10.88C41.906 12.22 43.886 15.58 43.886 18.34Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "cartLarge":
      return (
        <svg
          className={style}
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.87335 4.51685H8.64336C10.9834 4.51685 12.825 6.53185 12.63 8.85018L10.8317 30.4302C10.5284 33.9618 13.3233 36.9952 16.8767 36.9952H39.9517C43.0717 36.9952 45.8017 34.4385 46.04 31.3402L47.21 15.0902C47.47 11.4935 44.74 8.5685 41.1217 8.5685H13.15"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.7484 47.8501C37.2441 47.8501 38.4567 46.6376 38.4567 45.1418C38.4567 43.646 37.2441 42.4335 35.7484 42.4335C34.2526 42.4335 33.04 43.646 33.04 45.1418C33.04 46.6376 34.2526 47.8501 35.7484 47.8501Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.4151 47.8501C19.9108 47.8501 21.1234 46.6376 21.1234 45.1418C21.1234 43.646 19.9108 42.4335 18.4151 42.4335C16.9193 42.4335 15.7067 43.646 15.7067 45.1418C15.7067 46.6376 16.9193 47.8501 18.4151 47.8501Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.04 17.5168H46.04"
            stroke="#292D32"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "almacen":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "cartSmall":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8H21"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "category":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.54 8.1628C18.8986 8.1628 20 7.06142 20 5.7028C20 4.34418 18.8986 3.2428 17.54 3.2428C16.1814 3.2428 15.08 4.34418 15.08 5.7028C15.08 7.06142 16.1814 8.1628 17.54 8.1628Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.46001 8.1628C7.81863 8.1628 8.92 7.06142 8.92 5.7028C8.92 4.34418 7.81863 3.2428 6.46001 3.2428C5.10139 3.2428 4 4.34418 4 5.7028C4 7.06142 5.10139 8.1628 6.46001 8.1628Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.54 20.4628C18.8986 20.4628 20 19.3615 20 18.0028C20 16.6442 18.8986 15.5428 17.54 15.5428C16.1814 15.5428 15.08 16.6442 15.08 18.0028C15.08 19.3615 16.1814 20.4628 17.54 20.4628Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.46001 20.4628C7.81863 20.4628 8.92 19.3615 8.92 18.0028C8.92 16.6442 7.81863 15.5428 6.46001 15.5428C5.10139 15.5428 4 16.6442 4 18.0028C4 19.3615 5.10139 20.4628 6.46001 20.4628Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "delivery":
      return (
        <svg
          className={style}
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.276 28H26.276C28.476 28 30.276 26.2 30.276 24V4H12.276C9.276 4 6.65602 5.65998 5.29602 8.09998"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.276 34C4.276 37.32 6.956 40 10.276 40H12.276C12.276 37.8 14.076 36 16.276 36C18.476 36 20.276 37.8 20.276 40H28.276C28.276 37.8 30.076 36 32.276 36C34.476 36 36.276 37.8 36.276 40H38.276C41.596 40 44.276 37.32 44.276 34V28H38.276C37.176 28 36.276 27.1 36.276 26V20C36.276 18.9 37.176 18 38.276 18H40.856L37.436 12.02C36.716 10.78 35.3961 10 33.9561 10H30.276V24C30.276 26.2 28.476 28 26.276 28H24.276"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.276 44C18.4851 44 20.276 42.2091 20.276 40C20.276 37.7909 18.4851 36 16.276 36C14.0669 36 12.276 37.7909 12.276 40C12.276 42.2091 14.0669 44 16.276 44Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.276 44C34.4851 44 36.276 42.2091 36.276 40C36.276 37.7909 34.4851 36 32.276 36C30.0669 36 28.276 37.7909 28.276 40C28.276 42.2091 30.0669 44 32.276 44Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.276 24V28H38.276C37.176 28 36.276 27.1 36.276 26V20C36.276 18.9 37.176 18 38.276 18H40.856L44.276 24Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.276 16H16.276"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.276 22H12.276"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.276 28H8.276"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "heart":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.953 20.6628C12.613 20.7828 12.053 20.7828 11.713 20.6628C8.81301 19.6728 2.33301 15.5428 2.33301 8.54276C2.33301 5.45276 4.82301 2.95276 7.89301 2.95276C9.71301 2.95276 11.323 3.83276 12.333 5.19276C13.343 3.83276 14.963 2.95276 16.773 2.95276C19.843 2.95276 22.333 5.45276 22.333 8.54276C22.333 15.5428 15.853 19.6728 12.953 20.6628Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "heartFilled":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.953 20.6628C12.613 20.7828 12.053 20.7828 11.713 20.6628C8.81301 19.6728 2.33301 15.5428 2.33301 8.54276C2.33301 5.45276 4.82301 2.95276 7.89301 2.95276C9.71301 2.95276 11.323 3.83276 12.333 5.19276C13.343 3.83276 14.963 2.95276 16.773 2.95276C19.843 2.95276 22.333 5.45276 22.333 8.54276C22.333 15.5428 15.853 19.6728 12.953 20.6628Z"
            fill="#292D32"
          />
        </svg>
      )
    case "minus":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.6687 12H18.6687"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "plus":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33301 12H18.333"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.333 18V6"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "search":
      return (
        <svg
          className={style}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.776 21C17.0227 21 21.276 16.7467 21.276 11.5C21.276 6.25329 17.0227 2 11.776 2C6.5293 2 2.276 6.25329 2.276 11.5C2.276 16.7467 6.5293 21 11.776 21Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.276 22L20.276 20"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "shop":
      return (
        <svg
          className={style}
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.02002 22.6234V31.6034C6.02002 40.5834 9.62002 44.1834 18.6 44.1834H29.38C38.36 44.1834 41.96 40.5834 41.96 31.6034V22.6234"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 24.1835C27.66 24.1835 30.36 21.2035 30 17.5435L28.68 4.18347H19.34L18 17.5435C17.64 21.2035 20.34 24.1835 24 24.1835Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.62 24.1835C40.66 24.1835 43.62 20.9035 43.22 16.8835L42.66 11.3835C41.94 6.18347 39.94 4.18347 34.7 4.18347H28.6L30 18.2035C30.34 21.5035 33.32 24.1835 36.62 24.1835Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.28 24.1835C14.58 24.1835 17.56 21.5035 17.88 18.2035L18.32 13.7835L19.28 4.18347H13.18C7.94001 4.18347 5.94001 6.18347 5.22001 11.3835L4.68001 16.8835C4.28001 20.9035 7.24001 24.1835 11.28 24.1835Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 34.1835C20.66 34.1835 19 35.8435 19 39.1835V44.1835H29V39.1835C29 35.8435 27.34 34.1835 24 34.1835Z"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "trash":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.33 16.5H13.66"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5H14.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "user":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "whatsapp":
      return (
        <svg
          className={style}
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.149902 48.08L3.5239 35.754C1.4419 32.146 0.347902 28.056 0.349902 23.862C0.355902 10.75 11.0259 0.0799561 24.1359 0.0799561C30.4979 0.0819561 36.4699 2.55996 40.9619 7.05596C45.4519 11.552 47.9239 17.528 47.9219 23.884C47.9159 36.998 37.2459 47.668 24.1359 47.668C20.1559 47.666 16.2339 46.668 12.7599 44.772L0.149902 48.08ZM13.3439 40.466C16.6959 42.456 19.8959 43.648 24.1279 43.65C35.0239 43.65 43.8999 34.782 43.9059 23.88C43.9099 12.956 35.0759 4.09996 24.1439 4.09596C13.2399 4.09596 4.3699 12.964 4.3659 23.864C4.3639 28.314 5.6679 31.646 7.8579 35.132L5.8599 42.428L13.3439 40.466ZM36.1179 29.538C35.9699 29.29 35.5739 29.142 34.9779 28.844C34.3839 28.546 31.4619 27.108 30.9159 26.91C30.3719 26.712 29.9759 26.612 29.5779 27.208C29.1819 27.802 28.0419 29.142 27.6959 29.538C27.3499 29.934 27.0019 29.984 26.4079 29.686C25.8139 29.388 23.8979 28.762 21.6279 26.736C19.8619 25.16 18.6679 23.214 18.3219 22.618C17.9759 22.024 18.2859 21.702 18.5819 21.406C18.8499 21.14 19.1759 20.712 19.4739 20.364C19.7759 20.02 19.8739 19.772 20.0739 19.374C20.2719 18.978 20.1739 18.63 20.0239 18.332C19.8739 18.036 18.6859 15.11 18.1919 13.92C17.7079 12.762 17.2179 12.918 16.8539 12.9L15.7139 12.88C15.3179 12.88 14.6739 13.028 14.1299 13.624C13.5859 14.22 12.0499 15.656 12.0499 18.582C12.0499 21.508 14.1799 24.334 14.4759 24.73C14.7739 25.126 18.6659 31.13 24.6279 33.704C26.0459 34.316 27.1539 34.682 28.0159 34.956C29.4399 35.408 30.7359 35.344 31.7599 35.192C32.9019 35.022 35.2759 33.754 35.7719 32.366C36.2679 30.976 36.2679 29.786 36.1179 29.538Z"
            fill="#292D32"
          />
        </svg>
      )
    case "rightArrow":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4301 5.93005L20.5001 12.0001L14.4301 18.0701"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 12H20.33"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "chev":
      return (
        <svg
          className={style}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.92 15.09L13.4 8.56996C12.63 7.79997 11.37 7.79997 10.6 8.56997L4.07996 15.09"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "congelados":
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.52827 5.98432C1.83707 5.62958 1.83706 5.05841 2.52826 4.70367L9.47131 1.14032C10.1625 0.785577 11.2754 0.785584 11.9666 1.14032L18.9096 4.70366C19.6008 5.05841 19.6063 5.64044 18.9097 5.98432L14.8683 7.97919"
            stroke="black"
            strokeWidth="1.36499"
            strokeLinecap="round"
          />
          <path
            d="M8.26743 20.8277C8.03657 20.6869 7.77504 20.5773 3.09385 18.0051C2.29085 17.5442 1.44884 17.3143 1.47756 16.3888L1.48292 6.21158C1.48341 5.28569 1.81774 5.10789 2.42022 4.81926"
            stroke="black"
            strokeWidth="1.23164"
            strokeLinecap="round"
          />
          <path
            d="M2.23624 5.80212C2.23624 5.80212 3.59557 6.50794 4.32753 6.90006C5.05949 7.29218 6.00058 8.23326 6.00058 9.85402C6.00058 11.4748 6.00058 14.1935 6.00058 14.1935"
            stroke="black"
            strokeWidth="1.23035"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.8492 13.4525L11.8226 12.9497C11.2994 12.6812 11.2994 12.2488 11.8226 11.9802L17.0791 9.28246C17.6024 9.0139 18.4449 9.01389 18.9682 9.28246L24.2246 11.9802C24.7479 12.2488 24.7461 12.6776 24.2246 12.9498C24.2246 12.9498 22.9193 13.5856 22.2601 13.9297C21.764 14.1886 21.0072 14.6802 21.0072 14.6802"
            stroke="black"
            strokeWidth="1.41049"
            strokeLinecap="round"
          />
          <path
            d="M24.3032 12.0388C24.7577 12.2574 24.9897 12.6295 24.9905 13.3306C24.9931 15.7608 24.996 18.191 24.9948 20.6212C25.0164 21.322 24.3974 21.5259 23.7755 21.8451C23.7755 21.8451 21.2293 23.1795 19.9556 23.8454C18.356 24.6815 17.7675 24.7283 16.1373 23.9185C14.8138 23.2612 12.167 21.9465 12.167 21.9465C11.541 21.6355 10.926 21.4233 10.9477 20.7226C10.9464 18.2924 10.9494 15.8622 10.9519 13.432C10.9528 12.7309 11.1848 12.3587 11.6393 12.1402"
            stroke="black"
            strokeWidth="1.22826"
          />
          <path
            d="M11.6015 12.8118C11.6015 12.8118 12.6307 13.3462 13.1848 13.643C13.739 13.9399 14.4514 14.6524 14.4514 15.8794C14.4514 17.1065 14.4514 19.1647 14.4514 19.1647"
            stroke="black"
            strokeWidth="1.23035"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5345 15.3929C17.0886 15.6898 17.5964 16.255 17.6348 17.4814L17.7087 19.845C17.7392 20.8191 19.4822 20.7305 19.4822 19.7927V17.3173C19.4822 16.0103 20.3755 14.9678 21.2381 14.4842"
            stroke="black"
            strokeWidth="1.14832"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.194 4.30334C19.1028 4.90231 19.7926 4.99923 19.7951 5.52691C19.796 5.73094 19.8361 7.3439 19.8361 7.61574"
            stroke="black"
            strokeWidth="1.0663"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "libreria":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.35339 18V7C4.35339 3 5.35339 2 9.35339 2H16.3534C20.3534 2 21.3534 3 21.3534 7V17C21.3534 17.14 21.3534 17.28 21.3434 17.42"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.20339 15H21.3534V18.5C21.3534 20.43 19.7834 22 17.8534 22H7.85339C5.92339 22 4.35339 20.43 4.35339 18.5V17.85C4.35339 16.28 5.63339 15 7.20339 15Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.85339 7H16.8534"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.85339 10.5H13.8534"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "vinoteca":
      return (
        <svg
          width="22"
          height="27"
          viewBox="0 0 22 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3707 12.411C6.22741 12.411 7.73254 10.9059 7.73254 9.04916C7.73254 7.19245 6.22741 5.68732 4.3707 5.68732C2.51399 5.68732 1.00882 7.19245 1.00882 9.04916C1.00882 10.9059 2.51399 12.411 4.3707 12.411Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.1878 12.411C13.0445 12.411 14.5496 10.9059 14.5496 9.04916C14.5496 7.19245 13.0445 5.68732 11.1878 5.68732C9.33104 5.68732 7.82588 7.19245 7.82588 9.04916C7.82588 10.9059 9.33104 12.411 11.1878 12.411Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0049 12.411C19.8616 12.411 21.3668 10.9059 21.3668 9.04916C21.3668 7.19245 19.8616 5.68732 18.0049 5.68732C16.1482 5.68732 14.6431 7.19245 14.6431 9.04916C14.6431 10.9059 16.1482 12.411 18.0049 12.411Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.82591 19.2282C9.68262 19.2282 11.1878 17.723 11.1878 15.8663C11.1878 14.0096 9.68262 12.5045 7.82591 12.5045C5.9692 12.5045 4.46403 14.0096 4.46403 15.8663C4.46403 17.723 5.9692 19.2282 7.82591 19.2282Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5497 19.2282C16.4064 19.2282 17.9116 17.723 17.9116 15.8663C17.9116 14.0096 16.4064 12.5045 14.5497 12.5045C12.693 12.5045 11.1878 14.0096 11.1878 15.8663C11.1878 17.723 12.693 19.2282 14.5497 19.2282Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.1878 25.485C13.0445 25.485 14.5496 23.9798 14.5496 22.1231C14.5496 20.2664 13.0445 18.7612 11.1878 18.7612C9.33104 18.7612 7.82588 20.2664 7.82588 22.1231C7.82588 23.9798 9.33104 25.485 11.1878 25.485Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.1878 5.68732C11.0701 4.89152 11.1733 4.07864 11.4862 3.33753C11.7991 2.59642 12.3097 1.95558 12.9621 1.48499"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "limpieza":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7234 5.66998L7.3034 7.74999L5.7434 5.19C5.1734 4.25 5.4734 3.01 6.4134 2.44C7.3534 1.87 8.5934 2.16998 9.1634 3.10998L10.7234 5.66998Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6734 9.15997L9.5134 11.08C7.6734 12.2 7.11339 14.46 8.00339 16.26L10.0534 20.44C10.7134 21.79 12.3134 22.26 13.5934 21.47L20.0234 17.56C21.3134 16.78 21.6234 15.15 20.7334 13.94L17.9634 10.2C16.7634 8.58001 14.5134 8.03997 12.6734 9.15997Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.61 5.09797L6.48544 8.21857L8.56584 11.635L13.6904 8.51437L11.61 5.09797Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1634 16.81L16.8134 19.52"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6034 18.37L14.2534 21.08"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.7234 15.25L19.3734 17.96"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "bebidas-sin-alcohol":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3839 1.5625V7.8125H14.462C15.5393 7.92857 16.5351 8.44027 17.2568 9.24851C17.9784 10.0567 18.3745 11.104 18.3682 12.1875V23.75H6.25887V12.1094C6.25252 11.0465 6.64034 10.019 7.34737 9.22543C8.05439 8.43183 9.03046 7.92843 10.087 7.8125V1.5625H14.3839Z"
            stroke="black"
            strokeWidth="1.17188"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.087 4.45312H14.3838"
            stroke="black"
            strokeWidth="1.17188"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25892 14.375H18.3683"
            stroke="black"
            strokeWidth="1.17188"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25892 18.5156H18.3683"
            stroke="black"
            strokeWidth="1.17188"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "bebidas-con-alcohol":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.31884 1.4338H8.6159H8.65614C8.73038 1.39785 8.79116 1.34074 8.83013 1.27032C8.8691 1.1999 8.88434 1.11964 8.87375 1.04058C8.86316 0.961519 8.82726 0.887543 8.771 0.828837C8.71474 0.770132 8.64088 0.729581 8.55958 0.712761H4.31884C4.25842 0.693726 4.19413 0.688693 4.13128 0.698076C4.06843 0.707458 4.00879 0.730989 3.95727 0.766737C3.90574 0.802484 3.8638 0.849431 3.83487 0.903722C3.80594 0.958014 3.79086 1.0181 3.79086 1.07906C3.79086 1.14002 3.80594 1.20012 3.83487 1.25441C3.8638 1.3087 3.90574 1.35564 3.95727 1.39139C4.00879 1.42714 4.06843 1.45067 4.13128 1.46005C4.19413 1.46943 4.25842 1.46441 4.31884 1.44537V1.4338Z"
            fill="#292D32"
            stroke="#292D32"
            strokeWidth="0.6"
          />
          <path
            d="M23.3016 10.4487H22.3038V9.97446C22.3114 9.48661 22.153 9.00965 21.8524 8.61585C21.5518 8.22204 21.1255 7.93285 20.6381 7.79206H20.6139C20.115 7.66096 20.0869 7.34093 20.0869 7.34093L19.604 3.20364H18.8396L19.3103 7.22912L19.3385 7.41419C19.3385 7.41419 19.3868 8.18536 20.0104 8.32417C20.1945 8.38245 20.3734 8.45466 20.5455 8.54009C20.841 8.66028 21.0932 8.86104 21.2706 9.11743C21.448 9.37382 21.5428 9.67453 21.5434 9.98217V10.4564H13.6372V9.98217C13.6392 9.72557 13.7061 9.47326 13.8322 9.24692C13.9584 9.02057 14.14 8.82697 14.3615 8.68276C14.4329 8.63669 14.5067 8.59422 14.5828 8.55551C14.7685 8.45852 14.9639 8.37972 15.1662 8.32031C15.661 8.20463 15.7817 7.68025 15.8139 7.47589L16.164 3.20364H15.3995L15.0575 7.3525C15.0174 7.46701 14.9457 7.56901 14.8501 7.64773C14.7545 7.72646 14.6385 7.77899 14.5144 7.79978L14.4701 7.81906C13.9958 7.96738 13.5836 8.25747 13.2939 8.64677C13.0043 9.03608 12.8524 9.50411 12.8607 9.98217V10.4564H11.2755V9.98217C11.2831 9.49432 11.1247 9.01737 10.8241 8.62356C10.5235 8.22976 10.0972 7.94056 9.60975 7.79978L9.56147 7.7805C9.06256 7.6494 9.06256 7.33708 9.06256 7.33708L8.57974 3.19978H7.81126L8.282 7.22526L8.30615 7.41033C8.30615 7.41033 8.35443 8.1815 8.97807 8.32031C9.16272 8.37705 9.34179 8.44931 9.51319 8.53624V8.53624C9.80825 8.65659 10.0598 8.85751 10.2365 9.11395C10.4133 9.37039 10.5073 9.671 10.507 9.97831V10.4526H2.62099V9.97831C2.62156 9.64767 2.73298 9.32597 2.93884 9.06063C3.04799 8.91022 3.18424 8.77966 3.34119 8.67505L3.55846 8.54781C3.7454 8.45045 3.94223 8.37164 4.14588 8.3126C4.32802 8.24824 4.48629 8.13376 4.60081 7.98354C4.71533 7.83332 4.78102 7.65404 4.78964 7.46817L5.1437 3.19592H4.37522L4.03322 7.34479C3.99626 7.4539 3.93055 7.55204 3.84245 7.62972C3.75435 7.70739 3.64683 7.76198 3.53029 7.78821H3.50213C3.02428 7.94017 2.60797 8.23151 2.31146 8.62145C2.01494 9.01139 1.85307 9.48042 1.84848 9.96289V10.4372H0.862735C0.756026 10.4372 0.653687 10.4778 0.578232 10.5501C0.502778 10.6224 0.460388 10.7205 0.460388 10.8227V23.3272C0.465554 23.4261 0.510213 23.5192 0.585115 23.5874C0.660017 23.6556 0.759422 23.6936 0.862735 23.6935H23.2936C23.3439 23.694 23.3938 23.6849 23.4405 23.6666C23.4871 23.6484 23.5294 23.6215 23.565 23.5873C23.6006 23.5532 23.6288 23.5126 23.6478 23.468C23.6668 23.4233 23.6763 23.3754 23.6758 23.3272V10.815C23.6763 10.7674 23.6671 10.7202 23.6485 10.676C23.63 10.6319 23.6026 10.5916 23.5679 10.5576C23.5331 10.5236 23.4917 10.4965 23.446 10.4778C23.4004 10.4591 23.3513 10.4492 23.3016 10.4487V10.4487ZM22.8993 22.9532H1.25301V11.1813H22.9194L22.8993 22.9532Z"
            fill="#292D32"
            stroke="#292D32"
            strokeWidth="0.6"
          />
          <path
            d="M15.3351 1.4338H19.6443H19.6885C19.7627 1.39785 19.8235 1.34074 19.8625 1.27032C19.9015 1.1999 19.9167 1.11964 19.9061 1.04058C19.8955 0.961519 19.8596 0.887543 19.8034 0.828837C19.7471 0.770132 19.6733 0.729581 19.5919 0.712761H15.3351C15.2747 0.693726 15.2104 0.688693 15.1476 0.698076C15.0847 0.707458 15.0251 0.730989 14.9736 0.766737C14.922 0.802484 14.8801 0.849431 14.8512 0.903722C14.8222 0.958014 14.8071 1.0181 14.8071 1.07906C14.8071 1.14002 14.8222 1.20012 14.8512 1.25441C14.8801 1.3087 14.922 1.35564 14.9736 1.39139C15.0251 1.42714 15.0847 1.45067 15.1476 1.46005C15.2104 1.46943 15.2747 1.46441 15.3351 1.44537V1.4338Z"
            fill="#292D32"
            stroke="#292D32"
            strokeWidth="0.6"
          />
          <path
            d="M5.357 20.1692H18.8155C18.9153 20.1646 19.0097 20.1245 19.0804 20.0568C19.151 19.9891 19.1928 19.8986 19.1977 19.8029V14.3315C19.2011 14.2817 19.1936 14.2317 19.1758 14.1848C19.1581 14.1379 19.1304 14.0949 19.0945 14.0587C19.0586 14.0225 19.0153 13.9938 18.9673 13.9744C18.9193 13.955 18.8676 13.9453 18.8155 13.946H5.357C5.25029 13.946 5.14795 13.9866 5.0725 14.0589C4.99704 14.1312 4.95465 14.2293 4.95465 14.3315V19.8029C4.95982 19.9018 5.00448 19.995 5.07938 20.0632C5.15428 20.1314 5.25368 20.1694 5.357 20.1692ZM5.73923 14.6978H18.4373V19.4444H5.73923V14.6978Z"
            fill="#292D32"
            stroke="#292D32"
            strokeWidth="0.6"
          />
        </svg>
      )
    case "variados":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0088 16C14.0088 17.77 13.2388 19.37 12.0088 20.46C10.9488 21.42 9.54879 22 8.00879 22C4.69879 22 2.00879 19.31 2.00879 16C2.00879 13.24 3.88879 10.9 6.42879 10.21C7.11879 11.95 8.59879 13.29 10.4288 13.79C10.9288 13.93 11.4588 14 12.0088 14C12.5588 14 13.0888 13.93 13.5888 13.79C13.8588 14.47 14.0088 15.22 14.0088 16Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0088 8C18.0088 8.78 17.8588 9.53 17.5888 10.21C16.8988 11.95 15.4188 13.29 13.5888 13.79C13.0888 13.93 12.5588 14 12.0088 14C11.4588 14 10.9288 13.93 10.4288 13.79C8.59879 13.29 7.11879 11.95 6.42879 10.21C6.15879 9.53 6.00879 8.78 6.00879 8C6.00879 4.69 8.69879 2 12.0088 2C15.3188 2 18.0088 4.69 18.0088 8Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.0088 16C22.0088 19.31 19.3188 22 16.0088 22C14.4688 22 13.0688 21.42 12.0088 20.46C13.2388 19.37 14.0088 17.77 14.0088 16C14.0088 15.22 13.8588 14.47 13.5888 13.79C15.4188 13.29 16.8988 11.95 17.5888 10.21C20.1288 10.9 22.0088 13.24 22.0088 16Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "check":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5992 15.8445L17.2219 10.2218"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5986 15.8445L9.09424 13.34"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <ellipse
            cx="12.6803"
            cy="12.4947"
            rx="8.64441"
            ry="8.4712"
            stroke="#292D32"
            stroke-width="1.5"
          />
        </svg>
      )
  }
}

export default Icon

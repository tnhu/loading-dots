declare namespace JSX {
  interface IntrinsicElements {
    'loading-dots': LoadingDotsAttributes
  }
}

interface LoadingDotsAttributes extends Partial<HTMLElement> {
  rgb?: boolean
}

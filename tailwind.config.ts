import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#166534',
        accent: '#f59e0b',
        ink: '#0b1220'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2,6,23,.08)'
      }
    }
  }
}

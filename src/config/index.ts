interface Config {
  mode: string
  apiURL: string
}

export const config: Config = {
  mode: import.meta.env.VITE_MODE,
  apiURL: import.meta.env.VITE_API_URL
}

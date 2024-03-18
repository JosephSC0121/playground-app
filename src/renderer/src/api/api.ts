import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'http://localhost:8000'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

interface UserData {
  access_token: string
  token_type: string
}

export const login = async (username: string, password: string): Promise<UserData> => {
  try {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    const response: AxiosResponse<UserData> = await axios.post(
      'http://localhost:8000/auth/token',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Manejar errores específicos de Axios
      if (error.response) {
        // El servidor respondió con un estado de error
        throw new Error(error.response.data.message || 'Error al iniciar sesión')
      } else if (error.request) {
        // La solicitud se realizó pero no se recibió respuesta
        throw new Error('No se recibió respuesta del servidor')
      } else {
        // Ocurrió un error durante la configuración de la solicitud
        throw new Error('Error durante la configuración de la solicitud')
      }
    } else {
      // Otro tipo de error, como un error de red
      throw new Error('Error de red al intentar iniciar sesión')
    }
  }
}

export default api

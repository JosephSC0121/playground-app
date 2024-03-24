import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'http://localhost:8000'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

interface UserRegister {
  nombres: string
  apellidos: string
  email: string
  username: string
  password: string
}

interface UserData {
  id: number
  nombres: string
  apellidos: string
  aboutme: string
  username: string
  email: string
  level: number
}

interface TokenData {
  access_token: string
  token_type: string
}

export const login = async (username: string, password: string): Promise<TokenData> => {
  try {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    const response: AxiosResponse<TokenData> = await api.post('/auth/token', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
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
export const getUserData = async (accessToken: string): Promise<UserData> => {
  try {
    const response: AxiosResponse<UserData> = await api.get('/user/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Error al obtener datos del usuario')
      } else if (error.request) {
        throw new Error('No se recibió respuesta del servidor')
      } else {
        throw new Error('Error durante la configuración de la solicitud')
      }
    } else {
      throw new Error('Error de red al intentar obtener datos del usuario')
    }
  }
}
export const registerUser = async (
  nombres: string,
  apellidos: string,
  email: string,
  username: string,
  password: string
): Promise<UserRegister> => {
  try {
    // Realizar la solicitud de registro de usuario
    const response: AxiosResponse<UserRegister> = await api.post('/auth/', {
      nombres,
      apellidos,
      email,
      username,
      password
    })

    // Devolver los datos de la respuesta
    return response.data
  } catch (error) {
    // Manejar errores de la solicitud
    if (axios.isAxiosError(error)) {
      // Manejar errores específicos de Axios
      if (error.response) {
        // El servidor respondió con un estado de error
        throw new Error(error.response.data.message || 'Error al registrar usuario')
      } else if (error.request) {
        // La solicitud se realizó pero no se recibió respuesta
        throw new Error('No se recibió respuesta del servidor al intentar registrar usuario')
      } else {
        // Ocurrió un error durante la configuración de la solicitud
        throw new Error(
          'Error durante la configuración de la solicitud al intentar registrar usuario'
        )
      }
    } else {
      // Otro tipo de error, como un error de red
      throw new Error('Error de red al intentar registrar usuario')
    }
  }
}

export default api

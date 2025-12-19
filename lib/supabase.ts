import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'
import { AppState, Platform } from 'react-native'
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://isibdtuopxlgxxkldvhy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Z2pvYm5sam55anNwaW1zdm9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MjAwMjYsImV4cCI6MjA3ODA5NjAyNn0.ZAF7qLaVyzdwzGzVhDnPlQnfua-oa5A8rAO6oRkCft8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    ...(Platform.OS !== "web" ? { storage: AsyncStorage } : {}),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
})


if (Platform.OS !== "web") {
  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })
}

export const uploadImage = async (base64: string, fileName: string) => {
  const binary = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))
  const { data, error } = await supabase.storage
    .from('social-apps') // replace with your bucket name
    .upload(`${fileName}`, binary, {
      cacheControl: '3600',
      upsert: false,
      contentType: 'image/jpeg', // or detect dynamically
    })

  if (error) {
    console.error('Upload error:', error)
    return null
  }

  return data
}
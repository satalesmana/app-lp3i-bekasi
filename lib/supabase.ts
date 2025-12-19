import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'
import { AppState, Platform } from 'react-native'
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://oapoiqxecblocwxilltj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hcG9pcXhlY2Jsb2N3eGlsbHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MTk4MTgsImV4cCI6MjA3ODA5NTgxOH0.10-RW3FxB6MQ1ep-WrAEIdbSMKxMRCkDD6xbEgCp6Sk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    ...(Platform.OS !== "web" ? { storage: AsyncStorage } : {}),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
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
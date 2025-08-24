import { account } from '@/lib/appwrite'

export async function getCurrentUserSafe() {
  try {
    return await account.get()
  } catch {
    return null
  }
}
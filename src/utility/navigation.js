import { redirect } from 'next/navigation'
 
 
export async function NavPush(url) {
  redirect(url)
}
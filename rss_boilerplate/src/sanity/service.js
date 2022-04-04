import client from './client'

export const hentAlleVarer = async () => {
   const varer = await client.fetch (`*[_type == "vare"]{varenavn,mengde}`)
   return varer
}
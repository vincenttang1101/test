import { z } from 'zod'

const searchSchema = z.object({
  search: z.string()
})

type SearchFormData = z.infer<typeof searchSchema>

export default searchSchema
export type { SearchFormData }

import { SupabaseAuthClient } from '@supabase/supabase-js/dist/main/lib/SupabaseAuthClient'
import { SupabaseClient } from '@supabase/supabase-js'
import { SupabaseQueryBuilder } from '@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder'

export type IServiceAuthClient = SupabaseAuthClient

export type IServiceClient = SupabaseClient

export type IServiceQueryBuilder<T> = SupabaseQueryBuilder<T>

export type IServiceResponse<T> = Promise<{ error?: string, message?: string, data?: T }>

export type IServiceUpsertConstraint = {
  onConflict?: string
  returning?: 'minimal' | 'representation'
  count?: null | 'exact' | 'planned' | 'estimated'
  ignoreDuplicates?: boolean
}

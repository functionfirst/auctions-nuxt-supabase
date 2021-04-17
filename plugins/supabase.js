import supabase from '~/utils/supabase'

export default (_, inject) => {
  inject('supabase', supabase)
}

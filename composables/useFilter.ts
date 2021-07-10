const formatCurrency = (value: number) => {
  const options = {
    style: 'currency',
    currency: 'GBP'
  }

  const { format } = new Intl.NumberFormat('en-GB', options)

  return format(value)
}

export default function useFilter() {
  return {
    formatCurrency
  }
}

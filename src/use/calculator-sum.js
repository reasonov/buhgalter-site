import { ref } from 'vue'

export function useCalcSum (number = 0) {
  const sum = ref(0)

  sum.value = number * 3

  return { sum }
}

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useClipboardStore = defineStore('clipboard', () => {
  // On l'initialise à null pour que le bouton "Coller" soit grisé au début
  const interchanges = ref<any[] | null>(null)

  const copy = (data: any) => {
    // On fait une copie "propre" pour éviter les bugs de référence
    interchanges.value = JSON.parse(JSON.stringify(data))
  }

  return { interchanges, copy }
})
let timer = null

export const debounce = (callback, time) => {
  if (timer) clearTimeout(timer)

  timer = setTimeout(callback, time)

}
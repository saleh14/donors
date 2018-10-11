const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  })

async function saveUserFields (formData) {
  await sleep(1000)
  return { data: { formData } }
}

export { saveUserFields }

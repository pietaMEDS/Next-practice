export async function validateEmail(email) {
    let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return reg.test(email)
}

export async function validatePassword( password ) {
    let reg = /[a-zA-Z0-9]{6,}/
    return reg.test(password)
}
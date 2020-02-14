module.exports = {
  validateEmail (email) {
    const re = /^(([^<>()[\].,:\s@']+(\.[^<>()[\].,:\s@']+)*)|('.+'))@(([^<>()[\].,:\s@']+\.)+[^<>()[\].,:\s@']{2,})$/i

    if (!re.test(email)) {
      return false
    }
  }
}

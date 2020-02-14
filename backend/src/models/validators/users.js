module.exports = {
  validateCommonUser (type) {
    if (type === 'Pessoa física') {
      return true
    } else {
      return false
    }
  },

  validateOrganization (type) {
    if (type === 'Pessoa jurídica') {
      return true
    } else {
      return false
    }
  }
}

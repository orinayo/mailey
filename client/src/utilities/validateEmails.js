const regExpForEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// Whitespace and commas at beginning and end
const trailingCommaRegExp = /(^\s*,)|(,\s*$)/g

export const validateRecipients = recipients => {
  if (trailingCommaRegExp.test(recipients)) {
    return 'Remove any leading or trailing commas or whitespaces'
  }

  const invalidEmails = recipients.split(',')
    .map(recipient => recipient.trim())
    .filter(email => regExpForEmail.test(email) === false)

  if (invalidEmails.length === 1) {
    return `This email is invalid: ${invalidEmails}`
  }

  if (invalidEmails.length > 1) {
    return `These emails are invalid: ${invalidEmails}`
  }

  return null
}

export const validateSendersEmail = fromEmail => {
  if (trailingCommaRegExp.test(fromEmail)) {
    return 'Remove any leading or trailing commas or whitespaces'
  }

  fromEmail.trim()
  if (!regExpForEmail.test(fromEmail)) {
    return 'This email is invalid'
  }
}

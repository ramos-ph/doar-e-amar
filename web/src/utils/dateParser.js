export default function dateParser (date) {
  if (date) {
    return date.split('T')[0].split('-').reverse().join('/')
  }
};

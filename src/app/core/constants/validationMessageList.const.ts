export const ValidationMessageList = [
  { type: 'required', message: 'Intorduceți o valoare.' },
  { type: 'maxlength', message: 'Valoarea introdusă depășește lungimea maximă.' },
  {
    type: 'minlength',
    message: 'Valoarea introdusă nu a atins lungimea minimă.',
  },
  { type: 'pattern', message: 'Formatul valorii introduse este incorect.' },
  {
    type: 'min',
    message: 'Valoarea introdusă este prea mică.',
  },
  { type: 'max', message: 'Valoarea introdusă a depășit valoarea maximă.' },
  { type: 'email', message: 'Valoarea introdusă trebuie să fie o adresă de email.' },
];

import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('required')
    .min(10, 'The number should contain at least 10 digits')
    .matches(
      /^[\\+]?[-\s\\.]?[0-9]{1,2}?[-\s\\.]?[0-9]{1,4}?[-\s\\.]?[0-9]{1,4}?[-\s\\.]?[0-9]{1,4}?[-\s\\.]?[0-9]{1,4}$/,
      'Phone number can contain dashes, spaces, parentheses and can start with +'
    ),
});

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      'Password must contain at least one number, one uppercase and one lowercase letter'
    ),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      'Password must contain 8 or more characters and have at least one number, one uppercase and one lowercase letter'
    ),
});

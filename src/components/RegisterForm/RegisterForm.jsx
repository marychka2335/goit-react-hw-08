import TextField from '@mui/material/TextField';
import { Form, Section } from './RegisterForm.styled';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { registerUser } from './../../redux/operations';

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Section>
      <Form
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          type="text"
          name="name"
          label="name"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          type="email"
          name="email"
          label="email"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          type="password"
          name="password"
          label="password (min 7 symbols)"
          variant="outlined"
          required
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: 'rgb(124, 54, 54)',
            display: 'block',
            padding: '10px 35px',
          }}
        >
          Register
        </Button>
      </Form>
    </Section>
  );
}
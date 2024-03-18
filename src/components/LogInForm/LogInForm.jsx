import TextField  from '@mui/material/TextField';
import { Form, Section } from './LogInForm.styled';
import  Button  from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logIn } from './../../redux/operations';

export function LogInForm() {
    const dispatch = useDispatch()
    
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(logIn({ email: form.elements.email.value, password: form.elements.password.value }));
        form.reset()
    }
  return (
    <Section>
      <Form
      component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
    >
        <TextField
              id="outlined-basic"
              type='email'
        name="email"
        label="email"
              variant="outlined"
          required
      />
      <TextField
              id="outlined-basic"
              type='password'
        name="password"
        label="password"
              variant="outlined"
              required
        />
        <Button variant="contained" type="submit" style={{ backgroundColor: 'rgb(124, 54, 54)', display: 'block', padding: '10px 35px'}}>
        Log in
        </Button>
    </Form>
    </Section>
     );
}
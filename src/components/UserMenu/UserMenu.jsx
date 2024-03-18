import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './../../redux/operations';
import { selectUser } from './../../redux/selectors';
import { Button, Text, Wrapper } from './UserMenu.styled';

export function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = evt => {
    evt.preventDefault();
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <Text>Welcome, {user.name}</Text>
      <Button onClick={handleClick} variant="contained">
        Log out
      </Button>
    </Wrapper>
  );
}
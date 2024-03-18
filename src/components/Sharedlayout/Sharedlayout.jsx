import { AuthNav } from "./../AuthNav/AuthNav";
import { Navigation } from "./../Navigation/Navigation";
import { UserMenu } from "./../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectLoggedIn } from "./../../redux/selectors";
import { Header, Wrapper } from "./Sharedlayout.styled";


export function Sharedlayout() {
    const isLoggedIn = useSelector(selectLoggedIn);
  return (
      <Wrapper>
      <Header>
          <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </Header>
          <Outlet />
      </Wrapper>
  )
}
// import css from './App.module.css';
// import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
//import { Filter } from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import { Sharedlayout } from './Sharedlayout/Sharedlayout';
import { Home } from './Home/Home';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LogInForm } from './LogInForm/LogInForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './../redux/operations';
import { selectRefreshing } from './../redux/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
     !isRefreshing && <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/contacts" element={<PrivateRoute component={ContactsList} redirectTo='/login'/>}></Route>
        <Route path="/register" element={<RestrictedRoute component={RegisterForm} redirectTo='/contacts' />}></Route>
        <Route path="/login" element={<RestrictedRoute component={LogInForm} redirectTo='/contacts' />}></Route>
      </Route>
    </Routes>
  );
}

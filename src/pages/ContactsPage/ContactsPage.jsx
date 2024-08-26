import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./ContactsPage.module.css";
import { useDispatch, useSelector } from "react-redux";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <div className={s.bg}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;

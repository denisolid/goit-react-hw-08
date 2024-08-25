import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../../redux/contactsOps";
// import { deleteContact } from "../../../redux/contactsSlice";
const Contact = ({ contact }) => {
  const name = contact.name;
  const number = contact.number;
  const id = contact.id;
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      <button
        type="button"
        className="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

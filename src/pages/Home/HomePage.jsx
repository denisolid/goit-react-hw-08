import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <div className={s.bg}>
        <h1 className={s.title}>
          Welcome to the Main Page of Contacts Management App!
        </h1>
      </div>
    </>
  );
};

export default HomePage;

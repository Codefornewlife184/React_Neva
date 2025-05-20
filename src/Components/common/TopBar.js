/* eslint-disable no-unused-vars */
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
          className="topbar fixed-top sticky-top"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/assets/images/background/breadcrumbs.png')", padding: "10px" }}
        >
          <Container>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex">
                <Button
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    border: 'none',
                    color: '#000',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.25)'
                  }}
                  onClick={() => changeLanguage("tr")}
                >
                  {t("TR")}
                </Button>
                &nbsp;
                <Button
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    border: 'none',
                    color: '#000',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.25)'
                  }}
                  onClick={() => changeLanguage("en")}
                >
                  {t("EN")}
                </Button>
              </div>
            </div>
          </Container>
        </div>
  );
};

export default TopBar;

//* d-none d-md-inline yapma nedenimiz küçük ekranda
//* kaybolsunlar diye ve block olursa aşağı iner diye inline yaptık

//? d-none d-md-block yapma nedenimiz küçük ekranda kaybolsunlar diye yapmış olduk...

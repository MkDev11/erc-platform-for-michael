
import { animateScroll as scroll } from 'react-scroll';
import { ReactComponent as ScrollTopIcon } from 'assets/icons/icon-scrolltop.svg';
import "./Footer.scss";

const Footer = ({ visible }) => {
  const handleScrollTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* <footer className="container mx-auto px-4 py-4">
        <p className="text-sm text-center">
          Copyright 2022 © All rights Reserved. | Proudly Created by Adapting
          Social
        </p>
      </footer> */}
      {visible && (
        <div className="scrolltop">
          <span onClick={handleScrollTop}>
            <ScrollTopIcon />
          </span>
        </div>
      )}
    </>
  );
};

export default Footer;

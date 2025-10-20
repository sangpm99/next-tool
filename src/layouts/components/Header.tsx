import Logo from "./Logo";

const Header = () => {
  return (
    <header className="text-white flex justify-between py-4 layout-spacing relative z-[999] top-0 left-0 right-0">
      <Logo></Logo>
    </header>
  );
};

export default Header;

const Footer = () => {
  return (
    <p className="border-top py-3 mb-0 text-center bg-light text-dark">
      <b> Milk & Honey</b> &copy; 2016-{new Date().getFullYear()}{" "}
      <b>made by Elaad</b>
    </p>
  );
};

export default Footer;

import IconSvg from "./IconSvg";

const ItemContact = ({ icon, text }) => {
  return (
    <div className="ItemContact">
      <IconSvg src={`https://josephsb-api.vercel.app/${icon}`} />
      <p className="ItemContact_Text">{text}</p>
    </div>
  );
};

export default ItemContact;

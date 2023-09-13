import banner_img from "../../assets/images/banner_img.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="w-11 h-11" src={banner_img}></img>
    </header>
  );
};

export default Header;

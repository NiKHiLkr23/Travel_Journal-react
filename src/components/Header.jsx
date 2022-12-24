import logo from "/images/nav-logo.svg";

export default function Header() {
  return (
    <div className="p-3 shadow-md flex justify-center items-center">
      <img src={logo} className="w-10 mr-3" />
      <p className="text-black text-2xl">My Travel Journal</p>
    </div>
  );
}

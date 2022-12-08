import GifticonItem from "../components/GifticonItem";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SortDropDown from "../components/SortDropDown";

function Main() {
  return (
    <div>
      <Header />
      <div>
        <SortDropDown />
      </div>
      <GifticonItem />
      <Nav />
    </div>
  );
}

export default Main;

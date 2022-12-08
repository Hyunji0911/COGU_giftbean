import GifticonItem from "../components/GifticonItem";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SortDropDown from "../components/SortDropDown";

function UsedGifticon() {
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

export default UsedGifticon;

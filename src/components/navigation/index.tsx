import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/assets/img/Combined Shape.svg";
import logo from "../../../public/assets/img/audiophile-icon.svg";
const Index = () => {
  return (
    <div className="container">
      <nav>
        <ul className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src={logo.src}
                width={143}
                height={25}
                alt="audiophile logo"
              />
            </Link>
          </div>
          <div className="flex items-center justify-between  [&>*]:tracking-wider [&>*]:uppercase [&>*]:mr-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Headphones</Link>
            </li>
            <li>
              <Link href="#">Speakers</Link>
            </li>
            <li>
              <Link href="#">Earphones</Link>
            </li>
          </div>
          <div>
            <Link href="/">
              <Image src={icon.src} width={23.33} height={20} alt="cart" />
            </Link>
          </div>{" "}
        </ul>
      </nav>
    </div>
  );
};
export default Index;

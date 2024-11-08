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
                width={100}
                height={100}
                alt="audiophile logo"
              />
            </Link>
          </div>
          <div className="flex items-center justify-between [&>*]:text-white [&>*]:tracking-wider [&>*]:uppercase [&>*]:mr-4">
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
              <Image src={icon.src} width={50} height={50} alt="" />
            </Link>
          </div>{" "}
        </ul>
      </nav>
    </div>
  );
};
export default Index;

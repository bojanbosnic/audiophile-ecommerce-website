import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation/index";

export default function Home() {
  return (
    <div className="bg-hero-pattern bg-auto bg-no-repeat bg-center">
      <Navigation />
      <h1 className="font-primary text-primary">NEW PRODUCT</h1>
    </div>
  );
}
{
  /* <Button color="primary" variant="outline">
        See Product
      </Button>
      <Button color="secondary" variant="outline">
        See Product
      </Button> */
}

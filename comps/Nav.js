import { Navbar , Text, css} from "@nextui-org/react";
import { useState } from "react";

const Nav = () => {

    const [variant, setVariant] = useState("floating");

    const variants = ["static", "floating", "sticky"];

    return (
        <div>
          <Navbar css={{color: '$blue700', }} variant={variant}>
            <Navbar.Brand >
            <img
            src="/Skywatch.png"
            alt="Logo"
            width={125}
            height={125}
            priority
          />
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" >
              <Navbar.Link href="http://zxhirali.ca/">My Portfolio</Navbar.Link>
              <Navbar.Link href="https://github.com/ZahirA1i/SkyWatch">Github</Navbar.Link>
            </Navbar.Content>
          </Navbar>
        </div>
      );
    }

    export default Nav;

import { Navbar, Dropdown, Button, Link } from "@nextui-org/react";
import { icons } from "./icon";
import Logo from "components/logo";
import Router from "next/router";

export default function NextNavbar() {
  const handler = (route) =>
    Router.push({
      href: `/${route}`,
    });
  const collapseItems = [
    {
      path: "",
      label: "Home",
    },
    {
      path: "linkedin-automation",
      label: "Linkedin Automation",
    },
    {
      path: "contact-data",
      label: "Contact Data",
    },
    {
      path: "linkedin-lead",
      label: "Linkedin Lead Generation Services",
    },
    {
      path: "about-us",
      label: "About Us",
    },
    {
      path: "call",
      label: "Contact Us",
    },
  ];

  return (
    <Navbar variant="sticky" maxWidth="fluid" colors="gray900">
      <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Logo />
      </Navbar.Brand>
      <Navbar.Content
        hideIn="xs"
        activeColor="secondary"
        css={{
          color: "primary",
        }}
      >
        <Navbar.Link href="/" color="inherit">
          Home
        </Navbar.Link>
        <Dropdown isBordered>
          <Navbar.Item>
            <Dropdown.Button
              auto
              light
              css={{
                px: 0,
                dflex: "center",
                svg: { pe: "none" },
              }}
              iconRight={icons.chevron}
              ripple={false}
            >
              Solutions
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu
            disabledKeys={["Product", "Services"]}
            aria-label="Pulpy Solutions"
            css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "70px",
              "& .nextui-dropdown-item": {
                py: "$4",
                // dropdown item left icon
                svg: {
                  color: "$secondary",
                  mr: "$4",
                },
                // dropdown item title
                "& .nextui-dropdown-item-content": {
                  w: "100%",
                  fontWeight: "$semibold",
                },
              },
            }}
          >
            <Dropdown.Item key="Product">Products</Dropdown.Item>
            <Dropdown.Item
              key="linkedin-automation"
              showFullDescription
              description="Build sales funnel using a variety of LinkedIn actions"
              icon={icons.scale}
              Link="linkedin-automation"
            >
              <Navbar.Link href="/linkedin-automation" onClick={() => handler()} color="inherit">
          LinkedIn Automation
        </Navbar.Link>
            </Dropdown.Item>

            <Dropdown.Item
              key="contact-data"
              showFullDescription
              description="Create your ideal filter based prospecting list"
              icon={icons.activity}
            >
              <Navbar.Link href="/contact-data" onClick={() => handler()} color="inherit">
              Contact Data
        </Navbar.Link>
              
            </Dropdown.Item>

            <Dropdown.Item key="Services">Services</Dropdown.Item>
            <Dropdown.Item
              key="production_ready"
              showFullDescription
              description="Scale your LinkedIn leads to predictably generate more revenue."
              icon={icons.flash}
            >
               <Navbar.Link href="/linkedin-lead" onClick={() => handler()} color="inherit" >
               LinkedIn Services
        </Navbar.Link>
              
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Link href="about-us" onClick={() => handler()} color="inherit">
          About Us
        </Navbar.Link>
        <Navbar.Link href="call" onClick={() => handler()} color="inherit">
          Contact Us
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#" variant="underline">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button
            className="getStarted"
            css={{
              backgroundColor: "#FF8140",
            }}
            as={Link}
            onClick={() => handler()}
            href="call"
          >
            Free Consulation
          </Button>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map(({ path, label }, i) => (
          <Navbar.CollapseItem key={i}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={path}
            >
              {label}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

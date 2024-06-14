
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="flex items-center inline-block gap-x-2 p-1 font-medium hover:bg-[var(--color-light-alt)] lg:border-none border-y border-solid border-[var(--color-primary)]"
      >
        <a href="/about" className="block">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center inline-block gap-x-2 p-1 font-medium hover:bg-[var(--color-light-alt)] lg:border-none border-y border-solid border-[var(--color-primary)]"
      >
        <a href="/classes" className="block">
          Classes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center inline-block gap-x-2 p-1 font-medium hover:bg-[var(--color-light-alt)] lg:border-none border-y border-solid border-[var(--color-primary)]"
      >
        <a href="/testimonials" className="block">
          Testimonials
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white shadow-none">
      <div className="w-[98%] mx-auto flex items-center justify-between lg:block">
        <a href='/' className='cursor-pointer'>
          <img src='images/logo.png' className='h-16 w-auto lg:m-auto' alt='Yogamitali Logo'/>
        </a>
        <div className="hidden lg:flex items-center justify-center mt-4 border-y border-solid border-[var(--color-primary)]">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden color-[var(--color-primary)]"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="var(--color-primary)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Nav
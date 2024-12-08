'use client'
import React, { useState } from 'react';
import Logo from '../ui/Logo';
import Link from 'next/link';
import Input from '../ui/Input';
import { IoBagOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full h-[60px] flex justify-between items-center md:px-10 px-4">
      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Desktop Links */}
      <div className="md:flex hidden items-center gap-4 text-[16px]">
        <Link href={"/"}><div>Home</div></Link>
        <Link href={"/products"}><div>New & Featured</div></Link>
        <Link href={"/contact"}><div>Contact Us</div></Link>
        <Link href={"/checkout"}><div>Checkout</div></Link>
        <div>Sale</div>
        <div>SNKRS</div>
      </div>

      {/* Search Bar & Buttons */}
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="md:block hidden">
          <Input />
        </div>
        <div>
          <CiHeart size={30} color="#000" />
        </div>
        <Link href={"/cart"}>
          <div>
            <IoBagOutline size={25} color="#000" />
          </div>
        </Link>
        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden block text-xl"
          onClick={toggleMenu}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 w-[250px] right-0 h-full bg-white shadow-lg z-50 p-5 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl"
          onClick={toggleMenu}
        >
          <IoClose />
        </button>
        <div className="mt-8 flex flex-col gap-4 text-[16px]">
          <Link href={"/"} onClick={toggleMenu}>Home</Link>
          <Link href={"/products"} onClick={toggleMenu}>New & Featured</Link>
          <Link href={"/contact"} onClick={toggleMenu}>Contact Us</Link>
          <Link href={"/checkout"} onClick={toggleMenu}>Checkout</Link>
          <div>Sale</div>
          <div>SNKRS</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

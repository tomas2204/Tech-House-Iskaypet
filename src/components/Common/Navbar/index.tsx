import React from 'react';
import Image from 'next/image'
import './styles.scss'
import BurguerMenuIcon from '@/assets/icons/burguer_menu_icon.svg'
import searchIcon from '@/assets/icons/search_icon.svg'
import logoIcon from '@/assets/icons/logo_icon.svg'
import loginIcon from '@/assets/icons/login_icon.svg'
import shoppingCartIcon from '@/assets/icons/shopping_cart_icon.svg'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <button type='button' className='btn'>
        <Image src={BurguerMenuIcon} alt='burguerMenu' width={25} height={25} className='icon icon__burguerMenu' />
      </button>
      <button type='button' className='btn'>
        <Image src={searchIcon} alt='searchIcon' width={25} height={25} className='icon icon__search' />
      </button>
      <button type='button' className='btn'>
        <Image src={logoIcon} alt='logoIcon' width={187} height={25} className='icon icon__logo' />
      </button>
      <button type='button' className='btn'>
        <Image src={loginIcon} alt='loginIcon' width={25} height={25} className='icon icon__login' />
      </button>
      <button type='button' className='btn'>
        <Image src={shoppingCartIcon} alt='shoppingCartIcon' width={25} height={25} className='icon icon__shoppingCart' />
      </button>
    </nav>
  );
};

export default Navbar;
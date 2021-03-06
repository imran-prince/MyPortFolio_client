import React from 'react';
import CustomLink from './CustomLink';

const Navbar = () => {
    return (
        <div class="navbar container ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow   rounded-box w-52 my-10">
                        <li><CustomLink to='/'>Home</CustomLink ></li>
                        <li><CustomLink to='/aboutme'>About Me</CustomLink ></li>
                        <li><CustomLink to='/contact'>Contact</CustomLink ></li>
                        <li><CustomLink to='/blog'>Blog</CustomLink ></li>




                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Portfolio</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><CustomLink to='/'>Home</CustomLink ></li>
                    <li><CustomLink to='/aboutme'>About Me</CustomLink ></li>
                    <li><CustomLink to='/contact'>Contact</CustomLink ></li>
                    <li><CustomLink to='/blog'>Blog</CustomLink ></li>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="avatar online">
                    <div class="w-24 rounded-full">
                        <img src=" https://i.ibb.co/6XK5Kbc/pride-flag-designify.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
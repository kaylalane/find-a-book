import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";
import { FormEvent } from "react";
import { SignOutButton } from "@clerk/clerk-react";
import * as Menubar from "@radix-ui/react-menubar";

export default function Navbar() {
    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
    };
    return (
        <header>
            <nav>
                <NavLink to="/" className="logo">
                    {" "}
                    Find-a-book{" "}
                </NavLink>
                <form
                    action=""
                    className="search-form"
                    onSubmit={(e) => handleSearch(e)}
                >
                    <input type="search" className="search-form__input" />
                    <button type="submit" className="search-form__button ">
                        <span className=" sr-only ">Search Button</span>{" "}
                    </button>
                </form>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <img
                            src="/user.svg"
                            alt="User Icon"
                            className="avatar__image"
                        />
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="dropdown-container">
                            <DropdownMenu.Label />
                            <DropdownMenu.Item className=" dropdown__item">
                                <a href="/account">Profile</a>
                            </DropdownMenu.Item>

                            <DropdownMenu.Item className=" dropdown__item">
                                Friends
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className=" dropdown__item">
                                Groups
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className=" dropdown__item">
                                Discussions
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className=" dropdown__item">
                                <a href="/comments">Comments</a>
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator className="separator" />
                            <DropdownMenu.Item className=" dropdown__item">
                                Notifications
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className=" dropdown__item">
                                Settings
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className=" dropdown__item btn--transparent">
                                <SignOutButton />
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </nav>
            <menu className="menu__list">
                <a href="/" className="menu-item">
                    Home
                </a>
                <a href="/" className="menu-item">
                    My Books
                </a>
                <a href="/recommendations" className="menu-item">
                    Browse
                </a>

                <Menubar.Root>
                    <Menubar.Menu>
                        <Menubar.Trigger className="menubar__trigger">
                            Community
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-caret-down-filled"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path
                                    d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"
                                    strokeWidth="0"
                                    fill="currentColor"
                                />
                            </svg>
                        </Menubar.Trigger>{" "}
                        <Menubar.Portal>
                            <Menubar.Content className="menubar__content">
                                <Menubar.Item className="menubar__item">
                                    Groups
                                </Menubar.Item>
                                <Menubar.Item className="menubar__item">
                                    Recommendations
                                </Menubar.Item>
                            </Menubar.Content>
                        </Menubar.Portal>
                    </Menubar.Menu>
                </Menubar.Root>
            </menu>
        </header>
    );
}

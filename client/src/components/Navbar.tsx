import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";
import { FormEvent } from "react";

export default function Navbar() {

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
    }
        return (
            <header> 
                <NavLink to="/" className="logo"> Find-a-book </NavLink> 
                <form action="" className="search-form" onSubmit={(e) => handleSearch(e)}> 
                    <input type="search" className="search-form__input"/>
                    <button type="submit" className="search-form__button "> 
                    <span className=" sr-only ">Search Button</span> </button> 
                </form>

                <nav> 
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "isActive" : "" } >
                    Home
                </NavLink>

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
                                <a href="/profile">Profile</a>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className=" dropdown__item">
                                <a href="/books">Books</a>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className=" dropdown__item">
                                Messages
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
                                Comments
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator className="separator" />
                            <DropdownMenu.Item className=" dropdown__item">
                                Notifications
                            </DropdownMenu.Item>
                            <DropdownMenu.Item className=" dropdown__item">
                                Settings
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </nav>
        </header>
    );
}

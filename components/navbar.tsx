"use client";
import NextLink from "next/link";
import DarkModeToggle from "./toggle";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./logo";
import {
  Container,
  Box,
  Link,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box className="flex items-center justify-between">
      <Container className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        <Logo />
      </Container>
      <div className="flex gap-20 ">
        <div className="hidden sm:flex items-center gap-7 text-sm">
          <NextLink href="/">About</NextLink>
          <NextLink href="/projects">Projects</NextLink>
          <NextLink
            target="_blank"
            href="https://github.com/Arbtrage/portfolio"
          >
            Source
          </NextLink>
        </div>
      </div>
      <div className="align-right flex items-center gap-5 justify-between">
        <div className="flex justify-center">
          <DarkModeToggle />
        </div>
        <div className="sm:hidden flex items-center justify-between gap-3">
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <MenuItem as={Link} href="/">
                About
              </MenuItem>
              <MenuItem as={Link} href="/projects">
                Projects
              </MenuItem>
              <MenuItem
                as={Link}
                target="_blank"
                href="https://github.com/Arbtrage/portfolio"
              >
                View Source
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;

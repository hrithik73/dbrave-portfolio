import React, { useState } from "react"

import Link from "next/link"
import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = ({ current }) => {
  const [navigation, setNavigation] = useState([
    { name: "Merch", href: "/merch", current: false },
    { name: "Songs", href: "/songs", current: false },
    { name: "Timeline", href: "/timeline", current: false },
    { name: "Contact", href: "/contact", current: false },
  ])

  if (!current === undefined) {
    setNavigation([
      (navigation.find((item) => item.name === current).current = true),
    ])
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <img
                      className="block lg:hidden h-20 w-15 cursor-pointer"
                      src="logo2.png"
                      alt="Workflow"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      className="hidden lg:block h-20 w-20 cursor-pointer"
                      src="logo2.png"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6 self-center ">
                  <div className="flex space-x-4 content-center ">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default Header

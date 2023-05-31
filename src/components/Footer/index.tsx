import React from 'react'

export default function Footer() {
  const linkHoverClassName =
    'text-gray-500 hover:text-gray-800 transaction-all ease-in-out duration-200ms'

  return (
    <footer className="flex justify-between items-center pt-4 border-t border-solid border-t-gray-200">
      <div>
        <h3 className="text-gray-800 font-bold">Vini!</h3>
        <p className="text-xs text-gray-500">viniciusferreiradev07@gmail.com</p>
      </div>
      <ul className="flex gap-2.5">
        <li>
          <a
            href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkHoverClassName}
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/viniciusferreira7"
            target="_blank"
            rel="noopener noreferrer"
            className={linkHoverClassName}
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  )
}

function Footer() {
  return (
      <footer className="w-full bg-white fixed bottom-0 dark:bg-[#1A5319]">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-white">
          Hackaton Space Apps
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-whitesm:mt-0">
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
  );
}

export default Footer;


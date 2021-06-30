import { memo, useEffect, useRef, useState } from 'react';
import MenuList from '../MainSection/MenuList';

export default memo(function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerMenuButtonRef = useRef();

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(hamburgerMenuButtonRef.current)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center sm:hidden z-50">
        <div className="relative mx-auto">
          <nav>
            <button
              ref={hamburgerMenuButtonRef}
              className="text-gray-500 w-10 h-9 relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex w-5 left-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={
                    isOpen
                      ? 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rotate-45'
                      : 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5'
                  }
                ></span>
                <span
                  aria-hidden="true"
                  className={
                    isOpen
                      ? 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out opacity-0'
                      : 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out'
                  }
                ></span>
                <span
                  aria-hidden="true"
                  className={
                    isOpen
                      ? 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -rotate-45'
                      : 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out translate-y-1.5'
                  }
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="bg-gray-100 sm:hidden absolute h-screen w-full rounded z-40 top-0 py-6 left-0 shadow-inner">
          <div className="h-full overflow-auto overscroll-contain py-8">
            <MenuList />
          </div>
        </div>
      )}
    </>
  );
});

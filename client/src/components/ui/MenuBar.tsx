function MenuBar() {
  return (
    <div className="sticky bottom-5 flex space-x-2    ">
      <div>
        {/* prettier-ignore */}
        <ul className="menu menu-horizontal bg-emerald-500 shadow-md shadow-emerald-600 rounded-box lg:space-x-3 lg:text-base text-gray-50">
          <li className="hover:-translate-y-1 duration-250"><a>stopwatch</a></li>
          <li className="hover:-translate-y-1 duration-250"><a>graph</a></li>
          <li className="hover:-translate-y-1 duration-250"><a>reflection</a></li>
        </ul>
      </div>
      <div className="menu bg-emerald-500 shadow-md shadow-emerald-600 rounded-box lg:space-x-3 lg:text-base text-gray-50 flex justify-center p-3 text-5xl hover:translate-x-1 duration-250 cursor-pointer">
        <p className="  text-xl active:translate-x-2 overflow-hidden duration-500 ease-out">→</p>
      </div>
    </div>
  );
}

export default MenuBar;

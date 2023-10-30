export default function Header() {
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
      <div className="flex-1">
        <a className="normal-case text-xl"><i className='bx bxl-amazon text-orange-500 text-5xl hover:shadow-xl rounded-full'></i></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-base font-semibold capitalize">
          <li><a>home</a></li>
          <li><a>about</a></li>
          <li><a>service</a></li>
          <li>
            <details className="bg-slate-100 rounded-lg">
              <summary>category</summary>
              <ul className="p-2 w-36 text-sm font-semibold capitalize bg-slate-100 ">
                <li><a>Mens Sneaker</a></li>
                <li><a>Mens Pants</a></li>
                <li><a>Mens Boot</a></li>
                <li><a>Bag</a></li>
                <li><a>Cap</a></li>
                <li><a>Earphones</a></li>
                <li><a>Bottle</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

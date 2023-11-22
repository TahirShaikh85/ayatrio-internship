function Topbar() {
  return (
    <div className="navbar px-4 py-2">
      <div className="head flex align-items-center">
        <h6 className="font-weight-bold">Men's Shoes (50)</h6>
      </div>
      <div className="controls d-flex gap-4">
        <div className="">Hide Filters <i className="fa fa-bars mx-2" aria-hidden="true"></i></div>
        <div>
          <select className="border-0" name="sort" id="sort">
            <option value="default">Sort By</option>
            <option value="default">Name</option>
            <option value="default">Size</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

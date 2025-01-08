

const Footer = () => (
    <footer className="bg-light text-center py-3 fixed-bottom">

    <div className="container">
      <div className="row">
        <div className="col">
          <h5>Features</h5>
          <ul className="list-unstyled">
            <li><a href="#">Cool stuff</a></li>
            <li><a href="#">Random feature</a></li>
            <li><a href="#">Team feature</a></li>
          </ul>
        </div>
        <div className="col">
          <h5>Resources</h5>
          <ul className="list-unstyled">
            <li><a href="#">Resource</a></li>
            <li><a href="#">Resource name</a></li>
          </ul>
        </div>
        <div className="col">
          <h5>About</h5>
          <ul className="list-unstyled">
            <li><a href="#">Team</a></li>
            <li><a href="#">Locations</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

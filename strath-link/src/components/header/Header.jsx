import './Header.css'
function Header() {
  return (
    <nav id="myNav">
    <div className="home">
        {/* <HashLink to="/#home">HOME</HashLink> */}
        <a href="/home">HOME</a>
    </div>
    <div className="content">
        {/* <HashLink to="/#messages">Messages</HashLink> */}
        <a href="/messages">Messages</a>
        {/* <HashLink to="/#students">Find Students</HashLink> */}
        <a href="/students">Students</a>
    </div>
    </nav>
  )
}

export default Header
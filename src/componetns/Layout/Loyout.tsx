import Navbar from "../NavBar/NavBar";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}
import TcaLogo from "./tcalogo";
import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <div>
                    <div className="lg:ml-8 lg:w-48 md:w-40 w-32 lg:h-20 md:h-12 h-6">
                      <Link to="/"><TcaLogo /></Link>
                    </div>
        </div>
    );
}
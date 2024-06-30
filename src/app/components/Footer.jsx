
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} My Company. All rights reserved.</p>
        
        <div className="py-2  flex items-center justify-center gap-4">
        <FaInstagram/>
        <FaTwitter />
        <FaFacebook />
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer

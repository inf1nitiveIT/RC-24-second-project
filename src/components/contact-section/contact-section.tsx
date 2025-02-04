import { FaTelegramPlane, FaVk, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PagesLinks } from '../../utils/const';

function ContactSection() {
  return (
    <div className="text-center border-2 rounded-3xl border-[#D4AF37] text-white max-w-[90%] lg:max-w-4xl md:max-w-lg mx-auto mt-3 p-4 md:p-6 relative">
      <Link to={PagesLinks.MAIN}>
        <button
          className="absolute top-2 right-2 text-white bg-[#1A1A1A] w-8 h-8 flex items-center justify-center rounded-full
          hover:bg-[#D4AF37] hover:shadow-lg transition duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill=""
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12 "
            />
          </svg>
        </button>
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-[#D4AF37]">Contact Us</h1>
      <p className="text-xl mb-4">We&apos;re here to help! If you have any questions or need assistance, feel free to reach out to our support team.</p>

      <h2 className="text-2xl font-semibold mb-4 text-[#D4AF37]">Technical Support:</h2>
      <p className="mb-4">For any technical issues or inquiries, please don&apos;t hesitate to contact us. We&apos;re available to assist you with any problems you may encounter.</p>

      <h2 className="text-2xl font-semibold mb-4 text-[#D4AF37]">Contact Methods:</h2>
      <p className="mb-2">- <strong className='text-[#D4AF37]'>Telegram:</strong> Reach out to us via our Telegram channel for real-time support and updates.</p>
      <p className="mb-2">- <strong className='text-[#D4AF37]'>VK:</strong> Join us on VK to stay connected and get the latest news.</p>
      <p className="mb-2">- <strong className='text-[#D4AF37]'>Instagram:</strong> Follow us on Instagram for exciting updates and behind-the-scenes content.</p>

      <h2 className="text-2xl font-semibold mb-4 text-[#D4AF37]">Email:</h2>
      <p className="mb-4">You can also send us an email at <a href="mailto:inf1nitiveit@gmail.com" className="text-[#D4AF37]">inf1nitiveit@gmail.com</a> for more detailed inquiries.</p>

      <div className="flex justify-center space-x-4">
        <a href="https://t.me/inf1nitive" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane className="text-4xl text-[#0088cc]" />
        </a>
        <a href="https://vk.com/1nfinitive" target="_blank" rel="noopener noreferrer">
          <FaVk className="text-4xl text-[#4c75a3]" />
        </a>
        <a href="https://www.instagram.com/inf1nitive" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-4xl text-[#E4405F]" />
        </a>
      </div>
    </div>
  );
}

export default ContactSection;

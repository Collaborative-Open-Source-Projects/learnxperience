import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar';
import ChatBot from '../components/Chatbot';

export default function DashboardLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <div>
            <SideBar />
        </div>
          {children}
        <ChatBot />
      </body>
    </html>
  );
}

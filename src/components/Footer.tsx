const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500 bg-gray-950">
      © {new Date().getFullYear()} Akhilesh Verma. All rights reserved.
    </footer>
  );
};

export default Footer;

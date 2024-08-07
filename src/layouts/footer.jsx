import Box from '../components/box';

const Footer = () => {
  return (
    <footer className="text-gray-500 text-sm font-inherit font-semibold mt-auto py-4">
      <Box containerStyle="flex items-center text-center justify-center">
        &copy; {new Date().getFullYear()} Quick CV. All rights reserved.
      </Box>
    </footer>
  );
};

export default Footer;

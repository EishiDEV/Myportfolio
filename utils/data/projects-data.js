import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
  id: 1,
  name: 'NORSU Library Management System',
  description: "Led the end-to-end development of a complete library management system for NORSU. Built with PHP and MySQL for backend operations including book cataloging, borrower management, circulation tracking, and analytics dashboard. Implemented responsive UI using Tailwind CSS and Bootstrap, featuring barcode scanning, real-time availability, automated notifications, and comprehensive reporting. The system handles thousands of daily transactions across multiple campus branches.",
  tools: ['PHP', 'MySQL', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'Ajax', 'Chart.js', 'phpMyAdmin'],
  role: 'Lead Developer (Frontend & Backend)',
  code: '',
  demo: '',
  image: crefin,
},
    {
  id: 2,
  name: 'White Crowns Store',
  description: "Led the full-stack development of an e-commerce platform for White Crowns Store. Built a complete online store with product catalog, shopping cart, user authentication, order management, and secure checkout. Implemented responsive design ensuring seamless experience across desktop and mobile devices. Features include product search/filtering, customer accounts, order tracking, and an admin dashboard for inventory and sales management.",
  tools: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'Tailwind CSS', 'Bootstrap', 'Ajax', 'jQuery'],
  role: 'Lead Developer (Full Stack)',
  code: '',
  demo: 'https://zeshia.whitecrownshub.com/',
  image: travel,
},
    {
  id: 3,
  name: 'NORSU Procurement System',
  description: "Led the full-stack development of a comprehensive procurement management system for Negros Oriental State University. The system streamlines purchase requests, supplier management, bidding processes, purchase orders, and inventory tracking. Features include multi-level approval workflows, budget checking, supplier performance metrics, automated purchase order generation, and real-time procurement tracking. Built with responsive design for accessibility across departments and campuses.",
  tools: ['PHP', 'MySQL', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'Ajax', 'jQuery', 'Chart.js', 'TCPDF'],
  role: 'Lead Developer (Full Stack)',
  code: '',
  demo: '',
  image: realEstate, // Replace 'realEstate' with your actual image variable
},
    {
  id: 4,
  name: 'NORSU Library QR Auto-Generation System',
  description: "Led the development of an automated QR code generation and management system for the NORSU Library Management System. The system generates unique QR codes for each book in the library catalog, enabling instant checkout, returns, and inventory tracking via barcode/QR scanning. Features include batch QR generation for new acquisitions, printable QR labels, mobile scanner integration for librarians, and real-time book status updates when scanned. This system reduced manual data entry time by 80% and eliminated checkout errors.",
  tools: ['PHP', 'JavaScript', 'PHP QR Code Library', 'MySQL', 'Tailwind CSS', 'Bootstrap', 'Ajax', 'HTML5 Canvas'],
  code: '',
  demo: '',
  image: ayla,
  role: 'Lead Developer (Full Stack)',
}
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
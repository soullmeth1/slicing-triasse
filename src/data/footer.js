import logo from '../assets/img/img-brand-logo-white.png';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export const navFooter = [
  {
    label: 'Lainnya',
    lists: [
      'Syarat & Ketentuan',
      'Karier',
      'Kebijakan Privasi',
      'Cara Kerja',
      'Login',
    ],
  },
  {
    label: 'Hubungi Kami',
    lists: [
      'cs@triasse.com',
      '021-35760497',
      '08-1111-22-015',
      'Senin - Jumat',
      '(09.00 - 18.00 WIB)',
    ],
  },
  {
    label: 'Alamat',
    desc:
      'Gedung Perkantoran Madison Park, Lantai 6 Unit B. No. 02. Jl. Letjen S. Parman Kav 28, Jakarta 11470',
  },
];

export const description = {
  img: logo,
  desc:
    'Platform pertama untuk tes laboratorium dan pemeriksaan kebugaran tubuh di Indonesia yang memberikan pelanggan kemampuan untuk membuat keputusan yang lebih baik bagi kebugaran tubuh mereka.',
};

export const medsos = [
  {
    img: FaFacebookF,
    alt: 'facebook',
    href: 'https://www.facebook.com/TriasseID/',
  },
  {
    img: FaInstagram,
    alt: 'instagram',
    href: 'https://www.instagram.com/triasseid/',
  },
  {
    img: FaLinkedinIn,
    alt: 'linked in',
    href: 'https://www.linkedin.com/company/triasse/',
  },
  {
    img: FaPinterestP,
    alt: 'pinterest',
    href: 'https://id.pinterest.com/TriasseID/',
  },
  {
    img: FaTwitter,
    alt: 'twitter',
    href: 'https://twitter.com/TriasseID',
  },
  {
    img: FaYoutube,
    alt: 'youtube',
    href: 'https://www.youtube.com/channel/UCcYQJiFpJ2QF-9lFsvHW0QQ',
  },
];

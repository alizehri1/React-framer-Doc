import { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef();
  const data = [
    {
      desc: 'Hi Ali Welcome Back',
      filesize: '.9mb',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Download Now!',
        tagColor: 'green',
      },
    },
    {
      desc: 'Anything on mind Today?',
      filesize: '.1mb',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Download Now!',
        tagColor: 'green',
      },
    },
    {
      desc: 'Cryptocurrency offers decentralized finance solutions and challenges traditional banking systems.',
      filesize: '.9mb',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Download Now!',
        tagColor: 'green',
      },
    },
    {
      desc: 'Backup Important Files',
      filesize: '.9mb',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Download Now!',
        tagColor: 'green',
      },
    },
    {
      desc: 'React components enhance code reusability, making UI development more efficient.',
      filesize: '.9mb',
      close: true,
      tag: {
        isOpen: false,
        tagTitle: 'Download Now!',
        tagColor: 'green',
      },
    },
  ];

  return (
    <div
      ref={ref}
      className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '
    >
      {data.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;

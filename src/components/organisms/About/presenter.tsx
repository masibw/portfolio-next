import { FC } from 'react';
import Image from 'next/image';

const Presenter: FC = () => (
  <div>
    <h1 className="text-4xl text-primary">About</h1>
    <div className="flex">
      <Image
        src="/icon.jpg"
        alt="masi's icon"
        width={146}
        height={146}
        className="w-full rounded-3xl"
        layout="intrinsic"
      />
      <ul>
        <li>Github: @masibw</li>
        <li>Twitter: @masibw</li>
        <li>Mail: masi19bw[at]gmail.com</li>
        <li>blog: mesimasi.com</li>
      </ul>
    </div>
  </div>
);

export default Presenter;

import { FC } from 'react';
import Image from 'next/image';
import CategoryHeader from '../../atoms/categoryHeader';

const Presenter: FC = () => (
  <div>
    <CategoryHeader content="About" />
    <div className="md:flex md:gap-x-12 md:justify-center text-center">
      <div className="border rounded-3xl p-8 border-secondary inline-block">
        <Image
          src="/icon.svg"
          alt="masi's icon"
          width={146}
          height={146}
          className="w-full rounded-3xl"
          layout="intrinsic"
        />
      </div>
      <div className="flex justify-center text-2xl leading-relaxed cursor-pointer">
        <table>
          <tr>
            <a href="https://github.com/masibw">Github: @masibw</a>
          </tr>
          <tr>
            <a href="https://twitter.com/masibw">Twitter: @masibw</a>
          </tr>
          <a href="mailto:masi19bw[at]gmail.com">Mail: masi19bw[at]gmail.com</a>
          <tr>
            <a href="https://mesimasi.com">blog: mesimasi.com</a>
          </tr>
        </table>
      </div>
    </div>
  </div>
);

export default Presenter;

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
      <div className="flex justify-center text-2xl leading-relaxed">
        <table>
          <tr>
            <td className="text-left">Name:</td>
            <td className="text-right">まし</td>
          </tr>
          <tr>
            <td className="text-left">Github:</td>
            <td className="text-right">
              <a href="https://github.com/masibw">@masibw</a>
            </td>
          </tr>
          <tr>
            <td className="text-left">Twitter:</td>
            <td className="text-right">
              <a href="https://twitter.com/masibw">@masibw</a>
            </td>
          </tr>
          <td className="text-left">Mail:</td>
          <td className="text-right">
            <a href="mailto:masi19bw[at]gmail.com">masi19bw[at]gmail.com</a>
          </td>
          <tr>
            <td className="text-left">blog:</td>
            <td className="text-right">
              <a href="https://mesimasi.com"> mesimasi.com</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
);

export default Presenter;

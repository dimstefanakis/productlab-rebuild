import { Anton } from 'next/font/google'
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';
import Image from 'next/image';

const anton = Anton({ weight: '400', preload: false })

function DataSourcing() {
  const isLargerThan768 = useMediaQuery("(min-width: 768px)")
  return (
    <div className="flex flex-col md:flex-row justify-between w-full my-12 p-6 md:p-12 rounded-md bg-[#F3F4F0] min-h-auto md:h-[600px]">
      <div className="flex flex-col w-full md:w-[48%] order-2 md:order-1 h-full">
        <h2 className={`${anton.className} flex-none md:flex-1 text-4xl md:text-6xl my-6 md:my-0`}>
          Data Sourcing
        </h2>
        <p className="text-xl">
          Through our top rated mobile apps, our community of vetted consumer panelists proactively contribute transaction documents including receipts, digital accounts, paychecks, emails, and more.  Our high retention rate and rigorous vetting process enables some of the highest quality longitudinal research in the industry.
        </p>
        <div className="flex mt-4 w-full space-x-4">
          <Link href="https://apps.apple.com/us/app/productlab/id1557610246" target='_blank'>
            <Image
              src="/app-store-badge.png"
              alt="App store"
              width={120}
              height={40}
              className="h-12 object-cover rounded-md w-auto"
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=ai.productlab&hl=en&gl=US&pli=1" target='_blank'>
            <Image
              src="/google-play-badge.png"
              alt="Play store"
              width={120}
              height={40}
              className="h-12 object-cover rounded-md w-auto"
            />
          </Link>
        </div>
        {isLargerThan768 ? (
          <div className="flex w-full mt-12 py-3 bg-[#E7E9E5] text-center">
            <div className="flex flex-col items-center w-1/3">
              <p>Over</p>
              <p className="font-bold text-2xl">150k</p>
              <p>Panelists</p>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <p>Over</p>
              <p className="font-bold text-2xl">6M</p>
              <p>Documents processed</p>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <p>Avg.</p>
              <p className="font-bold text-2xl">4.8</p>
              <p>App store rating</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full mt-12 py-3 bg-[#E7E9E5] text-center divide-y divide-[#BABCBB]">
            <div className="flex flex-col items-center w-full pb-3">
              <p>Over</p>
              <p className="font-bold text-2xl">150k</p>
              <p>Panelists</p>
            </div>
            <div className="flex flex-col items-center w-full py-3">
              <p>Over</p>
              <p className="font-bold text-2xl">6M</p>
              <p>Documents processed</p>
            </div>
            <div className="flex flex-col items-center w-full pt-3">
              <p>Avg.</p>
              <p className="font-bold text-2xl">4.8</p>
              <p>App store rating</p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full md:w-[48%] order-1 md:order-2 h-full">
        <Image
          src="/data_sourcing.png"
          alt="Data Sourcing"
          width={500}
          height={600}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  )
}

export default DataSourcing;

import { Anton } from 'next/font/google'
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';

const anton = Anton({ weight: '400', preload: false })

function DataProcessing() {
  const isLargerThan768 = useMediaQuery("(min-width: 768px)")
  return (
    <div className="flex flex-col md:flex-row justify-between w-full my-12 p-6 md:p-12 rounded-md bg-[#F3F4F0] min-h-auto md:h-[600px]">
      <div className="w-full md:w-[48%] order-2 md:order-1 h-full">
        <Image
          src="/data_processing.png"
          alt="Data Processing"
          width={500}
          height={600}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col w-full md:w-[48%] order-1 md:order-2 h-full">
        <h2 className={`${anton.className} flex-none md:flex-1 text-4xl md:text-6xl my-6 md:my-0`}>
          Data Processing
        </h2>
        <p className="text-xl">
          We use machine learning to transform data into reliable structured datasets delivered 24/7 directly to data science leaders through AWS, BigQuery, SnowFlake, and custom data feeds.
        </p>
        {isLargerThan768 ? (
          <div className="flex w-full mt-12 py-3 bg-[#E7E9E5] text-center">
            <div className="flex flex-col items-center w-1/3">
              <p>Over</p>
              <p className="font-bold text-2xl">99%</p>
              <p>SLA</p>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <p>Over</p>
              <p className="font-bold text-2xl">500M</p>
              <p>Data points</p>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <p>Over</p>
              <p className="font-bold text-2xl">50</p>
              <p>Document types</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full mt-12 py-3 bg-[#E7E9E5] text-center divide-y divide-[#BABCBB]">
            <div className="flex flex-col items-center w-full pb-3">
              <p>Over</p>
              <p className="font-bold text-2xl">99%</p>
              <p>SLA</p>
            </div>
            <div className="flex flex-col items-center w-full py-3">
              <p>Over</p>
              <p className="font-bold text-2xl">500M</p>
              <p>Data points</p>
            </div>
            <div className="flex flex-col items-center w-full pt-3">
              <p>Over</p>
              <p className="font-bold text-2xl">50</p>
              <p>Document types</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DataProcessing;

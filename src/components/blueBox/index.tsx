import { Anton } from 'next/font/google'

const anton = Anton({ weight: '400', preload: false })

function BlueBox() {
  return (
    <div className="my-12 px-6 md:px-12 py-18 rounded-md flex items-center flex-col bg-[#137CDE]">
      <h2 className={`${anton.className} text-center text-white text-4xl md:text-6xl`}>
        Unmatched Panel & Data Integrity
      </h2>
      <div className="flex flex-col md:flex-row w-full mt-16 justify-between">
        <div className="flex flex-col text-white bg-[#1171C9] px-6 py-8 w-full md:w-[48%] rounded-md items-center text-center text-xl">
          <p className="text-4xl font-bold">
            Vetted Community
          </p>
          <p className="mt-3">
            Experience best in class quality with our directly sourced community backed by proprietary systems that utilize facial recognition, government ID verification, and more.
          </p>
        </div>
        <div className="flex flex-col text-white bg-[#1171C9] px-6 py-8 mt-8 md:mt-0 w-full md:w-[48%] rounded-md items-center text-center text-xl">
          <p className="text-4xl font-bold">
            Quality Data
          </p>
          <p className="mt-3">
            We combine machine learning with operational processes to ensure panelists are trained to provide the right data and that our systems store and deliver information with 99.9% accuracy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlueBox;
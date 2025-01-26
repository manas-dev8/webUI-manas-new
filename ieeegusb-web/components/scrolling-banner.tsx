"use client"

export default function ScrollingBanner() {
  return (
    <div className="w-full overflow-hidden bg-[#4169E1] py-3">
      <div className="animate-scroll-x flex whitespace-nowrap">
        {/* Duplicate content for seamless loop */}
        <div className="flex items-center mr-8">
          <span className="text-white text-lg font-medium">WEB DEVELOPMENT</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">UI/UX DESIGN</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">COMPETITION</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">IS COMING SOON</span>
        </div>
        {/* Duplicate for seamless scrolling */}
        <div className="flex items-center mr-8">
          <span className="text-white text-lg font-medium">WEB DEVELOPMENT</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">UI/UX DESIGN</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">COMPETITION</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium"> IS COMING SOON</span>
        </div>
         {/* Duplicate for seamless scrolling */}
         <div className="flex items-center mr-8">
          <span className="text-white text-lg font-medium">WEB DEVELOPMENT</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">UI/UX DESIGN</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">COMPETITION</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">IS COMING SOON</span>
        </div>
         {/* Duplicate for seamless scrolling */}
         <div className="flex items-center mr-8">
          <span className="text-white text-lg font-medium">WEB DEVELOPMENT</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">UI/UX DESIGN</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">COMPETITION</span>
          <span className="text-white mx-4">❋</span>
          <span className="text-white text-lg font-medium">IS COMING SOON</span>
        </div>
      </div>
    </div>
  )
}


'use client'

import React, {useState} from 'react';

const TwoColumnLayout = () => {
    const [isLeftSectionOpen, setIsLeftSectionOpen] = useState(true);

  const toggleLeftSection = () => {
    setIsLeftSectionOpen(!isLeftSectionOpen);
  };

  const leftColumnWidth = isLeftSectionOpen ? 'w-1/4' : 'w-0';
  const centerColumnWidth = isLeftSectionOpen ? 'w-1/2' : 'w-3/4';

  return (
    <div className="flex">
    {/* Left Section */}
    <div className={`h-screen overflow-y-auto sticky top-0 bg-gray-200 transition-width duration-300 ${leftColumnWidth}`}>
      <div className="h-full p-4">
        {/* Menu */}
        <ul className="space-y-2">
          {[...Array(30)].map((_, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-md">
              Menu Item {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className={`h-screen overflow-y-auto sticky top-0 bg-gray-200 ${centerColumnWidth}`}>
      {/* Left Section */}
      <button className="bg-gray-200 p-2" onClick={toggleLeftSection}>
        {isLeftSectionOpen ? 'Collapse' : 'Expand'} Left Section
      </button>
      {/* Your content for the left section */}
      {/* Add enough content to test scrolling */}
      <div className={`h-full ${isLeftSectionOpen ? '' : 'hidden'}`}>
        Left Section Content
        <br />
        {/* Add more content to extend the height */}
        {/* You can copy this line multiple times */}
        {/* This is just filler content */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec vehicula risus. Integer sodales ligula vel tempus lacinia. Duis vitae libero quis velit bibendum convallis. Integer auctor mauris id est feugiat, vitae cursus odio gravida. Vestibulum eu enim nec tortor viverra condimentum. Nulla facilisi. Nullam eget velit ut quam suscipit mattis. In eu ipsum eget odio efficitur tincidunt. Nam auctor lacinia mauris, ac viverra metus placerat sit amet. Maecenas vel turpis nisi. Integer ullamcorper ipsum in metus ullamcorper, non fermentum leo pulvinar. Integer ultricies ex vitae sodales varius. Vivamus id enim vitae nulla maximus posuere.
      </div>
    </div>

    <div className="w-1/4 min-h-screen h-[2000px] overflow-y-scroll">
      {/* Right Section */}
      {/* Your content for the right section */}
      {/* Add enough content to test scrolling */}
      <div className="h-full">
        Right Section Content
        <br />
        {/* Add more content to extend the height */}
        {/* You can copy this line multiple times */}
        {/* This is just filler content */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec vehicula risus. Integer sodales ligula vel tempus lacinia. Duis vitae libero quis velit bibendum convallis. Integer auctor mauris id est feugiat, vitae cursus odio gravida. Vestibulum eu enim nec tortor viverra condimentum. Nulla facilisi. Nullam eget velit ut quam suscipit mattis. In eu ipsum eget odio efficitur tincidunt. Nam auctor lacinia mauris, ac viverra metus placerat sit amet. Maecenas vel turpis nisi. Integer ullamcorper ipsum in metus ullamcorper, non fermentum leo pulvinar. Integer ultricies ex vitae sodales varius. Vivamus id enim vitae nulla maximus posuere.
      </div>
    </div>
  </div>
  );
};

export default TwoColumnLayout;

import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import '../../../styles/css/sidebarend.css';

function CertificateCard({ cert }) {
  const isPdf = cert.link.toLowerCase().endsWith('.pdf');

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        {isPdf ? (
          <embed
            src={cert.link}
            type="application/pdf"
            className="h-full w-full"
          />
        ) : (
          <img
            src={cert.link}
            alt={cert.name}
            className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
          />
        )}
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex items-center text-[#16f2b3] text-sm mb-2">
          <BsFillPatchCheckFill className="mr-1 text-lg text-violet-400" />
          <span className="font-medium">{cert.title}</span>
        </div>
        <p className="text-white text-lg sm:text-xl font-medium mb-2 hover:text-violet-500 transition-colors">
          {cert.name}
        </p>
        <p className="text-sm text-[#d3d8e8] line-clamp-3 flex-1 mb-3">
          {cert.description}
        </p>
        {/* <Link
          to={cert.link}
          target=""
          className="self-start bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs hover:bg-violet-600 transition-all duration-200"
        >
          View Certificate
        </Link> */}
      </div>
    </div>
  );
}

export default CertificateCard;
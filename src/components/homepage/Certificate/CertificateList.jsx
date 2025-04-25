import React from 'react';
import CertificateCard from './CertificateCard';
import {certifications} from '../../../utils/data/Certificate';

function CertificateList() {
  return (
    <div id="certificates" className="my-12 lg:my-24">
      <h2 className="text-center text-2xl font-semibold text-white mb-8">My Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {certifications.map((cert, idx) => (
          <CertificateCard cert={cert} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default CertificateList;
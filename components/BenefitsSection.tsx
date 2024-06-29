import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="bg-green-90 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Benefits Of Using SproutsAI:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Organizations</h3>
            <ul className="text-gray-600 space-y-2">
              <li>24*7 Hiring, anywhere speed up hiring by 10x</li>
              <li>Hiring better candidates faster</li>
              <li>Data Driven & Optimized</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Recruiter</h3>
            <ul className="text-gray-600 space-y-2">
              <li>10x Productivity Increase</li>
              <li>Identify top talents in near real-time</li>
              <li>Eliminates bias</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Candidate</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Better interview match</li>
              <li>Real-time job search, interview and feedback</li>
              <li>Significantly improve candidate search exp.</li>
            </ul>
          </div>
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md text-center col-span-1 md:col-span-3">
            <p className="text-gray-800 italic mb-4">
              "SproutsAI has revolutionized our hiring process! Their AI platform effortlessly attracts top talent with tailored job descriptions and automates screening calls. Thanks to SproutsAI, we found our dream team in no time. Highly recommended!"
            </p>
            <p className="font-bold text-blue-600">- Emily</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

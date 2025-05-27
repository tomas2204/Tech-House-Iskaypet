'use client'
import React from 'react';
import './styles.scss'
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import { SectionsProps } from './interface';

const Sections: React.FC<SectionsProps> = ({ steps }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const defaultSection = steps[0];
  const sectionParam = searchParams.get('section');
  const currentSection = sectionParam && steps.includes(sectionParam)
    ? sectionParam
    : defaultSection;

  const handleSectionChange = (section: string) => {
    if (section === currentSection) return;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('section', section);
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <ul className='steplist'>
      {steps.map((step, index) => (
        <li
          className={`step ${step === currentSection ? 'step--active' : ''}`}
          onClick={() => handleSectionChange(step)}
          key={`${step}${index}`}
        >
          {step}
        </li>
      ))}
    </ul>
  );
};

export default Sections;

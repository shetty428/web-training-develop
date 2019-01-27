import React from 'react';
import { H1 } from '@d3banking/web-sdk/components/Text';

interface SectionContentProps {
  email?: string;
  phoneNumber?: string;
}

export default ({ phoneNumber, email }: SectionContentProps) => {
  // Don't show anything if the phoneNumber and email don't exist
  if (!phoneNumber && !email) {
    return null;
  }

  return (
    <div className="customer-support">
      <H1 className="customer-support-title text-right">Customer Support</H1>
      {phoneNumber && (
        <div className="customer-support-phone-number text-right">
          <a href={`tel:${phoneNumber}`} className="phone-number-link">
            {phoneNumber}
          </a>
        </div>
      )}
      {email && (
        <div className="customer-support-email text-right">
          <a href={`mailto:${email}`} className="e-mail-link">
            {email}
          </a>
        </div>
      )}
    </div>
  );
};

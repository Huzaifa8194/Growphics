'use client';

import { useParams } from 'next/navigation';
import ServiceDetailsPage from '../page';

export default function DynamicPortfolioPage() {
  const params = useParams();
  console.log(params);

  // Use serviceDetailsId instead of portfolioDetailsId
  const serviceDetailsId = parseInt(params.serviceDetailsId, 10);

  console.log(serviceDetailsId);
  return <ServiceDetailsPage id={serviceDetailsId} />;
}
